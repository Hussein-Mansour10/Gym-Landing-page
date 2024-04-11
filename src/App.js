import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import './App.css'
import Main from './components/Main'
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{setIsLoading(false)},3000)
  }, []);
  return (
    <BrowserRouter>
      {isLoading ?
        <div className='preloader'>
          <RingLoader color="#FF1414" height={100} margin={10} />
        </div>
        :
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
        }
    </BrowserRouter>
  )
}

export default App