import logo from "../../Assets/logo.png";
import annabia from "../../Assets/Home/logoannabia.png"
import contact from "../../Assets/Home/contato.png"
import projetos from "../../Assets/Home/projetos.png"

import { ReactComponent as Instagram } from '../../Assets/instagram.svg';
import { ReactComponent as Linkedin } from '../../Assets/linkedin.svg';
import { ReactComponent as Behance } from '../../Assets/behance.svg';
import { ReactComponent as Github } from '../../Assets/github.svg';

export const Home = () => {
    return (
        <div className="bg-complementary-black h-[100%] flex flex-col gap-[30px] ">

            <div className="flex items-center justify-center mt-[50px]">
                <img className="h-[80px] md:h-[100px] " src={logo} alt="" />
            </div>

            <div className="flex items-center justify-center">
                <a
                    href="https://annabiadesign.vercel.app/"
                    className="h-[200px] relative flex items-end justify-center group"
                >
                    <img
                        src={annabia}
                        className="w-[200px] rounded-[30px] transform group-hover:scale-110 transition duration-300"
                        alt=""
                    />
                    <span className="absolute text-complementary-white font-bold mb-[20px]">sobre mim</span>
                </a>
            </div>

            <div className="flex items-center justify-center">
                <a
                    href="https://annabiadesign.vercel.app/identidade-visual"
                    className="h-[200px] relative flex items-end justify-center group"
                >
                    <img
                        src={projetos}
                        className="w-[200px] rounded-[30px] transform group-hover:scale-110 transition duration-300"
                        alt=""
                    />
                    <span className="absolute text-complementary-white font-bold mb-[20px]">Conheça meu trabalho</span>
                </a>
            </div>

            <div className="flex items-center justify-center">
                <a
                    href="https://wa.me/5511930779714?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20or%C3%A7amento!" target="blank"
                    className="h-[200px] relative flex items-end justify-center group"
                >
                    <img
                        src={contact}
                        className="w-[200px] rounded-[30px] transform group-hover:scale-110 transition duration-300"
                        alt=""
                    />
                    <span className="absolute text-complementary-white font-bold mb-[20px]">Entre em contato!</span>
                </a>
            </div>

            <div className="flex items-center justify-start flex-col gap-[15px]">
                <h1 className="text-complementary-white font-bold text-[24px] text-left">Minhas redes</h1>
                <div className="flex flex-col gap-[15px]">
                    <div className="flex items-center justify-start gap-[5px]">
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/annabia.design/">
                            <Instagram className="h-[45px] w-[45px] p-[1px] rounded-[10px] transform hover:scale-110 transition duration-300" />
                        </a>
                        <h2 className="text-complementary-white text-left">annabia.design</h2>
                    </div>
                    <div className="flex items-center justify-start gap-[5px]">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/annabiab/">
                            <Linkedin className="h-[45px] w-[45px] p-[1px] rounded-[10px] transform hover:scale-110 transition duration-300" />
                        </a>
                        <h2 className="text-complementary-white text-left">annabiab</h2>
                    </div>
                    <div className="flex items-center justify-start gap-[5px]">
                        <a target="_blank" rel="noreferrer" href="https://www.behance.net/annabiab_">
                            <Behance className="h-[45px] w-[45px] p-[1px] rounded-[10px] transform hover:scale-110 transition duration-300" />
                        </a>
                        <h2 className="text-complementary-white text-left">annabiab_</h2>
                    </div>
                    <div className="flex items-center justify-start gap-[5px]">
                        <a target="_blank" rel="noreferrer" href="https://github.com/abbarbosa">
                            <Github className="h-[45px] w-[45px] p-[1px] rounded-[10px] transform hover:scale-110 transition duration-300" />
                        </a>
                        <h2 className="text-complementary-white text-left">abbarbosa</h2>
                    </div>
                </div>
            </div>




        </div>
    )
}