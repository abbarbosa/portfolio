import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import porta from "../../Assets/porta.png";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="bg-[#2D2D2D] min-h-screen flex flex-col">
            <Header />
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-10 h-auto md:h-[400px] px-4 md:px-0">
                <img className="h-[200px] md:h-[300px] w-auto" src={porta} alt="" />

                <div className="flex flex-col items-center justify-center text-center mt-5 md:mt-0">
                    <h1 className="text-white text-[28px] md:text-[36px] leading-none">
                        <strong>Opss!</strong>
                    </h1>
                    <h2 className="text-white text-[20px] md:text-[24px] leading-none mt-[5px]">a página <br /> não foi encontrada</h2>

                    <p className="text-white text-[14px] md:text-[16px] leading-none mt-5">
                        voltar ao
                        <Link to="/sobre-mim" className="hover:font-bold ml-1 underline">
                            início
                        </Link>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NotFound;
