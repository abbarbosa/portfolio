import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Modal from "../../Components/Modal";
import plusdesigncapa from "../../Assets/capas/plusDesignCapa.png"
import { useState } from "react";


import plusDesignPost01 from "../../Assets/SocialMediaImages/PlusDesign/post-feed01.png"
import plusDesignPost03 from "../../Assets/SocialMediaImages/PlusDesign/post-feed03.png"
import plusDesignPost06 from "../../Assets/SocialMediaImages/PlusDesign/post-feed06.png"
import plusDesignStory1 from "../../Assets/SocialMediaImages/PlusDesign/story01.png"
import plusDesignStory2 from "../../Assets/SocialMediaImages/PlusDesign/story02.png"
import plusDesignStory3 from "../../Assets/SocialMediaImages/PlusDesign/story03.png"
import plusDesignCarousel01 from "../../Assets/SocialMediaImages/PlusDesign/carrossel01.png"
import plusDesignCarousel02 from "../../Assets/SocialMediaImages/PlusDesign/carrossel02.png"
import plusDesignCarousel03 from "../../Assets/SocialMediaImages/PlusDesign/carrossel03.png"

import gabicheliga from "../../Assets/capas/gabicheliga.png"
import cheligamockup from "../../Assets/SocialMediaImages/gabrielleCheliga/tela-insta.png"

import victoriamockoup from "../../Assets/SocialMediaImages/victoriarico/story-post-carrossel.png"




import iconetrabalho from "../../Assets/iconetrabalho.png"
import studioVictoriaIcone from "../../Assets/capas/capavictoriarico.png"

function SocialMedia() {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    // Função para abrir o modal com conteúdo específico
    const openModal = (content) => {
        setModalContent(content);
        setModal(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setModal(false);
        setModalContent(null);
    };
    const images = [
        {
            src: plusdesigncapa,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">

                    <button className="rounded-b-[10px] bg-[#CB7323] w-[100%] h-[100px]">Posts</button>


                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <img src={plusDesignPost01} alt="Post 1" className="w-full h-auto" />
                        <img src={plusDesignPost03} alt="Post 3" className="w-full h-auto" />
                        <img src={plusDesignPost06} alt="Post 6" className="w-full h-auto" />
                    </div>

                    <button className="rounded-[10px] bg-[#1E1F1C]  text-[#CB7323] w-[100%] h-[100px]">Reels</button>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <img src={plusDesignStory1} alt="story 01" className="w-full h-auto" />
                        <img src={plusDesignStory2} alt="story 02" className="w-full h-auto" />
                        <img src={plusDesignStory3} alt="story 03" className="w-full h-auto" />
                    </div>

                    <button className="rounded-[10px] bg-[#CB7323] w-[100%] h-[100px]">Carrosséis</button>

                    <img src={plusDesignCarousel01} alt="story 01" className="w-full h-auto mt-4" />
                    <img src={plusDesignCarousel02} alt="story 02" className="w-full h-auto mt-4" />
                    <img src={plusDesignCarousel03} alt="story 03" className="w-full h-auto mt-4" />

                    {/* <button className="bg-transparent text-[#2D2D2D] rounded-[50px] p-[10px] underline">
                        <a href="https://www.instagram.com/revistaplusdesign/" target="blank">veja mais</a>
                    </button> */}

                </div>
            )


        },

        {
            src: gabicheliga,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <img src={cheligamockup} alt="" className="w-full h-auto" />
                </div>
            )


        }, {
            src: studioVictoriaIcone,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <img src={victoriamockoup} alt="" className="w-full h-auto" />
                    {/* <button className="bg-transparent text-[#2D2D2D] rounded-[50px] p-[10px] underline">
                        <a href="https://www.instagram.com/studio.victoriarico/" target="blank">veja mais</a>
                    </button> */}
                </div>
            )


        }
    ]
    return (
        <div className="bg-[#2D2D2D] min-h-screen">
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:p-8">
                {images.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => openModal(image.content)}
                        className="relative h-48 bg-cover bg-center rounded bg-gray-500 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        style={{
                            backgroundImage: `url(${image.src})`,
                        }}
                    >
                        <span className="absolute bottom-2 left-2 text-white text-lg">{image.label}</span>
                    </div>
                ))}
            </div>

            <Modal isOpen={modal} onClose={closeModal}>
                {modalContent}
            </Modal>
            <Footer />
        </div>
    );
}

export default SocialMedia;