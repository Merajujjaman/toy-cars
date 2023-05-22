
import Marquee from "react-fast-marquee";

const Gallery = () => {
    return (
        <div className="my-10">
            <h1 className="text-center text-green-500 text-3xl font-bold my-5">Gallery</h1>
            <hr className="border-2 mb-5"/>
            <div className="mb-10">
                <Marquee speed={100} direction='right'>
                    <div className="card card-compact w-48 h-48 mx-5 bg-base-100 ">
                        <figure><img src="https://5.imimg.com/data5/PF/PG/MY-55849933/kids-racing-car-toys-500x500.jpg" alt="toy" /></figure>

                    </div>
                    <div className="card card-compact w-48 h-48 mx-5 bg-base-100 ">
                        <figure><img src="https://image.made-in-china.com/155f0j00qBlhocJgHfpt/Metal-Alloy-Shell-1-24-Radio-Control-2-4G-Racing-Car-High-Speed-Electric-Drift-Car-Toys-for-Boys-Girls-Kids.jpg" alt="toy" /></figure>

                    </div>
                    <div className="card card-compact w-48 h-48 mx-5 bg-base-100 ">
                        <figure><img src="https://images.thdstatic.com/productImages/b3b51cf2-2591-47ed-9909-badee8be4e52/svn/blacks-tobbi-kid-cars-th17t0638-64_600.jpg" alt="Shoes" /></figure>

                    </div>
                    <div className="card card-compact w-48 h-48 mx-5 bg-base-100 ">
                        <figure><img src="https://static-01.daraz.pk/p/338b81e9ac8187af7a3a468fa1460927.jpg_720x720.jpg_.webp" alt="toy" /></figure>

                    </div>
                    <div className="card card-compact w-48 h-48 mx-5 bg-base-100 ">
                        <figure><img src="https://m.media-amazon.com/images/I/61Y+7L4Kp-L._AC_SL1000_.jpg" alt="toy" /></figure>

                    </div>
                </Marquee>
            </div>
            <Marquee speed={100} >
                <div className="card card-compact w-48 h-48 mx-5 bg-base-100 ">
                    <figure><img src="https://5.imimg.com/data5/PF/PG/MY-55849933/kids-racing-car-toys-500x500.jpg" alt="toy" /></figure>

                </div>
                <div className="card card-compact w-48 h-48 mx-5 bg-base-100 ">
                    <figure><img src="https://image.made-in-china.com/155f0j00qBlhocJgHfpt/Metal-Alloy-Shell-1-24-Radio-Control-2-4G-Racing-Car-High-Speed-Electric-Drift-Car-Toys-for-Boys-Girls-Kids.jpg" alt="toy" /></figure>

                </div>
                <div className="card card-compact w-48 h-48 mx-5 bg-base-100 ">
                    <figure><img src="https://images.thdstatic.com/productImages/b3b51cf2-2591-47ed-9909-badee8be4e52/svn/blacks-tobbi-kid-cars-th17t0638-64_600.jpg" alt="Shoes" /></figure>

                </div>
                <div className="card card-compact w-48 h-48 mx-5 bg-base-100 ">
                    <figure><img src="https://static-01.daraz.pk/p/338b81e9ac8187af7a3a468fa1460927.jpg_720x720.jpg_.webp" alt="toy" /></figure>

                </div>
                <div className="card card-compact w-48 h-48 mx-5 bg-base-100 ">
                    <figure><img src="https://m.media-amazon.com/images/I/61Y+7L4Kp-L._AC_SL1000_.jpg" alt="toy" /></figure>

                </div>
            </Marquee>
            <hr className="border-2 my-5"/>
        </div>
    );
};

export default Gallery;