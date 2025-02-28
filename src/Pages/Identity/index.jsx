import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Modal from "../../Components/Modal";
import capabigdash from "../../Assets/capas/capabigdash.png";
import capamedbox from "../../Assets/capas/capamedbox.png";
import capaabstracao from "../../Assets/capas/capaabstracao.png";
import capatechconnect from "../../Assets/capas/capatechconnect.png";
import capagabicheliga from "../../Assets/capas/capagabicheliga.png";
import capadocelu from "../../Assets/capas/capadocelu.png";
import spiralCapa from "../../Assets/capas/spiralCapa.png";
import cloudCapa from "../../Assets/capas/cloudCapa.png";
import chocolatesCapa from "../../Assets/capas/chocolatesAndradeCapa.png";
import voltairCapa from "../../Assets/capas/voltairCapa.png";
import realCapa from "../../Assets/capas/realGazCapa.png";
import patinhasCapa from "../../Assets/capas/patinhasCapa.png";
import iconetrabalho from "../../Assets/iconetrabalho.png"
import organizaAiCapa from "../../Assets/capas/capaOrganizaAi.png"
import capaDraLilian from "../../Assets/capas/capaLilianBarros.png"
import capaclarifotos from "../../Assets/capas/capaclarifotos.png"
import sos from "../../Assets/capas/sosCapa.png"

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
            src: capabigdash,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">BigDash</h2>
                    <p className="mt-6 text-center text-sm sm:text-base">
                        A <strong>Big Dash</strong> é uma empresa especializada em <strong>big data</strong> e <strong>dashboards interativos</strong>, oferecendo soluções inovadoras para <strong>análise avançada de dados</strong>. Com um visual impactante nas cores <strong>roxo</strong> e <strong>azul</strong> e utilizando a sofisticada fonte <strong>Library 3 AM Regular</strong>, a identidade visual traz uma estética moderna e profissional, garantindo que cada visualização de dados seja clara e eficiente. Big Dash transforma a complexidade dos dados em insights estratégicos de maneira intuitiva e acessível, aprimorando a experiência analítica para empresas que buscam tomar decisões informadas.
                    </p>

                </div>
            )
        },

        {
            src: capagabicheliga,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto" >
                    <h2 className="text-xl font-bold mb-2">Gabrielle Cheliga</h2>
                    <p className="text-center text-sm sm:text-base mt-6">
                        A <strong>Gabrielle Cheliga</strong> é uma advogada que se destaca pela sua identidade visual em <strong>azul</strong> e <strong>branco</strong>, utilizando a fonte <strong>Rounded</strong> e <strong>Brogi Free</strong>. Seu logotipo reflete profissionalismo e acessibilidade, sendo uma escolha ideal para um escritório de advocacia contemporâneo.
                    </p>
                </div>
            )
        },
        {
            src: capamedbox,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto" >
                    <h2 className="text-xl font-bold mb-2">MedBox</h2>
                    <p className="text-center text-sm sm:text-base mt-6">
                        O <strong>MedBox</strong> é uma solução inovadora projetada para ajudar idosos a gerenciar sua medicação. Com um design intuitivo, utiliza a fonte <strong>Quicksand</strong> e apresenta uma paleta de cores <strong>verdes</strong>, promovendo uma sensação de tranquilidade e bem-estar.
                    </p>

                </div>
            )
        },
        {
            src: capaabstracao,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">Revista Abstração</h2>
                    <p className="text-center text-sm sm:text-base mt-6">
                        A <strong>Revista Abstração</strong> utiliza a fonte <strong>Athena</strong> em sua identidade visual, com uma paleta de cores <strong>pretas</strong> que confere elegância e sofisticação. A revista se propõe a explorar temas contemporâneos de forma inovadora.
                    </p>

                </div>
            )
        },

        {
            src: voltairCapa,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">Voltair</h2>
                    <p className="text-center text-sm sm:text-base mt-6">
                        <strong>Identidade Visual</strong> desenvolvida especialmente para um aplicativo automotivo. A proposta visual destaca o <strong>laranja</strong> vibrante, que transmite energia e dinamismo, combinado com o <strong>preto</strong>, que agrega sofisticação e modernidade. As tipografias escolhidas, <strong>Sedan</strong> e <strong>Poppins</strong>, reforçam a elegância e a legibilidade do design, criando uma comunicação visual impactante e funcional para os usuários.
                    </p>

                </div>
            )
        },
        {
            src: capatechconnect,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">Tech Connect</h2>
                    <p className="text-center text-sm sm:text-base mt-6">
                        O <strong>Tech Connect</strong> é uma rede social projetada para conectar <strong>designers</strong> e <strong>desenvolvedores</strong>. Utiliza um gradiente de <strong>azul</strong> e <strong>roxo</strong> em sua paleta de cores, com a fonte <strong>Baloo</strong>, criando uma estética moderna e envolvente que promove a colaboração e a criatividade.
                    </p>
                </div>

            )
        },

        {
            src: spiralCapa,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">Spiral Tech</h2>
                    <p className="text-center text-sm sm:text-base mt-6">
                        A <strong>Spiral Tech</strong> é uma identidade visual para uma <strong>empresa de tecnologia</strong> que usa como tipografia a font <strong>funnel display</strong> e como cores principais utiliza o <strong>azul</strong> e o <strong>roxo</strong>.
                    </p>
                </div>
            )
        },

        {
            src: capadocelu,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">Docelu</h2>
                    <p className="text-center text-sm sm:text-base mt-6">
                        O projeto <strong>Docelu</strong> apresenta um logotipo vibrante em <strong>laranja</strong>, incorporando um ícone de <strong>donut</strong> que simboliza doçura e criatividade. A fonte utilizada é <strong>Bahaus 93</strong>, trazendo um toque moderno e divertido à marca.
                    </p>
                </div>

            )
        },
        {
            src: chocolatesCapa,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">Chocolates Andrade</h2>
                    <p className="text-center text-sm sm:text-base mt-6">
                        Logotipo feito utilizando a tipografia <strong>Nixie One</strong> e a <strong>League Spartan Bold</strong> e segue uma <strong>paleta de cores</strong> bem diversa com <strong>tons</strong>
                        de marrom, amarelo, verde, rosa e cinza.
                    </p>
                </div>
            )
        },

        {
            src: realCapa,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">Real Gaz</h2>
                    <p className="text-center text-sm sm:text-base mt-6">
                        <strong> brasão</strong> desenvolvido para a base da empresa situada em Araucária-PR, a <strong>identidade</strong> segue o padrão do logo original então suas cores são <strong>azul, vermnelho</strong> e <strong>branco</strong>, além de sua tipografia sendo a fonte <strong>futura</strong>.
                    </p>
                </div>
            )
        },

        {
            src: cloudCapa,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">Cloud Core</h2>
                    <p className="text-center text-sm sm:text-base mt-6">
                        <strong>logo</strong> feito para uma <strong>plataforma</strong> de gerenciamento de documentos. A identidade usa como cores <strong>azul</strong> e <strong>branco</strong> além da fonte <strong>poppins</strong>.
                    </p>
                </div>
            )
        },

        {
            src: patinhasCapa,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">Patinhas</h2>
                    <p className="text-center text-sm sm:text-base mt-6">
                        projeto desenvolvido para uma ong com foco em cuidados com animais. A <strong>identidade</strong> utiliza a fonte <strong>Times New Roman</strong> e as cores <strong>laranja</strong> e <strong>preto</strong>.
                    </p>
                </div>
            )
        },


        {
            src: organizaAiCapa,
            content: (
                <div>
                    <h2 className="text-xl font-bold mb-2"></h2>
                    <div className="h-[500px] bg-[#2D2D2D] flex flex-col">
                        <div className="flex flex-col items-center justify-center flex-grow mt-5 gap-5 px-4">
                            <img src={iconetrabalho} className="h-[100px] md:h-[150px] lg:h-[200px]" alt="Ícone de uma pessoa trabalhando" />
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
                </div>
            )
        },

        {
            src: capaDraLilian,
            content: (
                <div>
                    <h2 className="text-xl font-bold mb-2"></h2>
                    <div className="h-[500px] bg-[#2D2D2D] flex flex-col">
                        <div className="flex flex-col items-center justify-center flex-grow mt-5 gap-5 px-4">
                            <img src={iconetrabalho} className="h-[100px] md:h-[150px] lg:h-[200px]" alt="Ícone de uma pessoa trabalhando" />
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
                </div>
            )
        },
        {
            src: capaclarifotos,
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">Clarifotos</h2>
                    <p className="mt-6 text-center text-xs sm:text-sm md:text-base px-4 sm:px-0">
                        A <strong>Clarifotos</strong> é uma fotógrafa independente que realiza <strong>ensaios profissionais</strong> com um estilo único e personalizado. Seu logotipo combina ícones de <strong>câmera</strong> e <strong>sorriso</strong>, simbolizando técnica e emoção. A identidade visual destaca tons de <strong>laranja</strong> vibrante e usa a fonte <strong>Fraunces 9pt SuperSoft</strong>, trazendo uma estética acolhedora e sofisticada que reflete o toque caloroso e profissional da marca.
                    </p>
                </div>
            )
        },
        {
            src: sos,
            content: (
                <div>
                    <h2 className="text-xl font-bold mb-2"></h2>
                    <div className="h-[500px] bg-[#2D2D2D] flex flex-col">
                        <div className="flex flex-col items-center justify-center flex-grow mt-5 gap-5 px-4">
                            <img src={iconetrabalho} className="h-[100px] md:h-[150px] lg:h-[200px]" alt="Ícone de uma pessoa trabalhando" />
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
                </div>
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
