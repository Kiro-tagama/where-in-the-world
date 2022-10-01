import { Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header.jsx'

import Home from './screens/Home'
import Country from './screens/Country'
import { useState } from 'react'

function App() {
  const [code, setCode]= useState('')

  console.log(code);
  
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home setCode={setCode}/>}/>
        <Route path='/country' element={<Country code={code}/>}/>
      </Routes>
    </div>
  )
}

export default App
