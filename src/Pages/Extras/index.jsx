import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import iconetrabalho from "../../Assets/iconetrabalho.png";

function Extras() {
    return (
        <div className="h-screen bg-[#2D2D2D] flex flex-col">
            <Header />
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
            <Footer />
        </div>
    );
}

export default Extras;
