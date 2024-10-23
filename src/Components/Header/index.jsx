import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Função para abrir e fechar o modal
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex justify-between items-center p-4 bg-[#EBE6E0] border-white/20 rounded-lg shadow-lg">
            {/* Logo */}
            <button className="flex items-center justify-center" onClick={() => navigate("/identidade-visual")}>
                <Logo className="h-[80px] md:h-[100px]" />
            </button>

            {/* Ícone de hambúrguer para telas menores */}
            <button onClick={toggleMenu} className="md:hidden">
                <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>

            {/* Menu de navegação visível apenas em telas grandes */}
            <nav className="hidden md:flex gap-4 text-[20px]">
                <Link to="/sobre-mim" className="hover:font-bold">sobre mim</Link>
                <Link to="/identidade-visual" className="hover:font-bold">identidades visuais</Link>
                <Link to="/social-media" className="hover:font-bold">social media</Link>
                <Link to="/desenvolvimento" className="hover:font-bold">desenvolvimento</Link>
                <Link to="/extras" className="hover:font-bold">extras</Link>
            </nav>

            {/* Modal do menu para telas pequenas */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50">
                    {/* Fundo semi-transparente */}
                    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>

                    {/* Menu lateral direita */}
                    <div className="fixed right-0 top-0 h-full bg-white p-6 shadow-lg w-[75%] max-w-[300px] transition-transform duration-300 transform translate-x-0">
                        {/* Ícone de fechar dentro do modal */}
                        <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>

                        {/* Links do menu */}
                        <nav className="flex flex-col gap-4 mt-10 text-[18px] text-center">
                            <Link to="/sobre-mim" className="hover:font-bold" onClick={toggleMenu}>sobre mim</Link>
                            <Link to="/identidade-visual" className="hover:font-bold" onClick={toggleMenu}>identidades visuais</Link>
                            <Link to="/social-media" className="hover:font-bold" onClick={toggleMenu}>social media</Link>
                            <Link to="/desenvolvimento" className="hover:font-bold" onClick={toggleMenu}>desenvolvimento</Link>
                            <Link to="/extras" className="hover:font-bold" onClick={toggleMenu}>extras</Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
