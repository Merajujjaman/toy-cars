import Service from "../Service/Service";
import useTitle from "../hooks/useTitle";
import Banner from "../shared/Banner";
import Categories from "./Categories";
import Gallery from "./Gallery";

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <div className="my-10">
                <h1 className="text-green-500 text-3xl text-center font-bold underline-offset-1">Description</h1>
                <hr className="border-2 my-2" />

                <p className="text-center text-gray-500 italic justify-around">
                    Welcome to our vibrant and thrilling toy car website, where imagination meets the open road! Dive into a world of miniature vehicles that will captivate children and collectors alike. Discover an extensive array of meticulously crafted toy cars, ranging from classic sports cars to powerful monster trucks. Our collection features stunning attention to detail, realistic designs, and durable construction for hours of playtime joy. Whether your little ones dream of racing, exploring, or building their own miniature car collection, our website offers a vast selection to fulfill their every desire. Get ready to rev up the excitement and embark on unforgettable adventures with our incredible toy cars. Let the journey begin!
                </p>
            </div>
            <Gallery></Gallery>
            <div className="my-20 ">
                <Categories></Categories>
            </div>
            <div className="mb-20">
                <h1 className="text-green-500 text-3xl font-bold text-center my-5">Our Services</h1>
                <Service></Service>
            </div>
            
        </div>
    );
};

export default Home;