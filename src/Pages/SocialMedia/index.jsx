import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Modal from "../../Components/Modal";
import plusdesigncapa from "../../Assets/capas/plusDesignCapa.png"
import { useState } from "react";


import plusDesignMidia from "../../Assets/ModalImages/plusDesign/Post Social Media.png"
import gabicheliga from "../../Assets/capas/gabicheliga.png"
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
                    <img src={plusDesignMidia} alt="" />

                    <button className="bg-transparent text-[#2D2D2D] rounded-[50px] p-[10px]">
                        <a href="https://www.instagram.com/revistaplusdesign/" target="blank">veja mais</a>
                    </button>

                </div>
            )


        },

        {
            src: gabicheliga,
            content: (
                <div className="h-screen bg-[#2D2D2D] flex flex-col">
                    <div className="flex flex-col items-center justify-center flex-grow mt-5 gap-5 px-4">
                        <img src={iconetrabalho} className="h-[100px] md:h-[150px] lg:h-[200px]" alt="Ícone de Trabalho" />
                        <div className="text-center">
                            <h1 className="text-white text-[28px] md:text-[36px] leading-none">
                                <strong className="text-white">Opss!</strong>
                            </h1>
                            <h2 className="text-white text-[20px] md:text-[24px] leading-none mt-2">
                                a página ainda não está pronta
                            </h2>
                        </div>
                    </div>
                </div>
            )


        }, {
            src: studioVictoriaIcone,
            content: (
                <div className="h-screen bg-[#2D2D2D] flex flex-col">
                    <div className="flex flex-col items-center justify-center flex-grow mt-5 gap-5 px-4">
                        <img src={iconetrabalho} className="h-[100px] md:h-[150px] lg:h-[200px]" alt="Ícone de Trabalho" />
                        <div className="text-center">
                            <h1 className="text-white text-[28px] md:text-[36px] leading-none">
                                <strong className="text-white">Opss!</strong>
                            </h1>
                            <h2 className="text-white text-[20px] md:text-[24px] leading-none mt-2">
                                a página ainda não está pronta
                            </h2>
                        </div>
                    </div>
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