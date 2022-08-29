import { useEffect, useState } from "react"
import { apiAll } from "../../api/api"

export default function Home(params:any) {
  const [countrys, setCountrys] = useState<any>([])
  
  const [search, setSearch] = useState<string>('')
  const [region, setRegion] = useState<string | null>(null)
  
  //isso deve ir dentro do useEffect ?
  useEffect(()=>{

    if (search.length != 0) {
      return setCountrys([])
    }else if (region != null) {
      return setCountrys([])
    } else {
      const res = apiAll()
      return setCountrys([res]) //all
    }

  },[search,region])

  console.log('data: ',countrys);
  
  
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
        {countrys.map((info:string|number)=>{
          return(
            <div key={1}>
              <p>oi</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}