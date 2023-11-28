import React from 'react'
// import NullLogin from '../Tools/NullLogin';
// import Appointment from './Appointment';

const Home = () => {
  const [services, setServices] = React.useState([]);

  React.useEffect(() => {
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
    <div>
      <main className="p-6">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Welcome to HealthCare</h2>
          <p>
            Your health is our top priority. We offer the best medical services to ensure you and your
            loved ones stay healthy and strong.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="font-semibold text-lg mb-2">{service.name}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
export default Home