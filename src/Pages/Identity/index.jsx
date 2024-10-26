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
import bigDash01 from "../../Assets/ModalImages/BigDash/logo01.png"
import bigDash02 from "../../Assets/ModalImages/BigDash/logo02.png"
import bigDash03 from "../../Assets/ModalImages/BigDash/logo03.png"
import bigDashFachada from "../../Assets/ModalImages/BigDash/fachadaBigDash.png"
import bigDashFont from "../../Assets/ModalImages/BigDash/font.png"
import bigDashPallete from "../../Assets/ModalImages/BigDash/paleta.png"

//clarifotos
import clariMockup from "../../Assets/ModalImages/clarifotos/mockupClarifotos.png"
import clariLogo01 from "../../Assets/ModalImages/clarifotos/logo01.png"
import clariLogo02 from "../../Assets/ModalImages/clarifotos/logo02.png"
import clariLogo03 from "../../Assets/ModalImages/clarifotos/logo03.png"

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
                    {/* <div className="flex flex-wrap gap-3 mt-3 items-center justify-center">
                        <img className="h-[80px] sm:h-[100px] w-auto" src={logo01} alt="Logo 1" />
                        <img className="h-[80px] sm:h-[100px] w-auto" src={logo02} alt="Logo 1" />
                        <img className="h-[80px] sm:h-[100px] w-auto" src={logo03} alt="Logo 1" />
                    </div>

                    <div className="flex flex-wrap gap-3 mt-3 items-center justify-center">
                        <img className="h-[50px]" src={paleta} alt="Paleta" />
                        <img className="h-[30px]" src={font} alt="Fonte" />
                    </div> */}

                    <p className="mt-3 text-center">
                        A identidade visual do <strong>Studio Victoria Rico</strong> combina a elegância da tipografia <strong>Fraunces</strong> com uma paleta de cores <strong>sóbrias e sofisticadas</strong>, refletindo a <strong>modernidade</strong> e o <strong>carinho</strong> que o estúdio coloca em cada serviço. O uso do ícone de <strong>coração</strong> reforça a <strong>conexão emocional</strong> com os clientes, destacando o <strong>compromisso</strong> com a beleza e a satisfação.
                    </p>

                    {/* <img className="h-80" src={cartaovisitas} /> */}
                </div>
            )
        },
        {
            src: capabigdash,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    {/* <div className="flex flex-wrap gap-5 mt-3 justify-center">
                        <img className="h-[80px] sm:h-[100px] w-auto rounded" src={bigDash01} alt="" />
                        <img className="h-[70px] sm:h-[100px] w-auto rounded" src={bigDash02} alt="" />
                        <img className="h-[80px] sm:h-[100px] w-auto rounded" src={bigDash03} alt="" />
                    </div>

                    <div className="flex justify-center items-center gap-4 mt-3">
                        <img className="h-[20px] sm:h-[30px] mt-2" src={bigDashFont} alt="Fonte Big Dash" />
                        <img className="h-[40px] sm:h-[50px] mt-2" src={bigDashPallete} alt="Paleta Big Dash" />
                    </div> */}

                    <p className="mt-3 text-center text-sm sm:text-base">
                        A <strong>Big Dash</strong> é uma empresa especializada em <strong>big data</strong> e <strong>dashboards interativos</strong>, oferecendo soluções inovadoras para <strong>análise avançada de dados</strong>. Com um visual impactante nas cores <strong>roxo</strong> e <strong>azul</strong> e utilizando a sofisticada fonte <strong>Library 3 AM Regular</strong>, a identidade visual traz uma estética moderna e profissional, garantindo que cada visualização de dados seja clara e eficiente. Big Dash transforma a complexidade dos dados em insights estratégicos de maneira intuitiva e acessível, aprimorando a experiência analítica para empresas que buscam tomar decisões informadas.
                    </p>

                    {/* <div className="flex flex-wrap gap-3 mt-3 items-center justify-center">
                        <img className="hidden sm:block sm:h-[200px] w-auto rounded" src={bigDashFachada} alt="Fachada Big Dash" />
                    </div> */}
                </div>
            )
        },
        {
            src: capaclarifotos,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    {/* <div className="flex flex-wrap gap-3 mt-3 justify-center">
                        <img className="h-[60px] sm:h-[80px] w-auto rounded" src={clariLogo01} alt="" />
                        <img className="h-[60px] sm:h-[80px] w-auto rounded" src={clariLogo02} alt="" />
                        <img className="h-[60px] sm:h-[80px] w-auto rounded" src={clariLogo03} alt="" />
                    </div> */}

                    <p className="mt-3 text-center text-xs sm:text-sm md:text-base px-4 sm:px-0">
                        A <strong>Clarifotos</strong> é uma fotógrafa independente que realiza <strong>ensaios profissionais</strong> com um estilo único e personalizado. Seu logotipo combina ícones de <strong>câmera</strong> e <strong>sorriso</strong>, simbolizando técnica e emoção. A identidade visual destaca tons de <strong>laranja</strong> vibrante e usa a fonte <strong>Fraunces 9pt SuperSoft</strong>, trazendo uma estética acolhedora e sofisticada que reflete o toque caloroso e profissional da marca.
                    </p>

                    {/* <div className="mt-3 flex justify-center">
                        <img className="h-[200px] sm:h-[320px] w-auto rounded" src={clariMockup} alt="Mockup Clarifotos" />
                    </div> */}
                </div>
            )
        },
        {
            src: capagabicheliga,
            content: (
                <p className="text-center text-sm sm:text-base">
                    A <strong>Gabrielle Cheliga</strong> é uma advogada que se destaca pela sua identidade visual em <strong>azul</strong> e <strong>branco</strong>, utilizando a fonte <strong>Rounded</strong> e <strong>Brogi Free</strong>. Seu logotipo reflete profissionalismo e acessibilidade, sendo uma escolha ideal para um escritório de advocacia contemporâneo.
                </p>
            )
        },
        {
            src: capanevesadvogados,
            content: (
                <p className="text-center text-sm sm:text-base">
                    O escritório <strong>Neves Advogados</strong> adota uma identidade visual com uma fonte <strong>Times Sans Serif</strong> e uma paleta de cores <strong>preta</strong> como principal. Essa escolha transmite seriedade e confiança, essenciais para um serviço jurídico de excelência.
                </p>
            )
        },
        {
            src: capamedbox,
            content: (
                <p className="text-center text-sm sm:text-base">
                    O <strong>MedBox</strong> é uma solução inovadora projetada para ajudar idosos a gerenciar sua medicação. Com um design intuitivo, utiliza a fonte <strong>Quicksand</strong> e apresenta uma paleta de cores <strong>verdes</strong>, promovendo uma sensação de tranquilidade e bem-estar.
                </p>
            )
        },
        {
            src: capadocelu,
            content: (
                <p className="text-center text-sm sm:text-base">
                    O projeto <strong>Docelu</strong> apresenta um logotipo vibrante em <strong>laranja</strong>, incorporando um ícone de <strong>donut</strong> que simboliza doçura e criatividade. A fonte utilizada é <strong>Bahaus 93</strong>, trazendo um toque moderno e divertido à marca.
                </p>
            )
        },
        {
            src: capaabstracao,
            content: (
                <p className="text-center text-sm sm:text-base">
                    A <strong>Revista Abstração</strong> utiliza a fonte <strong>Athena</strong> em sua identidade visual, com uma paleta de cores <strong>pretas</strong> que confere elegância e sofisticação. A revista se propõe a explorar temas contemporâneos de forma inovadora.
                </p>
            )
        },
        {
            src: capatechconnect,
            content: (
                <p className="text-center text-sm sm:text-base">
                    O <strong>Tech Connect</strong> é uma rede social projetada para conectar <strong>designers</strong> e <strong>desenvolvedores</strong>. Utiliza um gradiente de <strong>azul</strong> e <strong>roxo</strong> em sua paleta de cores, com a fonte <strong>Baloo</strong>, criando uma estética moderna e envolvente que promove a colaboração e a criatividade.
                </p>
            )
        }
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
