import React, { useEffect } from 'react'
// import NullLogin from '../Tools/NullLogin';
// import Appointment from './Appointment';

const Home = () => {
  const [services, setServices] = React.useState([]);

  useEffect(() => {
    // Fetch healthcare services and set them to the state
    // Placeholder for fetching services logic
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
            {/* <a href="#services" className="text-white bg-purple-500 hover:bg-purple-600 font-semibold py-2 px-4 border border-purple-700 rounded shadow">
              Explore Our Services
            </a> */}
          </div>
        </div>
      </div>

      <div id="services" className="container mx-auto px-6 py-16">
        <h3 className="text-3xl text-center text-gray-800 font-bold mb-8">Notice</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
            {/* <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x300" alt="Service 1"/> */}
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-3">Advanced Diagnostics</h4>
              <p className="text-gray-600 text-sm">
                Cutting-edge diagnostics for accurate and timely health assessments.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
            {/* <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x300" alt="Service 2"/> */}
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-3">Personalized Treatment</h4>
              <p className="text-gray-600 text-sm">
                Tailored healthcare plans to fit your unique lifestyle and needs.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
            {/* <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x300" alt="Service 2"/>Notice */}
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-3">Personalized Treatment</h4>
              <p className="text-gray-600 text-sm">
                Tailored healthcare plans to fit your unique lifestyle and needs.
              </p>
            </div>
          </div>
          </div>
          </div>
          </>
    // </div>
  );
}
export default Home