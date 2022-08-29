import { Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header.jsx'

import Home from './screens/Home'
import Country from './screens/Country'

function App() {

  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/country' element={<Country/>}/>
      </Routes>
    </div>
  )
}

export default App
