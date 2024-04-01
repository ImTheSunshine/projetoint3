import React from 'react';
import {FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-purple-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='flex-initial text-center'>
          <h1>Collect +</h1>
          <h4>Nos acompanhe aqui</h4>
          <h4>👇</h4>
            <FaInstagram className='icon flex initial w-full ' />
            
          </div>
        </div>
        <div className='flex justify-between'>
        </div>
      </div>

  );
};

export default Footer;
