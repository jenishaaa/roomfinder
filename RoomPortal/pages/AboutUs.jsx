import React from 'react';
import { Link } from 'react-router-dom';
import mission from '../assets/rsp mission.jpg';

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <section className="py-10">
  <div className="flex flex-col md:flex-row items-center md:items-start">
    {/* Text Section */}
    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
      <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
      <p className="text-lg leading-relaxed">
        At RoomSeeker Portal, our mission is to make room searching as easy and efficient as possible. 
        We aim to connect tenants and landlords with an intuitive platform that makes finding, sharing, 
        and managing rooms a hassle-free experience. Whether you're looking for a cozy space to stay 
        or need to fill an empty room, we've got you covered!
      </p>
    </div>

        {/* Image Section */}
        <div className="w-1/2 pl-4">
        <img 
            src={mission} 
            alt="Team working on mission" 
            className="w-full max-w-sm h-auto rounded-lg"
          />
    </div>
  </div>
</section>

     {/* Our Values Section */}
     <section className="py-10 bg-black text-white rounded-lg shadow-md px-6">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white text-black rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Trust</h3>
            <p className="text-lg">
              We prioritize creating a safe, secure environment where both tenants and landlords 
              can trust the people they connect with.
            </p>
          </div>
          <div className="p-6 bg-white text-black rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Efficiency</h3>
            <p className="text-lg">
              Time is valuable. Our platform ensures a quick and efficient process for both searching and listing rooms.
            </p>
          </div>
          <div className="p-6 bg-white text-black rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-lg">
              We continuously strive to improve our platform with cutting-edge features, making the user experience better every day.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-lg leading-relaxed mb-6">
          Our team is made up of passionate individuals who are dedicated to simplifying the room rental process. 
          From developers to customer service experts, we work hard to provide the best experience possible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD3OmwXK7xXXVWJZiocRJOasPkHLK27kGGOQ&s" 
              alt="Team member 1" 
              className="w-32 h-32 rounded-full mx-auto mb-2"
            />
            <h3 className="text-xl font-bold">Kusum Magar</h3>
            <p>Co-Founder & CEO</p>
          </div>
          <div className="text-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" 
              alt="Team member 2" 
              className="w-32 h-32 rounded-full mx-auto mb-2"
            />
            <h3 className="text-xl font-bold">Jenisha Adhikari</h3>
            <p>CTO</p>
          </div>
          <div className="text-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ihz_IRp6PplspHAOMJ2ksLvomlsjZ4r3e4YPBp9dOETzVv7DMKR3nmkYJVoMiQyPJuY&usqp=CAU" 
              alt="Team member 3" 
              className="w-32 h-32 rounded-full mx-auto mb-2"
            />
            <h3 className="text-xl font-bold">Sujita Magar</h3>
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-10 bg-indigo-100 rounded-lg shadow-md mt-10">
        <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
        <p className="text-lg mb-6">
          Whether you're searching for a room or listing one, RoomSeeker Portal is here to help. 
          Sign up now and be part of a trusted community!
        </p>
        <Link to="/register">
          <button className="px-6 py-3 bg-purple-900 text-white rounded-full text-lg hover:bg-purple-700">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
