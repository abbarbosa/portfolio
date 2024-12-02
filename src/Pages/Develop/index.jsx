import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState } from "react";
import Modal from "../../Components/Modal";

import VitalHub from "../../Assets/DevImages/vitalHubCapa.png"
import capatechconnect from "../../Assets/capas/capatechconnect.png";
import Voltair from "../../Assets/DevImages/Voltair.png"

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
            src: VitalHub,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
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
            src: Voltair,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                </div>
            )
        }
    ]

    return (
        <div className="h-screen bg-[#2D2D2D] flex flex-col">
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