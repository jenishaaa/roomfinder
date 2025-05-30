import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div className="relative h-[60vh] sm:h-[70vh] md:h-[75vh] bg-black rounded-xl shadow-md my-10 overflow-hidden">
      <img
        src={image}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="relative flex justify-center items-center h-full bg-black bg-opacity-40 px-4">
        <div className="text-white text-center max-w-3xl rounded-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Welcome to RoomSeeker Portal
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-xl mx-auto leading-relaxed">
            Your solution to find the perfect room, flat, or apartment. Discover your ideal living
            space with ease and efficiency.
          </p>
          <Link
            to="/rooms"
            className="inline-block bg-purple-900 text-white py-3 px-8 rounded-full text-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105"
          >
            Browse Listings
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero





// import React from 'react'

// const Hero = () => {
//   return (
//     <div className='h-[40vh] bg-black rounded-xl shadow-md my-10 flex justify-center items-center'>
//         <div className='text-white text-center'>
//             <h1 className='text-3xl font-bold mb-3'>Welcome to RoomSeeker Portal</h1>
//             <p className='text-xl'>Your solution to find the perfect room, flat, or apartment.</p>
//         </div>
//     </div>
//   )
// }

// export default Hero