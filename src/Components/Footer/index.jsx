import logo from "../../Assets/logo.png";
import { ReactComponent as Instagram } from '../../Assets/instagram.svg';
import { ReactComponent as Linkedin } from '../../Assets/linkedin.svg';
import { ReactComponent as Behance } from '../../Assets/behance.svg';
import { ReactComponent as Github } from '../../Assets/github.svg';

function Footer() {
    return (
        <div className="w-full h-60 bg-[#2D2D2D] flex flex-col justify-center items-center mt-10">
            <footer className="flex flex-col sm:flex-row items-center justify-center gap-5 h-full">
                <img src={logo} alt="Logo" className="h-[100px] mb-4 sm:mb-0" /> {/* Margem inferior em telas pequenas */}

                <div className="flex space-x-4">
                    <a target="_blank" href="https://www.instagram.com/annabia.design/"><Instagram className="h-10" /></a>

                    <a target="_blank" href="https://www.linkedin.com/in/annabiab/"><Linkedin className="h-10" /></a>

                    <a target="_blank" href="https://www.behance.net/annabiab_"><Behance className="h-10" /> </a>

                    <a target="_blank" href="https://github.com/abbarbosa"><Github className="h-10" /></a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
