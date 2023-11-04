/* eslint-disable react/no-unescaped-entities */
// import bannerImg from '../../assets/banner.jpg'
import bannderVideo from '../../assets/Extreme Car Parking 3D Game - Car Driving School Gameplay.mp4'
import { FaArrowDown } from "react-icons/fa6";
const Banner = () => {
    return (

        <div className="min-h-screen relative">
            <video autoPlay loop muted className="absolute w-full h-full object-cover">
                <source src={bannderVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Animated text with gradient animation */}
            <div className=" absolute w-full h-full flex items-center justify-around">
                <div className="text-3xl md:text-7xl font-extrabold text-center text-transparent animated-gradient">
                    Welcome <br /> to <br />
                    Our toy's Planet
                </div>
                <div>
                    <FaArrowDown size={"8em"} className=' text-white opacity-50 animate-bounce'></FaArrowDown>
                    <p className='text-white opacity-50 text-xl'>Scroll Down</p>
                </div>
            </div>
        </div>
        // <div className='min-h-screen'>
        //     <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
        //         <div className="hero-overlay bg-opacity-60"></div>
        //         <div className="hero-content text-center text-neutral-content">
        //             <div className="max-w-md">
        //                 <h1 className="mb-5 text-5xl font-bold">Hello kids</h1>
        //                 <p className="mb-5">Unleash the Joy of Play: Explore a World of Miniature Adventures with Our Incredible Toy Cars - Where Imagination Takes the Wheel!</p>

        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;