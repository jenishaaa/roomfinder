import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Register from './pages/Register'
import Login from './pages/Login'
import SingleRoom from './pages/SingleRoom'
import AboutUs from './pages/AboutUs'


const App = () => {
  return (
    <> 
    <Navbar/>
    <Routes>
      <Route path ='/' element ={<Home/>}/>
      <Route path ='/rooms' element ={<Rooms/>}/>
      <Route path ='/register' element ={<Register/>}/>
      <Route path ='/login' element ={<Login/>}/>
      <Route path ='/about' element ={<AboutUs/>}/>
      <Route path='/room/:id' element = {<SingleRoom/>}/>
    </Routes>
    <Footer/>
    </>
    
  )
}

export default App