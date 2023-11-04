import Service from "../Service/Service";
import useTitle from "../hooks/useTitle";
import Banner from "../shared/Banner";
import Discription from "../shared/Discription";
import Categories from "./Categories";
import Gallery from "./Gallery";

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Discription></Discription>
            
            <Gallery></Gallery>
            <div className="my-20 ">
                <Categories></Categories>
            </div>
            <div className="my-10 md:my-20 mx-5 md:mx-10">
                <h1 className="text-transparent animated-gradient text-3xl md:text-5xl font-bold text-center my-5 md:my-10">Our Services</h1>
                <Service></Service>
            </div>
            
        </div>
    );
};

export default Home;