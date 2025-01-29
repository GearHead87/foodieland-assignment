"use client"
import React, { useState } from 'react';
import { Heading } from '../shared/Heading';
import { SubHeading } from '../shared/SubHeading';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto bg-blue-50 rounded-2xl overflow-hidden shadow-xl">
        <div className="relative px-4 py-12 sm:px-6 lg:px-8">
          {/* Background decorative elements */}
          <div className="absolute left-0 bottom-0 transform hidden sm:block">
            <img 
              src="./assets/newsletter2.png" 
              alt="" 
              className=" w-48 h-48 object-cover"
            />
          </div>
          <div className="absolute right-0 bottom-0 transform hidden sm:block">
            <img 
              src="./assets/newsletter1.png " 
              alt="" 
              className="w-48 h-48 object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <Heading className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
              Deliciousness to your inbox
            </Heading>
            <SubHeading className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqut enim ad minim
            </SubHeading>

            {/* Subscription form */}
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address..."
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;