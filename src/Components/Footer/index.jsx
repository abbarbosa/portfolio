import logo from "../../Assets/logo.png";
import { ReactComponent as Instagram } from '../../Assets/instagram.svg';
import { ReactComponent as Linkedin } from '../../Assets/linkedin.svg';
import { ReactComponent as Behance } from '../../Assets/behance.svg';
import { ReactComponent as Github } from '../../Assets/github.svg';

function Footer() {
    return (
        <div className="w-full h-60 bg-[#2D2D2D] flex flex-col justify-center items-center mt-[100px]">
            <hr className="bg-complementary-white w-full" />
            <footer className="flex flex-col sm:flex-row items-center justify-center gap-[5%] h-full mt-[5%]">
                <img src={logo} alt="Logo" className="h-[100px] mb-4 sm:mb-0" />
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 h-full z-10">
                    <div className="flex space-x-4">
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/annabia.design/">
                            <Instagram className="h-10 w-10 p-[1px] rounded-[10px] transform hover:scale-110 transition duration-300" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/annabiab/">
                            <Linkedin className="h-10 w-10 p-[1px] rounded-[10px] transform hover:scale-110 transition duration-300" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.behance.net/annabiab_">
                            <Behance className="h-10 w-10 p-[1px] rounded-[10px] transform hover:scale-110 transition duration-300" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/abbarbosa">
                            <Github className="h-10 w-10 p-[1px] rounded-[10px] transform hover:scale-110 transition duration-300" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>

    );
}

export default Footer;
