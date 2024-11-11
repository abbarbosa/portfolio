import React from "react";
import hackathon from "../../Assets/carrossel/hackathon.png";
import palestra from "../../Assets/carrossel/palestra.png";
import apresentacao from "../../Assets/carrossel/apresentação.png";
import adobe from "../../Assets/carrossel/adobe.png";
import certificacaoazure from "../../Assets/carrossel/azure.png";
import grand from "../../Assets/carrossel/grand prix.jpg";

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const Carousel = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            className="custom-swiper"
            breakpoints={{
                // Quando a largura da tela for 1024px ou maior
                1024: {
                    slidesPerView: 3, // 3 slides por vez
                },
                // Quando a largura da tela for 768px ou maior
                768: {
                    slidesPerView: 2, // 2 slides por vez
                },
                // Quando a largura da tela for menor que 768px
                0: {
                    slidesPerView: 1, // 1 slide por vez
                },
            }}
        >
            <SwiperSlide className="custom-slide">
                <div className="slide-content">
                    <img src={hackathon} alt="Hackathon" className="custom-image" />
                    <div className="text-overlay">Hackathon</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
                <div className="slide-content">
                    <img src={adobe} alt="Adobe" className="custom-image" />
                    <div className="text-overlay">Adobe</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
                <div className="slide-content">
                    <img src={palestra} alt="Palestra" className="custom-image" />
                    <div className="text-overlay">Palestra</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
                <div className="slide-content">
                    <img src={certificacaoazure} alt="Certificação Azure" className="custom-image" />
                    <div className="text-overlay">Certificação Azure</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
                <div className="slide-content">
                    <img src={apresentacao} alt="Apresentação" className="custom-image" />
                    <div className="text-overlay">Apresentação</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
                <div className="slide-content">
                    <img src={grand} alt="Grand Prix" className="custom-image" />
                    <div className="text-overlay">Grand Prix</div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
