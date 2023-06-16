import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import banner1 from '../../../assets/banner-1.png'
import banner2 from '../../../assets/banner-2.png'
import banner3 from '../../../assets/banner-3.png'
import Slider from "./slider";

const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Slider img={banner1} />
            </SwiperSlide>
            <SwiperSlide>
                <Slider img={banner2} />
            </SwiperSlide>
            <SwiperSlide>
                <Slider img={banner3} />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;