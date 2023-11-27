import React from 'react'

const ContactUs = () => {
  const [contactInfo, setContactInfo] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder for the submit logic
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <div >
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white rounded shadow-lg overflow-hidden w-full max-w-2xl mx-4">
          <div className="bg-blue-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">We'd love to hear from you!</h2>
          </div>
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactInfo.name}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactInfo.email}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contactInfo.message}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactUs