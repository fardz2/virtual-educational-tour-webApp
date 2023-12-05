"use client";

import React, { useState } from "react";
import TourContentCard from "../TourContentCard";

interface CaraouselProps {}

const CaraouselContentList = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
    };

    return (
        <>
            {/* <div className="w-full px-12">
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
            </div> */}

            <div className={`relative overflow-hidden`}>
                <div
                    className={`flex transition-transform ease-in-out duration-500 transform -translate-x-full`}
                >
                    {/* {images.map((image, index) => (
                        <div
                            key={index}
                            className={`${styles.slide} ${
                                index === currentSlide ? "active" : ""
                            }`}
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ))} */}
                    <div
                        className={`w-screen h-80 shrink-0 opacity-50 transition-opacity ${
                            currentSlide ? "opacity-100" : ""
                        }`}
                    >
                        <TourContentCard title="a" desc="" href="" />
                        <TourContentCard title="b" desc="" href="" />
                        <TourContentCard title="c" desc="" href="" />
                    </div>
                </div>
                <button
                    className={`absolute top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer left-4`}
                    onClick={goToPrevSlide}
                >
                    &lt;
                </button>
                <button
                    className={`absolute top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer right-4`}
                    onClick={goToNextSlide}
                >
                    &gt;
                </button>
            </div>
        </>
    );
};

export default CaraouselContentList;
