import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Modal from "../../Components/Modal";

import capaEnsaio from "../../Assets/Extras/capaEnsaio.png"
import capaRevista from "../../Assets/Extras/capaRevista.png"

import capaSinapse from "../../Assets/Extras/capaSinapse.png"

function Extras() {

    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
        setModalContent(null);
    };

    const images = [
        {
            src: capaEnsaio,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                </div>
            )
        },

        {
            src: capaRevista,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                </div>
            )
        },

    ]

    const animations = [
        {
            src: capaSinapse,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                </div>
            )
        },
    ]


    const institutionals = [
    ]

    return (
        <div className="h-[1250px] bg-[#2D2D2D] flex flex-col">
            <Header />

            {/* <div className="flex flex-col items-center justify-center flex-grow mt-5 gap-5 px-4">
                <img src={iconetrabalho} className="h-[100px] md:h-[150px] lg:h-[200px]" alt="Ícone de Trabalho" />
                <div className="text-center">
                    <h1 className="text-white text-[28px] md:text-[36px] leading-none">
                        <strong className="text-white">Opss!</strong>
                    </h1>
                    <h2 className="text-white text-[20px] md:text-[24px] leading-none mt-2">
                        a página ainda não está pronta
                    </h2>
                </div>
            </div> */}
            <div className="flex items-start pl-10 pt-10">
                <h1 className="text-complementary-white text-[36px] text-center">Ensaios fotográficos</h1>
            </div>
            <hr className="w-[80%]" />

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
            <div className="flex items-start pl-10">
                <h1 className="text-complementary-white text-[36px] text-center" >Animações</h1>
            </div>
            <hr className="w-[80%]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:p-8">
                {animations.map((image, index) => (
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

            <div className="flex items-start pl-10">
                <h1 className="text-complementary-white text-[36px] text-center" >Vídeos Institucionais</h1>
            </div>
            <hr className="w-[80%]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:p-8">
                {institutionals.map((image, index) => (
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

export default Extras;
