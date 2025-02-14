import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState } from "react";
import Modal from "../../Components/Modal";

import { ReactComponent as CloudLogo } from "../../Assets/cloudLogo.svg"
import { ReactComponent as TechLogo } from "../../Assets/techLogo.svg"
import { ReactComponent as VoltairLogo } from "../../Assets/voltairLogo.svg"
import { ReactComponent as AtivementsLogo } from "../../Assets/ativementsLogo.svg"
import { ReactComponent as VitalLogo } from "../../Assets/vitalLogo.svg"
import capatechconnect from "../../Assets/DevImages/techMockup.png";
import voltairMockup from "../../Assets/DevImages/voltairMockup.png"
import cloudMockup from "../../Assets/DevImages/CloudMockup.png";
import ativements from "../../Assets/DevImages/Ativements.png"
import vitalHub from "../../Assets/DevImages/VitalHub.png"
import SpiralCapa from "../../Assets/DevImages/spiralCapa.png"
import littleHelp from "../../Assets/DevImages/littleHelp.png"
import ong from "../../Assets/DevImages/ong.png"
import graduacao from "../../Assets/DevImages/cienciadedados.png"
import geto from "../../Assets/DevImages/geto.png"
import girls from "../../Assets/DevImages/girlsOnTech.png"
import iconetrabalho from "../../Assets/iconetrabalho.png"

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
                <div className="flex justify-center items-center p-4 sm:p-6 max-h-[500px]">

                    <div>
                        <TechLogo className="h-[100px] w-[100px] rounded-full border border-complementary-black" />
                        <h2 className="text-xl font-bold mt[30px]">TechConnect</h2>
                    </div>

                    <div className="flex justify-between items-center gap-[115px]">

                        <div className="flex flex-col items-start justify-center gap-[15px] font-semibold text-[16px] p-[50px]">
                            <div>
                                <p className="text-start">O TechConnect é uma rede social, mas diferente de outras essa tem um foco para designers e desenvolvedores, por lá eles podem curtir e compartilhar publicações sobre seus projetos</p>
                            </div>
                            <div className="flex ">
                                <a href="https://www.canva.com/design/DAGTLC6x21U/eHsDsr66w8DbfVpSJtS5kw/view?utm_content=DAGTLC6x21U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf4870c87f4" target="blank">
                                    <button className="rounded-[20px] p-[10px] hover:bg-[#e8e5e5]">Veja como funciona</button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        {
            src: voltairMockup,
            content: (
                <div className="flex justify-center items-center p-4 sm:p-6 max-h-[500px]">

                    <div>
                        <VoltairLogo className="h-[100px] w-[100px] rounded-full" />
                        <h2 className="text-xl font-bold mt[30px]">Voltair</h2>
                    </div>

                    <div className="flex justify-between items-center gap-[115px]">

                        <div className="flex flex-col items-start justify-center gap-[15px] font-semibold text-[16px] p-[50px]">
                            <div>
                                <p className="text-start">Voltair foi desenvolvido como um projeto mobile para ajudar donos de carros elétricos a achar pontos de recarga. </p>
                            </div>
                            <div className="flex ">
                                <a href="https://prezi.com/view/lPrNgS8L2pqgxfm5kjWS/" target="blank">
                                    <button className="rounded-[20px] p-[10px] hover:bg-[#e8e5e5]">Veja a apresentação</button>
                                </a>

                                <a href="https://github.com/VoltAir-Code" target="blank">
                                    <button className="rounded-[20px] p-[10px] hover:bg-[#e8e5e5]">Veja o repositório</button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        {
            src: ativements,
            content: (
                <div className="flex justify-center items-center p-4 sm:p-6 max-h-[500px]">

                    <div>
                        <AtivementsLogo className="h-[100px] w-[100px] rounded-full" />
                        <h2 className="text-xl font-bold mt[30px]">Ativements</h2>
                    </div>

                    <div className="flex justify-between items-center gap-[115px]">

                        <div className="flex flex-col items-start justify-center gap-[15px] font-semibold text-[16px] p-[50px]">
                            <div>
                                <p className="text-start">Ativements é um sistema desenvolvido para gerenciamento de ativos, ou seja, sua função é organizar cada objetivo (seja livro, eletrônico ou etc.) em seu determinado local. </p>
                            </div>
                            <div className="flex ">


                                <a href="https://github.com/abbarbosa/ativements-project" target="blank">
                                    <button className="rounded-[20px] p-[10px] hover:bg-[#e8e5e5]">Veja o repositório</button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        {
            src: vitalHub,
            content: (
                <div className="flex justify-center items-center p-4 sm:p-6 max-h-[500px]">

                    <div>
                        <VitalLogo className="h-[100px] w-[100px] rounded-full border border-complementary-black" />
                        <h2 className="text-xl font-bold mt[30px]">VitalHub</h2>
                    </div>

                    <div className="flex justify-between items-center gap-[115px]">

                        <div className="flex flex-col items-start justify-center gap-[15px] font-semibold text-[16px] p-[50px]">
                            <div>
                                <p className="text-start">App desenvolvido para a função de ligar médicos e pacientes para agendamento de consultas e tambbém gerenciamento das mesmas.</p>
                            </div>
                            <div className="flex ">

                                <a href="https://prezi.com/view/4uDm52GhCFq785m57Rqq/" target="blank">
                                    <button className="rounded-[20px] p-[10px] hover:bg-[#e8e5e5]">Veja a apresentação</button>
                                </a>
                                <a href="https://github.com/abbarbosa/VitalHub-project-group" target="blank">
                                    <button className="rounded-[20px] p-[10px] hover:bg-[#e8e5e5]">Veja o repositório</button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        {
            src: SpiralCapa,
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
            src: littleHelp,
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
            src: ong,
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
            src: graduacao,
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
            src: geto,
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
            src: girls,
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
        }

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