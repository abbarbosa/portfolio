// Identity.js
import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Modal from "../../Components/Modal";
import capavictoriarico from "../../Assets/capas/capavictoriarico.png";
import capaclarifotos from "../../Assets/capas/capaclarifotos.png";
import capabigdash from "../../Assets/capas/capabigdash.png";
import capamedbox from "../../Assets/capas/capamedbox.png"; // Corrigido o caminho duplicado
import capanevesadvogados from "../../Assets/capas/capanevesadvogados.png";
import capaabstracao from "../../Assets/capas/capaabstracao.png";
import capatechconnect from "../../Assets/capas/capatechconnect.png";
import capagabicheliga from "../../Assets/capas/capagabicheliga.png";
import capadocelu from "../../Assets/capas/capadocelu.png";

function Identity() {
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
            src: capavictoriarico,
            content: (
                <div>
                    <img className="" src=""/>
                    <p>Esse é o projeto do Studio Victoria Rico, focado em design moderno e funcional.</p>
                </div>
            )
        },
        {
            src: capabigdash,
            content: <p>Big Dash é uma plataforma de análise de dados com um painel interativo e personalizável.</p>
        },
        {
            src: capaclarifotos,
            content: <p>Clarifotos é um portfólio de fotografia, com um layout limpo para destacar as imagens.</p>
        },
        {
            src: capagabicheliga,
            content: <p>Descrição do Projeto Extra 2, um design único focado em soluções digitais.</p>
        },
        {
            src: capanevesadvogados,
            content: <p>Descrição do Projeto Extra 1, uma iniciativa inovadora com foco em tecnologia.</p>
        },
        {
            src: capamedbox,
            content: <p>MedBox é um aplicativo de monitoramento de saúde, focado em fornecer dados precisos e acompanhamento de bem-estar.</p>
        },
        {
            src: capadocelu,
            content: <p></p>
        },
        {
            src: capaabstracao,
            content: <p>Descrição do Projeto Extra 2, um design único focado em soluções digitais.</p>
        },
        {
            src: capatechconnect,
            content: <p>Descrição do Projeto Extra 2, um design único focado em soluções digitais.</p>
        },



    ];

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

export default Identity;
