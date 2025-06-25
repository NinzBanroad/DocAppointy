import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { adminToken, setAdminToken } = useContext(AdminContext);

  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    adminToken && setAdminToken('');
    adminToken && localStorage.removeItem('admin_token');
  };

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border border-gray-200 bg-white'>
      <div className='flex items-center gap-2 text-xs'>
        <img
          className='w-36 sm:w-40 cursor-pointer'
          src={assets.docappointy_logo}
          alt=''
        />
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>
          {adminToken ? 'Admin' : 'Doctor'}
        </p>
      </div>
      <button
        onClick={logout}
        className='rounded-full text-sm px-10 py-2 bg-[#5f6fff] text-white'
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
