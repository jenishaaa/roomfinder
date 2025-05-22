import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'; 

export const Navbar = () => {
    const user = false
  return (
    <div className='border shadow-md p-4 top-0 z-50 bg-purple-200'>
    <div className='flex justify-between items-center max-w-6xl mx-auto'>
        {/* Left - Logo and Title */}
        <div className='flex items-center'>
            <Link to='/'> 
            <div className='flex items-center cursor-pointer'>
                <img src={logo} alt="RoomSeeker Logo" className='w-14 h-14 mr-2 rounded-full' />
            <div className='text-2xl font-bold'>RoomSeeker Portal</div>
            </div>
            </Link>
        </div>
            {/*middle*/}
           
                <ul className='flex gap-4 text-lg font-semibold'>
                    <Link to ='/'>
                    <li>Home</li>
                    </Link>

                    <Link to ='/rooms'>
                    <li>Browse Rooms</li>
                    </Link>
                    
                    <Link to ='/about'>
                    <li>About Us</li>
                    </Link>
                    
                </ul>
                {/*righht*/}
            
            <div className='flex gap-4 text-lg font-semibold'>
                {
                    user? (<button>Logout</button>) :(
                     <>
                     <Link to = '/register'>
                     <button>Register</button>
                     </Link>

                     <Link to = '/login'>
                        <button>Login</button>  
                        </Link>
                        </>
                    )
                }
            </div>
        </div>
    </div>
  )
}
export default Navbar



// import React from 'react';
// import { Link } from 'react-router-dom';
// import SearchBar from './SearchBar'; // Import the SearchBar component

// export const Navbar = () => {
//     const user = false;

//     // Function to handle search results
//     const handleSearchResults = (results) => {
//         console.log('Search results:', results);
//         // Add any logic here to display or navigate based on the search results
//     };

//     return (
//         <div className='border shadow-md p-4 top-0 z-50 bg-purple-200'>
//             <div className='flex justify-between items-center max-w-6xl mx-auto'>
//                 {/* Left */}
//                 <div className='text-2xl font-bold'>RoomSeeker Portal</div>
                
//                 {/* Middle - Links and Search Bar */}
//                 <div className='flex items-center gap-4'>
//                     <ul className='flex gap-4 text-lg font-semibold'>
//                         <Link to='/'>
//                             <li>Home</li>
//                         </Link>
//                         <Link to='/rooms'>
//                             <li>Browse Rooms</li>
//                         </Link>
//                         <Link to='/about'>
//                             <li>About Us</li>
//                         </Link>
//                     </ul>
//                     {/* Search Bar */}
//                     <div className='ml-4'>
//                         <SearchBar onSearchResults={handleSearchResults} />
//                     </div>
//                 </div>

//                 {/* Right */}
//                 <div className='flex gap-4 text-lg font-semibold'>
//                     {
//                         user ? (
//                             <button>Logout</button>
//                         ) : (
//                             <>
//                                 <Link to='/register'>
//                                     <button>Register</button>
//                                 </Link>
//                                 <Link to='/login'>
//                                     <button>Login</button>
//                                 </Link>
//                             </>
//                         )
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;


