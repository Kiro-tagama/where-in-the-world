import axios from "axios"

// https://restcountries.com/

// geral
async function apiAll() {
  const data:any = await axios.get("https://restcountries.com/v3.1/all")

  return data
}
// 



export {apiAll}