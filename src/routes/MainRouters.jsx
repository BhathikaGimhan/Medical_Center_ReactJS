import React from 'react'
import Layouts from '../Layouts/Layouts'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/ContactUs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserAppointment from '../pages/appointment/UserAppointment'
import UserViewAppointment from '../pages/appointment/UserViewAppointment'
import Appointment from '../pages/Appointment'

const MainRouters = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layouts />}>
                <Route index element={<Home />} />
                <Route path="about-us" element={<About />} />
                <Route path="contact-us" element={<Contact />} />
                <Route path="appointment" element={<UserAppointment />} />
                <Route path="appointment-view" element={<Appointment />} />
                <Route path="admin-appointment-view" element={<UserViewAppointment />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainRouters