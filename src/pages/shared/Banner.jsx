import bannerImg from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero h-72" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello kids</h1>
                        <p className="mb-5">Unleash the Joy of Play: Explore a World of Miniature Adventures with Our Incredible Toy Cars - Where Imagination Takes the Wheel!</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;