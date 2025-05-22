import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) setImage(storedImage);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        localStorage.setItem('profileImage', reader.result); // Save base64 image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      localStorage.removeItem('user');
      localStorage.removeItem('profileImage');
      navigate('/login');
    }
  };

  if (!user) {
    return <p className="text-center mt-10 text-red-600 font-semibold">You are not logged in.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-100 to-rose-100 px-4 py-12">
      <div className="bg-white shadow-lg rounded-xl max-w-md w-full p-8 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-purple-900 mb-6 tracking-wide">My Profile</h2>

        {/* Profile Image */}
        <div className="relative mb-6">
          <img
            src={image || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-purple-600 shadow-md"
          />
          <label
            htmlFor="profileImageUpload"
            className="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full p-2 cursor-pointer hover:bg-purple-700 shadow-lg"
            title="Change Profile Picture"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6 6M16.5 4.5a2.121 2.121 0 113 3L7 20l-4 1 1-4L16.5 4.5z" />
            </svg>
          </label>
          <input
            id="profileImageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        {/* User Info */}
        <div className="w-full space-y-3 mb-8">
          <div className="flex justify-between border-b border-purple-200 pb-2">
            <span className="text-gray-600 font-medium">Username:</span>
            <span className="text-purple-900 font-semibold">{user?.username || 'N/A'}</span>
          </div>
          <div className="flex justify-between border-b border-purple-200 pb-2">
            <span className="text-gray-600 font-medium">Email:</span>
            <span className="text-purple-900 font-semibold">{user?.email || 'N/A'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Role:</span>
            <span className="text-purple-900 font-semibold">{user?.role || 'N/A'}</span>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;





// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [image, setImage] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     setUser(storedUser);
//     const storedImage = localStorage.getItem('profileImage');
//     if (storedImage) setImage(storedImage);
//   }, []);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type.startsWith('image/')) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//         localStorage.setItem('profileImage', reader.result); // Save base64 image
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleLogout = () => {
//     const confirmLogout = window.confirm('Are you sure you want to logout?');
//     if (confirmLogout) {
//       localStorage.removeItem('user');
//       localStorage.removeItem('profileImage');
//       navigate('/login');
//     }
//   };

//   if (!user) {
//     return <p className="text-center mt-10 text-red-600 font-semibold">You are not logged in.</p>;
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 px-4 py-12">
//       <div className="bg-white shadow-lg rounded-xl max-w-md w-full p-8 flex flex-col items-center">
//         <h2 className="text-3xl font-extrabold text-purple-900 mb-6 tracking-wide">My Profile</h2>

//         {/* Profile Image */}
//         <div className="relative mb-6">
//           <img
//             src={image || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
//             alt="Profile"
//             className="w-28 h-28 rounded-full object-cover border-4 border-purple-600 shadow-md"
//           />
//           <label
//             htmlFor="profileImageUpload"
//             className="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full p-2 cursor-pointer hover:bg-purple-700 shadow-lg"
//             title="Change Profile Picture"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6 6M16.5 4.5a2.121 2.121 0 113 3L7 20l-4 1 1-4L16.5 4.5z" />
//             </svg>
//           </label>
//           <input
//             id="profileImageUpload"
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="hidden"
//           />
//         </div>

//         {/* User Info */}
//         <div className="w-full space-y-3 mb-8">
//           <div className="flex justify-between border-b border-purple-200 pb-2">
//             <span className="text-gray-600 font-medium">Username:</span>
//             <span className="text-purple-900 font-semibold">{user?.username || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between border-b border-purple-200 pb-2">
//             <span className="text-gray-600 font-medium">Email:</span>
//             <span className="text-purple-900 font-semibold">{user?.email || 'N/A'}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-gray-600 font-medium">Role:</span>
//             <span className="text-purple-900 font-semibold">{user?.role || 'N/A'}</span>
//           </div>
//         </div>

//         {/* Logout Button */}
//         <button
//           onClick={handleLogout}
//           className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;



