import React from 'react'
import Layouts from '../Layouts/Layouts'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const MainRouters = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layouts />}>
                <Route index element={<Home />} />
                <Route path="about-us" element={<About />} />
                <Route path="contact-us" element={<Contact />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainRouters