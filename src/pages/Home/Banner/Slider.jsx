import { Link } from 'react-router-dom'

const Slider = ({ img }) => {
    return (
        <div className="relative">
            <img className="h-[50vh] md:h-[90vh] w-full" src={img} alt="" />
            <div className="flex items-end p-10 md:p-20 text-white h-full w-full bg-black bg-opacity-30 absolute z-10 top-0">
                <div className="space-y-2">
                    <h3 className="text-3xl">ArtCratf School</h3>
                    <p>Inspiring creativity, fostering craftsmanship, and empowering artists through <br /> exceptional education and vibrant artistic community.</p>
                    <Link className="btn btn-primary" to="/classes">Get More</Link>
                </div>
            </div>
        </div>
    );
};

export default Slider;