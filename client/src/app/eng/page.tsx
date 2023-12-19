import Image from 'next/image';
import Header from '@/components/header/Header';
import { Carousel } from '@/components/carousel';
import photo from '../../../public/assets/imgs/INDIVIDUAL-8.jpg';
import { IoMdArrowDropright } from "react-icons/io";
import VideoComponent from '../../components/VideoComponent';
import AboutUs from '@/components/about-us/AboutUs';

export default function Home() {
  const youtubeVideoId = 'sa6jdiYVCUk';
  return (
    <main className="flex flex-col justify-center">
    <div className="w-full bg-center bg-cover h-[60rem] relative">
        <Image
          src={photo}
          alt="Your Alt Text"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className='-z-10'
        />
        <div className="flex flex-col gap-7 items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center flex flex-col align-middle mt-20">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl">Discover a foreigner&apos;s view of <span className="text-orange-300">Japan</span> and <span className="text-orange-300">The World</span>. </h1>
                <button className="w-[8rem] py-2 mt-4 text-white  transition-colors duration-300 transform  rounded-md focus:outline-none flex items-center gap-2 font-semibold text-lg">Learn More<IoMdArrowDropright /></button>
            </div>
            <div className='flex w-full h-auto items-center justify-center '>
              <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/sa6jdiYVCUk?autoplay=1`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      className='w-[40rem] h-[20rem] rounded-xl'
                      allowFullScreen
                    ></iframe>
            </div>
            <Carousel />
        </div>
    </div>
    <AboutUs />
    </main>
  )
}
