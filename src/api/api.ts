import axios from "axios"

// https://restcountries.com/

// geral
async function apiAll() {
  const data:any = await axios.get("https://restcountries.com/v3.1/all")
  .then((res)=>console.log(res))
  .catch((err)=>console.log('erro\n', err))

  return data
}
// 



export {apiAll}