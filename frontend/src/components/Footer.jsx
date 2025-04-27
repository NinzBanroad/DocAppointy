import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* ----------Left----------- */}
        <div>
          <img className='mb-5 w-40' src={assets.docappointy_logo} alt='' />
          <p className='w-full md:w-2/3 text-gray-600 leading-6 mb-10'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            © DocAppointy 2025. All rights reserved.
          </p>
        </div>

        {/* ----------Center----------- */}
        <div>
          <p className='text-xl font-medium mt-5 mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ----------Right----------- */}
        <div>
          <p className='text-xl font-medium mt-5 mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+0-000-000-000</li>
            <li>docappointy@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
