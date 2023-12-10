import Image from 'next/image';
import Header from '@/components/header/Header';
import { Carousel } from '@/components/carousel';
interface BackgroundImageProps {
  imageUrl: string;
}
const imageUrl = 'https://instagram.fssa7-1.fna.fbcdn.net/v/t39.30808-6/407846302_17904603194870794_5434279238283622427_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2MC5zZHIifQ&_nc_ht=instagram.fssa7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=InA7UTaixfcAX-4Moua&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzI0OTM4MTM3MDExMDAwODExNQ%3D%3D.2-ccb7-5&oh=00_AfBsX3sIh5RVAmWrgIqAnqA0kurWZFxVxRmQ28YooGfIBQ&oe=657617C7&_nc_sid=ee9879';
export default function Home() {
  return (
    <main className="flex flex-col justify-center">
    <div className="w-full bg-center bg-cover h-[38rem]" style={{ backgroundImage: `url('${imageUrl}')` }}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl">All new photos on <span className="text-green-400">SALE</span> today!</h1>
                <button className="w-auto px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-md lg:w-auto hover:bg-green-500 focus:outline-none focus:bg-green-500">Start browsing</button>
            </div>
        </div>
    </div>
    <Carousel />
    </main>
  )
}
