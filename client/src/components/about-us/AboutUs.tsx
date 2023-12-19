
import React from 'react';
import Image from 'next/image';
import image1 from '../../../public/assets/imgs/KORANKEI FESTIVAL - DJI-09.jpg';

const AboutUs: React.FC = () => {
  return (
                
<section className="bg-zinc-900 border-t-4 border-[#5d7264]">
    <div className="relative flex">
        <div className="min-h-screen lg:w-1/3"></div>
        <div className="hidden w-3/4 min-h-screen lg:block"></div>
        
        <div
            className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 className="text-2xl font-semibold lg:text-3xl text-white">
                The <span className="text-[#5d7264]">Beauty</span> our drones can see from<br/> above your eyes.
            </h1>

            <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/sa6jdiYVCUk`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className='object-cover object-center w-full lg:w-[32rem] rounded-lg h-96'
        allowFullScreen
      ></iframe>
                <div className="mt-8 lg:px-10 lg:mt-0">
                    <h1 className="text-2xl font-semibold  text-white lg:w-72">
                    Soaring Heights, <br/>Infinite Views.
                    </h1>

                    <p className="max-w-lg mt-6  text-gray-200">
                        Unlock a new perspective on the world around you with our stunning collection of drone-captured photographs. Drones have revolutionized the way we experience and appreciate the beauty of our environment, offering a unique vantage point that was once reserved for the birds. At Drone Gaijin, we bring you a curated selection of breathtaking images and videos that showcase the unparalleled magic of nature from above.
                    </p>

                    <h3 className="mt-6 text-lg font-medium text-yellow-100">Video from Drone Gaijin</h3>
                    <p className=" text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

            <div className="flex items-center justify-between mt-12 lg:justify-start">
                <button title="left arrow" className="p-2  transition-colors duration-300 border-2 rounded-full rtl:-scale-x-100 border-[#5d7264] text-[#5d7264] hover:border-[#819d8a] hover:text-[#819d8a] ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button title="right arrow" className="p-2  transition-colors duration-300 border-2 rounded-full rtl:-scale-x-100 border-[#5d7264] text-[#5d7264] hover:border-[#819d8a] hover:text-[#819d8a] lg:mx-6 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</section>

        
  );
};

export default AboutUs;