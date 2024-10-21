import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/logo.svg';

function Header() {
    const navigate = useNavigate();
    return (
        <header className="flex justify-center gap-8 items-center text-center bg-[#EBE6E0] border-white/20 rounded-lg shadow-lg p-8 rounded-b-[50px]">
            <button className="flex items-center justify-center " onClick={() => navigate("/identidade-visual")}>
                <Logo className="h-[100px]" />
            </button>


            <nav className="flex gap-4 text-[20px]">
                <Link to="/sobre-mim" className="hover:font-bold">sobre mim</Link>
                <Link to="/identidade-visual" className="hover:font-bold">identidades visuais</Link>
                <Link to="/social-media" className="hover:font-bold">social media</Link>
                <Link to="/desenvolvimento" className="hover:font-bold">desenvolvimento</Link>
                <Link to="/extras" className="hover:font-bold">extras</Link>
            </nav>

        </header>
    );
}

export default Header;
