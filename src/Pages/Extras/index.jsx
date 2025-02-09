import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Modal from "../../Components/Modal";
import { VideoComponent, SinapseVideo } from "../../Components/Video/video";

import capaEnsaio from "../../Assets/Extras/capaEnsaio.png";
import capaRevista from "../../Assets/Extras/capaRevista.png";
import capaSinapse from "../../Assets/Extras/capaSinapse.png";
import SinapseInstitucional from "../../Assets/capas/SinapseInstitucional.png";
import PodPlus from "../../Assets/Extras/PodPlus.png"
import PlusDesignCapa from "../../Assets/Extras/CapaEpisodio.png"
import ImpressoLilian from "../../Assets/Extras/capaImpressoLilian.png"
import ImpressoViRico from "../../Assets/Extras/capaViRico.png"
import iconetrabalho from "../../Assets/iconetrabalho.png"

function Extras() {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [filter, setFilter] = useState("all");

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
            label: "Ensaio fotográfico de acessórios",
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">Ensaio para jóias</h2>
                    <p>
                        O ensaio fotográfico de joias foi cuidadosamente desenvolvido para destacar a beleza e a sofisticação de peças exclusivas, revelando não apenas o brilho e o design, mas também a história por trás de cada criação. Cada imagem captura o reflexo da luz nas superfícies polidas e detalhadas, criando uma dança de sombras e brilhos que transmite a essência do luxo e da elegância. As joias, meticulosamente escolhidas, foram exibidas em combinações que exploram o contraste entre o moderno e o clássico, com um foco especial nas texturas e nos materiais preciosos utilizados.
                    </p>

                    <a target="blank" href="https://drive.google.com/drive/folders/15HQNEUTt2TOdgO1WzZemfF4wO7z5zT5G?usp=sharing">
                        <button className="mt-[30px] font-medium hover:underline">
                            Clique para ver mais ...
                        </button>
                    </a>
                </div>
            ),
        },
        {
            src: capaRevista,
            label: "Ensaio fotográfico para uma edição de revista",
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">Ensaio para revista</h2>
                    <p>O ensaio foi desenvolvido especialmente para a capa de uma revista de grande destaque, com o objetivo de capturar e traduzir de forma autêntica o cotidiano dinâmico e envolvente dos influenciadores digitais. A proposta principal era mergulhar no universo desses criadores de conteúdo, explorando não apenas os momentos glamourosos de suas rotinas, mas também os bastidores, os desafios e as histórias que os tornam tão conectados com seus públicos. Cada clique foi pensado para evidenciar a autenticidade, a criatividade e o impacto que essas personalidades exercem no cenário digital e na cultura contemporânea.</p>
                    <a target="blank" href="https://drive.google.com/drive/folders/1lUVMLb4PtV8UZT8Hku_2mWn_nKMtJnMS?usp=sharing">
                        <button className="mt-[30px] font-medium hover:underline">
                            Clique para ver mais ...
                        </button>
                    </a>
                </div>
            ),
        },
    ];

    const animations = [
        {
            src: capaSinapse,
            label: "Animações 2d de uma identidade visual",
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">Animações Sinapse</h2>
                    <SinapseVideo />
                </div>
            ),
        },
    ];

    const podcast = [
        {
            src: PodPlus,

            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">Plus Design Cast</h2>
                    <img src={PlusDesignCapa} alt="Foto de duas pessoas sorrindo para a câmera com um fundo do studio onde foi gravado o episódio" />
                    <a target="blank" href="https://drive.google.com/file/d/1cpB5sh7rKl3rn-QWzXeh8MqLNuzSzDQM/view?usp=sharing">
                        <button className="mt-[30px] font-medium hover:underline">
                            Clique para ver mais ...
                        </button>
                    </a>
                </div>
            ),
        },
    ]

    const institutionals = [
        {
            src: SinapseInstitucional,
            label: "Vídeo Institucional para soluções em multimídia",
            content: (
                <div className="flex flex-col items-center p-4 sm:p-6 max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">Video Institucional Sinapse</h2>
                    <VideoComponent />
                </div>
            ),
        },
    ];

    const printed = [
        {
            src: ImpressoLilian,
            label: "Design de impressos para uma dentista",
            content: (
                <div>
                    <h2 className="text-xl font-bold mb-2">Impressos para uma dentista</h2>
                    <div className="h-[500px] bg-[#2D2D2D] flex flex-col">
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
                </div>
            )
        },

        {
            src: ImpressoViRico,
            label: "Design de impressos para uma nail designer",
            content: (
                <div>
                    <h2 className="text-xl font-bold mb-2">Impressos para uma nail designer</h2>
                    <div className="h-[500px] bg-[#2D2D2D] flex flex-col">
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
                </div>
            )
        }
    ]

    const filteredItems = () => {
        if (filter === "all") {
            return [...animations, ...images, ...podcast, ...institutionals, ...printed];
        }
        if (filter === "images") {
            return images;
        }
        if (filter === "animations") {
            return animations;
        }
        if (filter === "institutionals") {
            return institutionals;
        }
        if (filter === "podcast") {
            return podcast;
        }
        if (filter === "printed") {
            return printed;
        }
        return [];
    };

    return (
        <div className="min-h-screen bg-[#2D2D2D] flex flex-col">
            <Header />

            <div className="flex flex-wrap justify-center gap-4 my-4 px-4">
                <button
                    onClick={() => setFilter("all")}
                    className={`px-4 py-2 rounded ${filter === "all" ? "bg-primary-purple text-complementary-white" : "border-gray-300 text-complementary-white"
                        }`}
                >
                    Todos
                </button>
                <button
                    onClick={() => setFilter("animations")}
                    className={`px-4 py-2 rounded ${filter === "animations" ? "bg-primary-purple text-complementary-white" : "border-gray-300 text-complementary-white"
                        }`}
                >
                    Animações
                </button>
                <button
                    onClick={() => setFilter("images")}
                    className={`px-4 py-2 rounded ${filter === "images" ? "bg-primary-purple text-complementary-white" : "border-gray-300 text-complementary-white"
                        }`}
                >
                    Ensaios Fotográficos
                </button>

                <button
                    onClick={() => setFilter("podcast")}
                    className={`px-4 py-2 rounded ${filter === "podcast" ? "bg-primary-purple text-complementary-white" : "border-gray-300 text-complementary-white"
                        }`}
                >
                    PodCast
                </button>
                <button
                    onClick={() => setFilter("institutionals")}
                    className={`px-4 py-2 rounded ${filter === "institutionals" ? "bg-primary-purple text-complementary-white" : "border-gray-300 text-complementary-white"
                        }`}
                >
                    Vídeos Institucionais
                </button>
                <button
                    onClick={() => setFilter("printed")}
                    className={`px-4 py-2 rounded ${filter === "printed" ? "bg-primary-purple text-complementary-white" : "border-gray-300 text-complementary-white"
                        }`}
                >
                    Impressos
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:p-8">
                {filteredItems().map((item, index) => (
                    <div
                        key={index}
                        onClick={() => openModal(item.content)}
                        className="relative h-48 bg-cover bg-center rounded bg-gray-500 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        style={{
                            backgroundImage: `url(${item.src})`,
                        }}
                    >
                        <span className="absolute bottom-2 left-2 text-white text-lg">{item.label}</span>
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
