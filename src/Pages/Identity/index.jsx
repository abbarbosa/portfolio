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


// victoria rico
import logo01 from "../../Assets/ModalImages/Victoria Rico/logo01.png"
import logo02 from "../../Assets/ModalImages/Victoria Rico/logo02.png"
import logo03 from "../../Assets/ModalImages/Victoria Rico/logo03.png"
import font from "../../Assets/ModalImages/Victoria Rico/font.png"
import paleta from "../../Assets/ModalImages/Victoria Rico/paleta.png"
import cartaovisitas from "../../Assets/ModalImages/Victoria Rico/cartão-de-visitas-vertical.png"

//bigdash
// import bigDash01 from "../../Assets/ModalImages/BigDash/logo01.png"
// import bigDash02 from "../../Assets/ModalImages/BigDash/logo02.png"
// import bigDash03 from "../../Assets/ModalImages/BigDash/logo03.png"
import fachada from "../../Assets/ModalImages/BigDash/fachadaBigDash.png"

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
                <div className="flex flex-col items-center">
                    <div className="flex flex-wrap gap-3 mt-3 items-center justify-center">
                        <img className="h-[80px] sm:h-[100px] w-auto" src={logo01} alt="Logo 1" />
                        <img className="h-[80px] sm:h-[100px] w-auto" src={logo02} alt="Logo 1" />
                        <img className="h-[80px] sm:h-[100px] w-auto" src={logo03} alt="Logo 1" />
                    </div>

                    <div className="flex flex-wrap gap-3 mt-3 items-center justify-center">
                        <img className="h-[50px] " src={paleta} alt="Logo 3" />
                        <img className="h-[30px] " src={font} alt="Logo 3" />
                    </div>


                    <p className="mt-3 text-center">
                        A identidade visual do <strong>Studio Victoria Rico</strong> combina a elegância da tipografia <strong>Fraunces</strong> com uma paleta de cores <strong>sóbrias e sofisticadas</strong>, refletindo a <strong>modernidade</strong> e o <strong>carinho</strong> que o estúdio coloca em cada serviço. O uso do ícone de <strong>coração</strong> reforça a <strong>conexão emocional</strong> com os clientes, destacando o <strong>compromisso</strong> com a beleza e a satisfação.
                    </p>

                    <img className="h-80" src={cartaovisitas} />

                </div>
            )
        },
        {
            src: capabigdash,
            content: (
                <div className="flex flex-col items-center">
                    <div className="flex flex-wrap gap-3 mt-3 items-center justify-center">
                        <img className="h-[80px] sm:h-[100px] w-auto rounded" src={fachada} alt="Fachada Big Dash" />
                    </div>

                    <p className="mt-3 text-center">
                        A plataforma <strong>Big Dash</strong> é uma solução <strong>inovadora</strong> para <strong>análise de dados</strong>, projetada com um <strong>painel interativo</strong> e <strong>personalizável</strong>, permitindo que os usuários tenham total controle sobre suas informações. Com um design <strong>moderno</strong>, a plataforma se destaca pela sua <strong>usabilidade</strong> e funcionalidades <strong>avançadas</strong>, otimizando o trabalho com dados e garantindo uma experiência <strong>eficiente</strong> para os usuários.
                    </p>
                </div>
            )
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
