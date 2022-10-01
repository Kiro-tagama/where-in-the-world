import { useEffect, useState } from "react"
import { apiCode } from "../../api/api"

export default function Country({code}:any) {
  const [countrySelected, setCountrySelected]=useState(null)

  useEffect(()=>{
    async function getCountry(){
      setCountrySelected(await apiCode(code))
    }
    getCountry()
  },[countrySelected])

  //console.log(countrySelected);
  
  return(
    <div className="flex flex-row justify-center flex-wrap">
      <img src="" alt="" />
    </div>
  )
}