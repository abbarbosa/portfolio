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
            <Header />

            <h1 className="text-white text-[36px] leading-none mt-10">prazer, <br /> <strong className="text-white">annabia</strong></h1>

            <div className="flex items-center justify-center mt-4">
                <p className="text-white text-center text-[16px]">
                    Olá! Me chamo Anna Beatriz (mas pode me chamar de Annabia) <br />
                    uma <strong className="text-white">estudante entusiasta</strong> de design, multimídia e desenvolvimento de sistemas. <br />
                    Minha jornada acadêmica é uma busca incessante por <strong className="text-white"> criatividade e inovação</strong>, <br />
                    <strong className="text-white"> explorando as interseções </strong> entre design e tecnologia. Este site é uma vitrine do meu trabalho e minha
                    <br /> jornada como <strong className="text-white"> estudante e criadora</strong>. Obrigada por fazer parte dela.
                </p>
            </div>

            <h1 className="text-white text-[30px] leading-none mt-10">minhas tecnologias e ferramentas</h1>

            <div className="flex items-center justify-center gap-3 mt-5 mb-10">
                <AfterEffects className="h-[80px]" />
                <Ilustrator className="h-[80px]" />
                <Premiere className="h-[80px]" />
                <Photoshop className="h-[80px]" />
                <Figma className="h-[80px]" />
                <VSCode className="h-[80px]" />
            </div>

            <div className="flex items-center justify-center gap-3 mt-5 mb-10">
                <Html className="h-[80px]" />
                <Css className="h-[80px]" />
                <Javascript className="h-[80px]" />
                <ReactIcon className="h-[80px]" />
                <CSharp className="h-[80px]" />
                <Sql className="h-[80px]" />
            </div>

            <h1 className="text-white text-[30px] leading-none mt-10">histórico</h1>

            <Carousel/>

            <h1 className="text-white text-[30px] leading-none mt-10">contato</h1>

            <Contact/>

            <BannerHeader className="w-full mt-[30px]" />
        </div>
    );
}

export default AboutMe;
