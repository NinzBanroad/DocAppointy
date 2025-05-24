import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ docId, specialty }) => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const [relDoc, setRelDocs] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && specialty) {
      const relatedDoctors = doctors.filter(
        (doc) => doc._id !== docId && doc.specialty === specialty
      );
      setRelDocs(relatedDoctors);
    }
  }, [doctors, specialty, docId]);

  return (
    <div className='flex flex-col items-center gap-4 my-16 md:mx-10'>
      <h1 className='text-2xl font-bold text-[#5f6fff]'>Related Doctors</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className='w-full grid grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0 mb-10'>
        {relDoc.slice(0, 5).map((item, i) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
            key={i}
          >
            <img
              className='bg-blue-50 hover:bg-[#5f6fff]'
              src={item.image}
              alt=''
            />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedDoctors;
