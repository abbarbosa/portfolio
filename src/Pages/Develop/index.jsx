import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState } from "react";
import Modal from "../../Components/Modal";

import { ReactComponent as CloudLogo } from "../../Assets/cloudLogo.svg"
import capatechconnect from "../../Assets/DevImages/techMockup.png";
import VoltairMockup from "../../Assets/DevImages/voltairMockup.png"
import cloudMockup from "../../Assets/DevImages/CloudMockup.png";
import ativements from "../../Assets/DevImages/Ativements.png"
import vitalHub from "../../Assets/DevImages/VitalHub.png"
import geto from "../../Assets/DevImages/geto.png"

function Develop() {
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
            src: cloudMockup,
            content: (
                <div className="flex justify-center items-center p-4 sm:p-6 max-h-[500px]">

                    <div>
                        <CloudLogo className="h-[100px] w-[100px] rounded-full" />
                        <h2 className="text-xl font-bold mt[30px]">CloudCore</h2>
                    </div>

                    <div className="flex justify-between items-center gap-[115px]">

                        <div className="flex flex-col items-start justify-center gap-[15px] font-semibold text-[16px] p-[50px]">
                            <div>
                                <p className="text-start">A CloudCore é um aplicativo de gerenciamento de documentos que pensa na facilidade do usuário mas que também de forma clara organiza esses arquivos. </p>
                            </div>
                            <div className="flex ">
                                <a href="https://cloudcoreapresentacao.vercel.app/" target="blank">
                                    <button className="rounded-[20px] p-[10px] hover:bg-[#e8e5e5]">Veja a apresentação</button>
                                </a>

                                <a href="https://drive.google.com/file/d/1obTqS6a5LUnxe9XoKdKVnZsStFy5jE0N/view" target="blank">
                                    <button className="rounded-[20px] p-[10px] hover:bg-[#e8e5e5]">Veja como funciona</button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        {
            src: capatechconnect,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                </div>
            )
        },

        {
            src: VoltairMockup,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                </div>
            )
        },

        {
            src: ativements,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                </div>
            )
        },

        {
            src: vitalHub,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                </div>
            )
        },

        {
            src: geto,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                </div>
            )
        },

    ]

    return (
        <div className="h-[100%] bg-[#2D2D2D] flex flex-col">
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

export default Develop;