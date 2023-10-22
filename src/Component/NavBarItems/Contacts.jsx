import React from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";

const Contacts = () => {
    const contactDetails = {
        address: '123 Main Street, Farmville',
        email: 'contact@agrimarketplace.com',
        phone: '+1 (123) 456-7890',
      };
  return (
    <div>
        <Header />
        <Navbar />
        <div className="bg-[#D9D9D9] pt-40 pb-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-semibold text-green-600 mb-4">Contact Us</h1>
                <p className="text-gray-700 mb-6">
                Have a question or need assistance? Feel free to get in touch with us.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <form className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                    <label htmlFor="name" className="text-green-600 block mb-2 font-semibold">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="email" className="text-green-600 block mb-2 font-semibold">
                        Your Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                    </div>
                    <div className="mb-6">
                    <label htmlFor="message" className="text-green-600 block mb-2 font-semibold">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        rows="4"
                        required
                    />
                    </div>
                    <div className="text-center">
                    <button
                        type="submit"
                        className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700"
                    >
                        Send Message
                    </button>
                    </div>
                </form>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Contact Details</h2>
                    <p className="text-gray-700 mb-2">
                    <strong>Address:</strong> {contactDetails.address}
                    </p>
                    <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> {contactDetails.email}
                    </p>
                    <p className="text-gray-700">
                    <strong>Phone:</strong> {contactDetails.phone}
                    </p>
                </div>
                </div>
            </div>
            </div>

        <Footer />
    </div>
  );
}

export default Contacts;