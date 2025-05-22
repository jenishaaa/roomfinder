import React from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaDollarSign,
  FaShieldAlt,
  FaHeadset,
  FaInfoCircle,
} from "react-icons/fa";

const HomeCard = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 space-y-24 text-gray-800">
      {/* Section 1: Search & Discovery */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Find Your Perfect Space</h2>
          <p className="mt-2 text-lg max-w-2xl mx-auto">
            Discover rooms and apartments tailored to your lifestyle and budget. Our smart filters and curated listings help you make faster, better choices.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <Card
            icon={<FaSearch className="text-indigo-700 text-5xl mb-4" />}
            title="Tailored Search"
            text="Use smart filters and maps to pinpoint your ideal living space."
            btnText="Start Searching"
            btnLink="/search"
            bgClass="bg-indigo-100"
          />
        </div>
      </section>

      {/* Testimonials Section - dark mode */}
      <section className="mt-10 px-4 md:px-10 bg-white text-white py-10 rounded-lg">
        <h2 className="text-3xl text-black font-bold text-center mb-10">What Our Users Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <p className="italic text-gray-200">"RoomPortal made my search so easy! Found a perfect shared flat in just 2 days."</p>
            <div className="mt-4 text-sm text-gray-400">– Aayush, Student</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <p className="italic text-gray-200">"I was relocating to Kathmandu and had no idea where to stay. This platform helped me find a cozy studio near my office."</p>
            <div className="mt-4 text-sm text-gray-400">– Sneha, Software Developer</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <p className="italic text-gray-200">"As a landlord, RoomPortal made it really easy to connect with genuine tenants."</p>
            <div className="mt-4 text-sm text-gray-400">– Rajesh, Property Owner</div>
          </div>
        </div>
      </section>


      {/* Section 2: Pricing & Trust */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Affordable & Trusted Listings</h2>
          <p className="mt-2 text-lg max-w-2xl mx-auto">
            We value your trust. That’s why every listing is verified, and we ensure pricing transparency.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Affordable Pricing */}
          <Card
            icon={<FaDollarSign className="text-yellow-600 text-5xl mb-4" />}
            title="Affordable Pricing"
            text="Compare pricing options and get value for your budget."
            btnText="Browse Deals"
            btnLink="/rooms"
            bgClass="bg-yellow-100"
          />
          {/* Safe & Verified */}
          <Card
            icon={<FaShieldAlt className="text-green-600 text-5xl mb-4" />}
            title="Safe & Verified"
            text="We manually verify all listings for safety and reliability."
            btnText="Learn More"
            btnLink="/about"
            bgClass="bg-green-100"
          />
        </div>
      </section>

      {/* Section 3: Support & About */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold">We're Here to Help</h2>
          <p className="mt-2 text-lg max-w-2xl mx-auto">
            Have questions? Our friendly team is ready to guide you anytime. Want to know more about us? Let’s get introduced.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Need Help */}
          <Card
            icon={<FaHeadset className="text-blue-600 text-5xl mb-4" />}
            title="24/7 Support"
            text="Get assistance anytime from our dedicated support team."
            btnText="Contact Us"
            btnLink="/contact"
            bgClass="bg-blue-100"
          />
          {/* About Us */}
          <Card
            icon={<FaInfoCircle className="text-pink-600 text-5xl mb-4" />}
            title="Why RoomPortal?"
            text="Learn how we simplify room hunting and connect you to the right space."
            btnText="About Us"
            btnLink="/about"
            bgClass="bg-pink-100"
          />
        </div>
      </section>
          </main>
        );
      };

      // Card Component
      const Card = ({ icon, title, text, btnText, btnLink, bgClass }) => (
        <div
          className={`w-full md:w-[45%] lg:w-[40%] p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 ${bgClass}`}
        >
          <div className="flex flex-col items-center text-center">
            {icon}
            <h3 className="text-2xl font-semibold mt-4">{title}</h3>
            <p className="mt-3 text-gray-700">{text}</p>
            <Link to={btnLink} className="mt-6">
              <button className="bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition duration-300">
                {btnText}
              </button>
            </Link>
          </div>
        </div>
      );

export default HomeCard;
