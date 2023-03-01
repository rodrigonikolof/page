import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Rodrigo, nice to meet you. </p>
            </div>
            <div>
              <p>Born in Brazil in 1988 (yes, I have a few greys in my beard), moved to Australia in 2009. For 10+ years, I worked as a building/facilities manager where I have gained a multitude of skills and built a solid career. However, I found my true passion in coding.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
