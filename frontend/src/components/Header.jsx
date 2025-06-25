import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20'>
      {/* ---------- Left Side ------------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[8vw] md:mb-[-20px]'>
        <h1 className='text-sm/6 md:text-lg lg:text-xl text-[#5f6fff] leading-tight md:leading-tight lg:leading-tight'>
          FIND A DOCTOR
        </h1>
        <h2 className='text-2xl md:text-3xl lg:text-4xl text-black-500 font-bold leading-tight md:leading-tight lg:leading-tight'>
          Book your Appointment <br /> With{' '}
          <span className='text-[#5f6fff]'>Trusted Doctors</span>
        </h2>
        <div className='flex flex-wrap justify-center md:flex-row gap-8 text-black-800 text-sm font-light'>
          <img
            className='w-28 mb-4 flex-shrink-0'
            src={assets.appointment1}
            alt=''
          />
          <img
            className='w-28 mb-4 flex-shrink-0'
            src={assets.appointment2}
            alt=''
          />
          <img
            className='w-28 mb-4 flex-shrink-0'
            src={assets.appointment3}
            alt=''
          />
          <img
            className='w-28 mb-4 flex-shrink-0'
            src={assets.appointment4}
            alt=''
          />
        </div>
        <a
          href='#specialty'
          className='flex items-center bg-[#5f6fff] px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'
        >
          Book Appointment
          <button className='text-white'></button>
        </a>
      </div>

      {/* ---------- Right Side ------------- */}
      <div className='md:w-1/2 relative'>
        <img
          id='header'
          className='w-full md:absolute bottom-20 h-auto'
          src={assets.header_img}
          alt=''
        />
      </div>
    </div>
  );
};

export default Header;
