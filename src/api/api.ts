import axios from "axios"

// https://restcountries.com/

// geral
async function apiAll() {
  const data:any = await axios.get("https://restcountries.com/v3.1/all")

  return data.data
}
// 
async function apiName(name:String) {
  const data:any = await axios.get(`https://restcountries.com/v3.1/name/${name}`)

  return data.data
}

async function apiRegion(region:String) {
  const data:any = await axios.get(`https://restcountries.com/v3.1/region/${region}`)

  return data.data
}

async function apiCode(code:String|undefined) {
  const data:any = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`)

  return data.data[0]
}

export {apiAll,apiName,apiRegion,apiCode}