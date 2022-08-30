import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from "react"
import { apiAll } from "../../api/api"

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
    <div className='p-2'>
      <h1>Home</h1>
      <div>
        <div>
          <span>icon</span>
          <input type="text" value={search} onChange={(txt)=>setSearch(txt.target.value)} placeholder='Search Country'/>
        </div>
      </div>

      <div>
        {countrys.data.map((data: any, i: any)=>{
          console.log(data);
          
          return(
            <p key={data.id}>{data.name}</p>
          )
          
        })}
      </div>

    </div>
  )
}