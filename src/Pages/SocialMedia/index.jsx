import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Modal from "../../Components/Modal";
import plusdesigncapa from "../../Assets/capas/plusDesignCapa.png"
import { useState } from "react";
import gabicheliga from "../../Assets/capas/gabicheliga.png"
import cheligamockup from "../../Assets/SocialMediaImages/gabrielleCheliga/tela-insta.png"
import victoriamockoup from "../../Assets/SocialMediaImages/victoriarico/story-post-carrossel.png"
import studioVictoriaIcone from "../../Assets/capas/capavictoriarico.png"

import Mockup from "../../Assets/SocialMediaImages/PlusDesign/mockup1.png"

function SocialMedia() {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);


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
                    <img src={Mockup} alt="" className="w-full h-auto" />
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