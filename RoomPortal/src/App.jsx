import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SingleRoom from './pages/SingleRoom';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import FAQ from './pages/faq';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/room/:id" element={<SingleRoom />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};


export default App;
