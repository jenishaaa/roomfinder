import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import RoomLists from '../components/RoomLists'

const Home = () => {
  return (
    <div className='max-w-6xl mx-auto px-4'>
      {/*Hero Section*/}
      <Hero/>
      <HomeCard/>
      <div className='my-10'>
        <h1 className='text-2xl font-semibold mb-4'>Latest Rooms</h1>
        <RoomLists/>
      </div>
    </div>
  )
}

export default Home