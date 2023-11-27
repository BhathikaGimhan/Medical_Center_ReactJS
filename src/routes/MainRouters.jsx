import React from 'react'
import Layouts from '../Layouts/Layouts'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/ContactUs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Appointment from '../pages/appointment/UserAppointment'

const MainRouters = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layouts />}>
                <Route index element={<Home />} />
                <Route path="about-us" element={<About />} />
                <Route path="contact-us" element={<Contact />} />
                <Route path="appointment" element={<Appointment />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainRouters