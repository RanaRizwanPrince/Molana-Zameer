import React from "react";
// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Swiper CSS
import "swiper/css";
const LibririBookle = () => {
    return (
        <>
            <section className="librirbookle">
                <div className="container-fluid text-center">
                    <div className="col-lg-10 offset-lg-1">
                        <h1>Bookle Top Books</h1>
                        <p>Bookle Top Books brings you a rich collection of knowledge, faith, and literature. Explore timeless writings from renowned scholars, offering guidance, wisdom, and inspiration for readers seeking meaningful learning and spiritual growth.</p>
                    </div>
                    <Swiper modules={[Autoplay]} autoplay={{ delay: 2000, disableOnInteraction: false }} loop={true} spaceBetween={20} breakpoints={{
                        0: {
                            slidesPerView: 1, // Mobile
                        },
                        768: {
                            slidesPerView: 5, // Tablet/Desktop
                        },
                    }} >
                        {/* Example products - replace with your real data */}
                        <SwiperSlide>
                            <div><img src="https://gramentheme.com/html/bookle/assets/img/book/04.png" alt="01" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div><img src="https://gramentheme.com/html/bookle/assets/img/book/05.png" alt="01" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div><img src="https://gramentheme.com/html/bookle/assets/img/book/03.png" alt="01" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div><img src="https://gramentheme.com/html/bookle/assets/img/book/02.png" alt="01" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div><img src="https://gramentheme.com/html/bookle/assets/img/book/05.png" alt="01" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div><img src="https://gramentheme.com/html/bookle/assets/img/book/03.png" alt="01" /></div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
};
export default LibririBookle;