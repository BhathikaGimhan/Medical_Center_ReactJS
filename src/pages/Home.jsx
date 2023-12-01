import React, { useEffect } from 'react'
import NoticeView from './NoticeView';
// import NullLogin from '../Tools/NullLogin';
// import Appointment from './Appointment';

const Home = () => {
  const [services, setServices] = React.useState([]);

  useEffect(() => {
    setServices([
      { id: 1, name: 'Dental Care', description: 'Comprehensive dental treatments for all ages.' },
      { id: 2, name: 'Cardiology', description: 'Expert heart care with advanced diagnostic services.' },
      { id: 3, name: 'Neurology', description: 'Advanced care for neurological disorders.' },
      // ... more services
    ]);
  }, []);

  return (<>
      <div className="relative bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: "url('./assets/hoem.jpg')" }}>
        <div className="absolute inset-0"></div>
        <div className="flex justify-center items-center h-full">
          <div className="text-center text-white p-6 bg-gray-900 bg-opacity-90 rounded-lg">
            <h1 className="text-5xl font-bold mb-4">Welcome to TrincCare</h1>
            <h2 className="text-2xl mb-6">Where Compassion Meets Innovation</h2>
            <p className="mb-6 m-40 leading-relaxed">
            As your dedicated healthcare partner, we strive to provide exceptional
              medical services with a focus on efficiency, innovation, and, above all,
              your well-being. Explore our website to discover how we are redefining healthcare
              management to ensure a seamless and patient-centric experience.
            </p>
          </div>
        </div>
      </div>

      
          <NoticeView></NoticeView>
          
          </>
    // </div>
  );
}
export default Home