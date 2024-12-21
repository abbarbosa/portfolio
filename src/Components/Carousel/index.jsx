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

import plusDesignPost01 from "../../Assets/SocialMediaImages/PlusDesign/PscologiaDasCores.png"
import plusDesignPost02 from "../../Assets/SocialMediaImages/PlusDesign/Post-Jogo.png"
import plusDesignPost03 from "../../Assets/SocialMediaImages/PlusDesign/Post-tendencia.png"

import ViRicoPost01 from "../../Assets/SocialMediaImages/victoriarico/dicas-cuidados_01.png"
import ViRicoPost02 from "../../Assets/SocialMediaImages/victoriarico/unha-002.png"
import ViRicoPost03 from "../../Assets/SocialMediaImages/victoriarico/unha-amendoada.png"


import GabiCheligaPost01 from "../../Assets/SocialMediaImages/gabrielleCheliga/post-colaboração_01.png"
import GabiCheligaPost02 from "../../Assets/SocialMediaImages/gabrielleCheliga/post-maconha_01.png"
import GabiCheligaPost03 from "../../Assets/SocialMediaImages/gabrielleCheliga/post-regime-de-bens_01.png"


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
                    {/* <div className="text-overlay text-white">Hackathon SENAI e DiggySys</div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
                <div className="slide-content">
                    <img src={adobe} alt="Adobe" className="custom-image" />
                    {/* <div className="text-overlay text-white">Certificação em Adobe Illustrator</div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
                <div className="slide-content">
                    <img src={palestra} alt="Palestra" className="custom-image" />
                    {/* <div className="text-overlay text-white">Palestra sobre empregabilidade</div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
                <div className="slide-content">
                    <img src={certificacaoazure} alt="Certificação Azure" className="custom-image" />
                    {/* <div className="text-overlay text-white">Certificação Azure AI Fundamentals</div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
                <div className="slide-content">
                    <img src={apresentacao} alt="Apresentação" className="custom-image" />
                    {/* <div className="text-overlay text-white">Apresentação do aplicativo Voltair</div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
                <div className="slide-content">
                    <img src={grand} alt="Grand Prix" className="custom-image" />
                    {/* <div className="text-overlay text-white">Equipe Grand Prix SENAI de Inovação</div> */}
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export const PlusDesignPosts = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                className="custom-swiper"
                breakpoints={{
                    // Quando a largura da tela for 1024px ou maior
                    1024: {
                        slidesPerView: 2, // 3 slides por vez
                    },
                    // Quando a largura da tela for 768px ou maior
                    768: {
                        slidesPerView: 1, // 2 slides por vez
                    },
                }}
            >

                <SwiperSlide className="custom-slide">
                    <div className="slide-content">
                        <img src={plusDesignPost01} alt="" className="custom-image" />
                    </div>
                </SwiperSlide>

                <SwiperSlide className="custom-slide">
                    <div className="slide-content">
                        <img src={plusDesignPost02} alt="" className="custom-image" />
                    </div>
                </SwiperSlide>

                <SwiperSlide className="custom-slide">
                    <div className="slide-content">
                        <img src={plusDesignPost03} alt="" className="custom-image" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export const ViRicoPosts = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                className="custom-swiper"
                breakpoints={{
                    // Quando a largura da tela for 1024px ou maior
                    1024: {
                        slidesPerView: 2, // 3 slides por vez
                    },
                    // Quando a largura da tela for 768px ou maior
                    768: {
                        slidesPerView: 1, // 2 slides por vez
                    },
                }}
            >

                <SwiperSlide className="custom-slide">
                    <div className="slide-content">
                        <img src={ViRicoPost02} alt="" className="custom-image" />
                    </div>
                </SwiperSlide>

                <SwiperSlide className="custom-slide">
                    <div className="slide-content">
                        <img src={ViRicoPost01} alt="" className="custom-image" />
                    </div>
                </SwiperSlide>

                <SwiperSlide className="custom-slide">
                    <div className="slide-content">
                        <img src={ViRicoPost03} alt="" className="custom-image" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}


export const GabiCheligaPosts = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                className="custom-swiper"
                breakpoints={{
                    // Quando a largura da tela for 1024px ou maior
                    1024: {
                        slidesPerView: 2, // 3 slides por vez
                    },
                    // Quando a largura da tela for 768px ou maior
                    768: {
                        slidesPerView: 1, // 2 slides por vez
                    },
                }}
            >

                <SwiperSlide className="custom-slide">
                    <div className="slide-content">
                        <img src={GabiCheligaPost01} alt="" className="custom-image" />
                    </div>
                </SwiperSlide>

                <SwiperSlide className="custom-slide">
                    <div className="slide-content">
                        <img src={GabiCheligaPost02} alt="" className="custom-image" />
                    </div>
                </SwiperSlide>

                <SwiperSlide className="custom-slide">
                    <div className="slide-content">
                        <img src={GabiCheligaPost03} alt="" className="custom-image" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
