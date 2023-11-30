"use client";

import React from "react";
import TourContentCard from "../TourContentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CaraouselContentList = () => {
    return (
        <>
            <div className="w-full px-12">
                <Swiper
                    spaceBetween={16}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <TourContentCard
                            title={`Judul dari educational tour`}
                            desc="lorem ipsum dolor si amaet"
                            href="/"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TourContentCard
                            title={`Judul dari educational tour`}
                            desc="lorem ipsum dolor si amaet"
                            href="/"
                        />
                    </SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default CaraouselContentList;
