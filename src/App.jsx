import { useState } from 'react'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0)

  return (

    <Auth0Provider
    domain="dev-n7dlq0bdqqbkafxm.us.auth0.com"
    clientId="tZoRioP14fZDDyoInkx691uGJXZ3NvLC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <div className='bg-blue'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/login' element={<Login /> } />
        </Routes>
        </BrowserRouter>

      </div>
      </Auth0Provider>
   
    
  
  )
}

export default App
