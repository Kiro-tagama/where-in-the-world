import { useEffect, useState } from "react"
import { AiOutlineLoading } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { apiCode } from "../../api/api"

interface Country{
  flags: { png: string}; 
  area:String;
  name: { common: string }; 
  population: string; 
  continents: string; 
  capital: string;
  region: String;
  subregion: String;
  tld: String;
  ccn3: String;
}

export default function Country({theme}:any) {

  let { id } = useParams();

  const [countrySelected, setCountrySelected]=useState<any>()

  useEffect(()=>{
    async function getCountry(){
      setCountrySelected(await apiCode(id))
    }
    getCountry()
  },[id])

  const country = countrySelected

  console.log(country);
  
  return(
    <div className={theme.base +" flex flex-1 flex-row justify-center items-center flex-wrap h-[90vh]"}>
      {countrySelected == null?
      (<div className="flex flex-1 mt-28 justify-center items-center">
        <AiOutlineLoading
          className=" text-[50px] animate-spin text-zinc-300"
        />
      </div>):
      (
        <div className="flex flex-row flex-wrap justify-center items-center ">
          <img src={country.flags.png} alt="" className=" object-cover p-4" />
          <div className="p-4 w-full sm:w-auto">
            <h1 className="font-bold my-4 text-2xl">{country.name.common}</h1>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                {/*<p><b>Native Name:</b> {country.name.nativeName.isl.official}</p> */}
                <p><b>Population:</b> {country.population}</p>
                <p><b>Region:</b> {country.region}</p>
                <p><b>Sub Region:</b> {country.subregion}</p>
                <p><b>Capital:</b> {country.capital[0]}</p>
              </div>
              <div>
                <p><b>Top Level Domain:</b> {country.tld}</p>
                {/* <p><b>Currencies:</b> {country.currencies.name}</p> */}
                {/* <p><b>Languages:</b>{country.languages}</p> */}
              </div>
            </div>
            <p className="mt-4">
              {/* <b>Border Countrys:</b> */}
              {/* {country.borders.map(x=>
              <span
              className="p-2 shadow-md rounded-md mx-2"
              >{x}</span>)} */}
            </p>
            
          </div>
        </div>
      )
      }
    </div>
  )
}