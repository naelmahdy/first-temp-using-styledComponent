import React, { Component } from 'react'
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Index from './Components/Index/Index'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css'
import Work from './Components/Work/Work';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Profile from './Components/Profile/Profile';
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Contact" element={<Contact />} />

            <Route path="/Work" element={<Work />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/About" element={<About />} />

          </Routes>
        </BrowserRouter>



      </div>
    )
  }
}
