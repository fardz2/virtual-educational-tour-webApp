"use client";

import React, { useEffect, useState } from "react";
import TourCard from "../TourCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClassCard from "../ClassCard";
import virtualTours from "@/libs/dummyTour";

const CarouselContentList = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className="py-4"
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            partialVisbile
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024,
                    },
                    items: 3,
                    partialVisibilityGutter: 40,
                },
                mobile: {
                    breakpoint: {
                        max: 768,
                        min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 768,
                    },
                    items: 2,
                    partialVisibilityGutter: 30,
                },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            
        >
            {virtualTours.slice(0,5).map((input, index) => (
                <TourCard key={index} id={input.id} image={input.image} description={input.description} title={input.title} tag={input.tag.category}/>
            ))}
        </Carousel>
    );
};

export default CarouselContentList;
