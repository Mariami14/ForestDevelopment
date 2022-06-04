import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode } from "swiper";
import CustomersCard from "./CustomersCard";
import { Autoplay } from 'swiper';
import customerInfo from './customerInfo.json'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Slider() {
    return (
        <div className="mt-8">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode,Autoplay]}
                grabCursor={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}


            >
                { customerInfo.map((customer, index) =>
                    <SwiperSlide key={index}>
                        <CustomersCard key={index}
                                       img={customer.img}
                                       name={customer.name}
                                       surname={customer.surname}
                                       text={customer.text}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}
