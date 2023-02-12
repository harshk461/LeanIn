import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/home'
import Register from './pages/Register/register'
import Login from './pages/Login/login'
import Contact from './components/Contact/contact'
import Search from './components/Search/search'
import ForgotPassword from './components/ForgotPassword/forgot'
import Blog from './pages/Blog/blog'
import Recipe from './pages/Recipe/recipe'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/search' element={<Search />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path='/recipe' element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  )
}

