import React, { useEffect, useRef, useState } from "react";
import hackathon from "../../Assets/carrossel/hackathon.png";
import palestra from "../../Assets/carrossel/palestra.png";
import apresentacao from "../../Assets/carrossel/apresentação.png";
import adobe from "../../Assets/carrossel/adobe.png";
import azure from "../../Assets/carrossel/azure.png";
import { motion } from "framer-motion";

export const Carousel = () => {
    const images = [
        { src: hackathon, title: "Participação em Hackathon" },
        { src: azure, title: "Certificada em Azure AI-900" },
        { src: palestra, title: "Palestra sobre empregabilidade" },
        { src: adobe, title: "Certificada Adobe Illustrator" },
        { src: apresentacao, title: "Apresentação do aplicativo Voltair" },
    ];
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, []);

    return (
        <motion.div
            ref={carousel}
            className="w-[100%] m-0 auto min-h-[100vh] flex items-center cursor-grab overflow-hidden"
            whileTap={{ cursor: "grabbing" }}
        >
            <motion.div
                className="flex"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
            >
                {images.map((image, index) => (
                    <motion.div
                        className="min-h-[200px] min-w-[400px] p-[14px] relative group" // Adiciona o 'relative' e 'group' para o hover
                        key={index}
                    >
                        {/* Imagem */}
                        <img
                            className="w-[100%] h-[100%] pointer-events-none transition-opacity duration-300 group-hover:opacity-50" // Diminui a opacidade no hover
                            src={image.src}
                            alt=""
                        />
                        {/* Texto que aparece no hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-2xl font-bold">
                                {image.title}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};
