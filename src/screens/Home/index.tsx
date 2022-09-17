import { useEffect, useState } from "react"
import { apiAll } from "../../api/api"

import {AiOutlineSearch} from 'react-icons/ai'

export default function Home(params:any) {
  const [countrys, setCountrys] = useState<any>([])
  
  const [search, setSearch] = useState<string>('')
  const [region, setRegion] = useState<string | null>(null)
  
  //isso deve ir dentro do useEffect ?
  useEffect(()=>{
    async function getCountry(){
      if (search.length != 0) {
        return setCountrys([])
      }else if (region != null) {
        return setCountrys([])
      } else {
        return setCountrys(await apiAll()) //all
      }
    }
    getCountry()
  },[search,region])

  
  return(
    <main>
      <div className="flex items-center justify-between">
        <div className="flex items-center p-1.5 w-min rounded-md shadow-md">
          <AiOutlineSearch className="mr-2 text-zinc-400"/>
          <input type="text" value={search} 
          onChange={(txt)=>setSearch(txt.target.value)} 
          placeholder='Search Country'
          className=" outline-none"/>
        </div>

        <div className="flex items-center p-1.5 rounded-md shadow-md">
          filter region
        </div>
      </div>
    <br />
      <div className="flex gap-4 flex-wrap">
        {countrys.data.map((data)=>{
          return(
            <div key={data.area}
            className=' rounded-md shadow-md overflow-hidden w-60 flex flex-col'>
              <img src={data.flags.svg} alt="" className=" object-cover"/>
              <div className=" text-xs p-3 mt-auto">
                <h1 className=" text-lg font-bold mb-2">{data.name.common}</h1>
                <p><b>Population: </b>{data.population}</p>
                <p><b>Region: </b>{data.continents}</p>
                <p><b>Capital: </b>{data.capital}</p>
              </div>
            </div>
          )
        })}
      </div>

    </main>
  )
}