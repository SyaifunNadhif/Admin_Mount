import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Dasboard } from './controllers/Dasboard'
import { Transaksi } from './controllers/Transaksi'
import { Login } from './controllers/Login'


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/> 
        <Route path="/dashboard" element={<Dasboard />}/> 
        <Route path="/transaksi" element={<Transaksi />}/> 
      </Routes>
    </>
  )
}

export default App
