import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import idols from '../assets/idols.mp4';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={idols}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1>De colecionador para colecionador</h1>
        <h2 className='py-4'>Sua fonte de procura de Photocards em sites confiáveis</h2>
        <form
          className='flex justify-between items-center max-w-[800px] mx-auto w-full border p-1
          rounded-e text-black bg-gray-100/90'
        >
          <div>
            <input
              className='bg-transparent w-[300px] sm:w-[600px] font-[Poppins] focus:outline-none
                  '
              type='text'
              placeholder='Procure aqui pelo seu photocard (ex: Mingi Outlaw POCA)'
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}}  />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
