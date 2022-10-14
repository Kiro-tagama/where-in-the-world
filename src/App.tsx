import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header.jsx'

import Home from './screens/Home'
import Country from './screens/Country'

function App() {
  const ligth = {
    base:"bg-Light-bg text-Light-txt",
    element:"bg-Dark-txt"
  }
  const dark = {
    base:"bg-Dark-bg text-Dark-txt",
    element:"bg-Dark-elem"
  }

  const [theme,setTheme]= useState(ligth)
  const [selecTheme, setSelecTheme]= useState("ligth")

  function upTheme() { 
    if (selecTheme == "ligth") {
      setTheme(dark)
      setSelecTheme('dark')
    } else {
      setTheme(ligth) 
      setSelecTheme('ligth')
    }
  }
  
  
  return (
    <div className={theme.base}>
      <Header theme={theme} selecTheme={selecTheme} upTheme={upTheme} />
      
      <Routes>
        <Route path='/' element={<Home theme={theme}/>}/>
        <Route path='/country/:id' element={<Country theme={theme}/>}/>
      </Routes>
    </div>
  )
}

export default App
