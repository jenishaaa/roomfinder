import React from 'react'
import RoomLists from '../components/RoomLists'

const Rooms = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 my-10'>
        <div className='space-y-2'>
            <label htmlFor='type'>Filter by Type</label>
            <select name='type' id='type'>
                <option value="Room">Room</option>
                <option value="Flat">Flat</option>
                <option value="Apartment">Apartment</option>
                <option value="Custom">Custom</option>
            </select>
        </div>

        <div className='border mt-4'></div>

        <div className='mt-6'>
            <RoomLists/>
        </div>
    </div>
  )
}

export default Rooms