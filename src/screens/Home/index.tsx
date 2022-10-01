import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from "react"
import { apiAll, apiName, apiRegion } from "../../api/api"

import {AiOutlineSearch, AiOutlineLoading, AiOutlineCloseSquare} from 'react-icons/ai'
import { Link } from "react-router-dom"

interface Countrys{
  area: Key|Number; 
  flags: { svg: string | undefined }; 
  name: { common: string }; 
  population: string; 
  continents: string; 
  capital: string
}

export default function Home(params:any) {
  
  const [countrys, setCountrys] = useState<Countrys[]>([])
  
  const [search, setSearch] = useState<string>('')
  const [region, setRegion] = useState<string>("All")
  
  const spin=(
    <div className="flex flex-1 mt-28 justify-center items-center">
      <AiOutlineLoading
        className=" text-[50px] animate-spin text-zinc-300"
      />
    </div>
    )
  const cards=(
    <div className="grid gap-4 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {countrys.map(
        function(data:any){
      return (
        <Link to={'country/' + data.area} key={data.key}
          className=' rounded-md shadow-md overflow-hidden w-auto flex flex-col'>
          <img src={data.flags.svg} alt="" className=" object-cover" loading="lazy"/>
          <div className=" text-xs p-3 mt-auto">
            <h1 className=" text-lg font-bold mb-2">{data.name.common}</h1>
            <p><b>Population: </b>{data.population}</p>
            <p><b>Region: </b>{data.continents}</p>
            <p><b>Capital: </b>{data.capital}</p>
          </div>
        </Link>
      );
    }
    )}

    </div>
    )
  
  const [exibir, setExibir]=useState(spin)
  
  useEffect(()=>{
    
    async function getCountry(){
      if (search.length != 0) {
        setCountrys(await apiName(search))
        setExibir(cards)
      }else if (region != "All") {
        setCountrys(await apiRegion(region))
        setExibir(cards)
      } else{
        setCountrys(await apiAll())
        setExibir(cards)
      }
    }
    getCountry()
    
  },[search,region,exibir])
  
  return(
    <main>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center p-1.5 w-min rounded-md shadow-md">
          <AiOutlineSearch className="mr-2 text-zinc-400"/>
          <input type="text" value={search} 
          onChange={(txt)=>setSearch(txt.target.value)} 
          placeholder='Search Country'
          className=" outline-none mx-2"/>

          {search.length>0 ?
          <AiOutlineCloseSquare className="mr-2 text-zinc-400 cursor-pointer" onClick={()=>setSearch('')}/> : null}
        </div>

        <div className="flex items-center p-1.5 rounded-md shadow-md">
          <select name="regions" id="regions"
          className="outline-none"
          onChange={(event)=>setRegion(event.target.value)}
          >
            <option value="All">All region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    <br />
      {exibir}
    </main>
  )
}