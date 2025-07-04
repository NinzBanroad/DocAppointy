import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setAdminToken, backendURL } = useContext(AdminContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === 'Admin') {
        const { data } = await axios.post(`${backendURL}/api/admin/login`, {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem('adminToken', data.token);
          setAdminToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
      }
    } catch (error) {}
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className='min-h-[80vh] flex items-center justify-center'
    >
      <div className='flex flex-col items-start gap-3 m-auto p-8 rounded-xl min-w-[340px] sm:min-w-96 border border-gray-300 text-[#5E5E5E] shadow-lg'>
        <p className='text-2xl font-semibold m-auto'>
          <span className='text-[#5f6fff]'>{state}</span> Login
        </p>
        <div className='w-full'>
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className='border border-[#DADADA] rounded w-full p-2 mt-1'
            type='email'
            required
          />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className='border border-[#DADADA] rounded w-full p-2 mt-1'
            type='password'
            required
          />
        </div>
        <button className='bg-[#5f6fff] text-white w-full py-2 rounded-md text-base'>
          Login
        </button>
        {state === 'Admin' ? (
          <p>
            Doctor Login?{' '}
            <span
              className='text-[#5f6fff] underline cursor-pointer'
              onClick={() => setState('Doctor')}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{' '}
            <span
              className='text-[#5f6fff] underline cursor-pointer'
              onClick={() => setState('Admin')}
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
