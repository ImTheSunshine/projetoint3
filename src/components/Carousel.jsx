import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    url: 'https://i.imgur.com/MOOeTjE.jpeg',
  },
  {
    url: 'https://i.imgur.com/pdUBrQ8.jpeg',
  },
  {
    url: 'https://i.imgur.com/jdmjtBO.jpeg',
  },
  {
    url: 'https://i.imgur.com/ClDqMdv.jpeg',
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;
  // console.log(length)

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
        <div className='max-w-[960px] mx-auto py-9 px-4 text-center'>
        <h1>Como Funciona?</h1>
        <p className='py-0'>    </p>
        <div className=''>


    <div className='max-w-[800px] rounded-2xl mx-auto px-4 py-16 relative flex justify-center itmes-center'>
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className='absolute top-[50%] text-3xl text-white cursor-pointer left-10'
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className='absolute top-[50%] text-3xl text-white cursor-pointer right-10'
      />
      {sliderData.map((item, index) => (
        <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
          {index === slide && (
            <img className='w-full rounded-md' src={item.url} alt='/' />
          )}
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Carousel;
