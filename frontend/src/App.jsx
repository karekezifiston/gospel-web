import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import Home from './components/Pages/Home';
import Sermons from './components/Pages/Sermons';
import BibleStudy from './components/Pages/BibleStudy';
import QA from './components/Pages/QA';
import Footer from './components/Footer/Footer';
import About from './components/Pages/About';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sermons' element={<Sermons/>} />
        <Route path='/bible-study' element={<BibleStudy/>} />
        <Route path='/q&a' element={<QA/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
