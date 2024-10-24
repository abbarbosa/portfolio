import React from "react";
import Header from "../../Components/Header/index";
import { ReactComponent as BannerHeader } from '../../Assets/bannerHeader.svg';
import { ReactComponent as ReactIcon } from '../../Assets/habilidades/react.svg';
import { ReactComponent as Javascript } from '../../Assets/habilidades/javascript.svg';
import { ReactComponent as Html } from '../../Assets/habilidades/html.svg';
import { ReactComponent as Css } from '../../Assets/habilidades/css.svg';
import { ReactComponent as CSharp } from '../../Assets/habilidades/c.svg';
import { ReactComponent as Sql } from '../../Assets/habilidades/sql.svg';

import { ReactComponent as AfterEffects } from '../../Assets/habilidades/aftereffects.svg';
import { ReactComponent as Ilustrator } from '../../Assets/habilidades/illustrator.svg';
import { ReactComponent as Premiere } from '../../Assets/habilidades/premiere.svg';
import { ReactComponent as Photoshop } from '../../Assets/habilidades/photoshop.svg';
import { ReactComponent as Figma } from '../../Assets/habilidades/figma.svg';
import { ReactComponent as VSCode } from '../../Assets/habilidades/visualstudio.svg';
import { Contact } from "../../Components/Contact";
import { Carousel } from "../../Components/Carousel";

function AboutMe() {
    return (
        <div className="bg-[#2d2d2d]">
            {/* Header */}
            <Header />

            {/* Introdução */}
            <div className="text-center mt-10 px-4">
                <h1 className="text-white text-[36px] leading-none">
                    prazer, <br />
                    <strong className="text-white">annabia</strong>
                </h1>

                <div className="flex items-center justify-center mt-4">
                    <p className="text-white text-center text-[16px] max-w-[600px]">
                        Olá! Me chamo Anna Beatriz (mas pode me chamar de Annabia), <br />
                        uma <strong className="text-white">estudante entusiasta</strong> de design, multimídia e desenvolvimento de sistemas. <br />
                        Minha jornada acadêmica é uma busca incessante por <strong className="text-white">criatividade e inovação</strong>, <br />
                        <strong className="text-white">explorando as interseções</strong> entre design e tecnologia. Este site é uma vitrine do meu trabalho e minha<br />
                        jornada como <strong className="text-white">estudante e criadora</strong>. Obrigada por fazer parte dela.
                    </p>
                </div>
            </div>

            {/* Tecnologias e Ferramentas */}
            <h1 className="text-white text-[30px] text-center mt-10 mb-4">minhas tecnologias e ferramentas</h1>

            <div className="flex items-center justify-center gap-6 flex-wrap mt-4 mb-10 px-4">
                <AfterEffects className="h-[80px] mt-[30px]" />
                <Ilustrator className="h-[80px] mt-[30px]" />
                <Premiere className="h-[80px] mt-[30px]" />
                <Photoshop className="h-[80px] mt-[30px]" />
                <Figma className="h-[80px] mt-[30px]" />
                <VSCode className="h-[80px] mt-[30px]" />
                <Html className="h-[80px] mt-[30px]" />
                <Css className="h-[80px] mt-[30px]" />
                <Javascript className="h-[80px] mt-[30px]" />
                <ReactIcon className="h-[80px] mt-[30px]" />
                <CSharp className="h-[80px] mt-[30px]" />
                <Sql className="h-[80px] mt-[30px]" />
            </div>

            {/* Histórico */}
            <h1 className="text-white text-[30px] text-center mt-10 mb-4">histórico</h1>
            <div className="mt-10">
                <Carousel />
            </div>

            {/* Contato */}
            <h1 className="text-white text-[30px] text-center mt-10 mb-4">contato</h1>
            <div className="mt-6 px-4">
                <Contact />
            </div>

            {/* Banner */}
            <div className="w-full mt-10">
                <BannerHeader className="w-full" />
            </div>
        </div>
    );
}

export default AboutMe;
