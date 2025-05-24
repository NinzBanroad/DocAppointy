import React from 'react';
import { specialtyData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialtyMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16' id='specialty'>
      <h1 className='text-2xl font-bold text-[#5f6fff]'>Find by Specialty</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className='flex sm:justify-between gap-4 pt-5 px-10 w-full overflow-scroll'>
        {specialtyData.map((item, i) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
            key={i}
            to={`/doctors/${item.specialty}`}
          >
            <img className='w-16 sm:w-24 mb-2' src={item.image} alt='' />
            <p> {item.specialty} </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyMenu;
