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

  return (
    <div className=" min-h-screen text-black">
      <header className="py-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center">
            Welcome to <span className="text-indigo-200">TrincCare</span>
          </h1>
        </div>
      </header>
      <main className="container mx-auto px-6">
        <section className="text-center mb-12">
          <p className="text-xl md:text-2xl font-light">
            Where compassionate care meets cutting-edge management.
          </p>
          <p className="mt-4 text-lg md:text-xl font-semibold">
            As your dedicated healthcare partner, we strive to provide exceptional medical services with a focus on efficiency, innovation, and, above all, your well-being.
          </p>
          <p className="mt-4 text-lg md:text-xl">
            Explore our website to discover how we are redefining healthcare management to ensure a seamless and patient-centric experience.
          </p>
          <p className="mt-6 text-xl md:text-2xl font-bold italic">
            Your health, our priority.
          </p>
        </section>
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <ul className="space-y-4">
                <li className="flex">
                  <i className="fas fa-user-md text-3xl mr-4"></i>
                  <div>
                    <h3 className="text-xl font-semibold">Expert Medical Team</h3>
                    <p>Board-certified physicians and specialists committed to your health.</p>
                  </div>
                </li>
                <li className="flex">
                  <i className="fas fa-procedures text-3xl mr-4"></i>
                  <div>
                    <h3 className="text-xl font-semibold">State-of-the-Art Facilities</h3>
                    <p>Advanced medical technology for accurate diagnosis and treatment.</p>
                  </div>
                </li>
                <li className="flex">
                  <i className="fas fa-heartbeat text-3xl mr-4"></i>
                  <div>
                    <h3 className="text-xl font-semibold">Comprehensive Care</h3>
                    <p>Personalized healthcare plans tailored to your unique needs.</p>
                  </div>
                </li>
                <li className="flex">
                  <i className="fas fa-mobile-alt text-3xl mr-4"></i>
                  <div>
                    <h3 className="text-xl font-semibold">Digital Health Solutions</h3>
                    <p>Connect with your healthcare team from anywhere at any time.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img src="https://via.placeholder.com/500x300?text=TrincCare+Facilities" alt="TrincCare Facilities" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </section>
        <section className="text-center p-12 rounded-lg bg-indigo-800 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
          <p className="mb-6">Become a part of the TrincCare family for a healthier tomorrow.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Get Started
          </button>
        </section>
      </main>
      <footer className="py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {(new Date()).getFullYear()} TrincCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
export default Home