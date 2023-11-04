import Lottie from "lottie-react";
import Animation from '../../../src/assets/animation_loegfsn3.json'
const Discription = () => {
    return (
        <div className="my-10 md:my20 mx-5 md:mx-10">

            <div className="md:flex gap-10 justify-around items-center">
                <div className="w-full md:w-1/2">
                    <Lottie animationData={Animation} loop={true}></Lottie>
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className=" text-3xl md:text-5xl text-center text-transparent animated-gradient font-bold underline-offset-1">Description</h1>
                    <hr className="border-2 my-2" />
                    <p className="text-center text-gray-500 italic justify-normal">
                        Welcome to our vibrant and thrilling toy car website, where imagination meets the open road! Dive into a world of miniature vehicles that will captivate children and collectors alike. Discover an extensive array of meticulously crafted toy cars, ranging from classic sports cars to powerful monster trucks. Our collection features stunning attention to detail, realistic designs, and durable construction for hours of playtime joy. Whether your little ones dream of racing, exploring, or building their own miniature car collection, our website offers a vast selection to fulfill their every desire. Get ready to rev up the excitement and embark on unforgettable adventures with our incredible toy cars. Let the journey begin!
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Discription;