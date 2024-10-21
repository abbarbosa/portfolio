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
    const [currentIndex, setCurrentIndex] = useState(0); // Estado para o índice atual
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, []);

    const handleDragEnd = (event, info) => {
        const offset = info.offset.x;
        const newIndex = Math.round((currentIndex * -400 + offset) / -400);
        setCurrentIndex(Math.min(Math.max(newIndex, 0), images.length - 1)); // Atualiza o índice
    };

    return (
        <div className="relative"> {/* Contêiner principal para centralizar as bolinhas */}
            <motion.div
                ref={carousel}
                className="w-[1200px] mx-auto min-h-[100vh] flex items-center justify-center cursor-grab overflow-hidden"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    className="flex"
                    drag="x"
                    onDragEnd={handleDragEnd} // Adiciona função de drag-end
                    dragConstraints={{ right: 0, left: -width }}
                >
                    {images.map((image, index) => (
                        <motion.div
                            className="min-h-[200px] min-w-[400px] p-[14px] relative group"
                            key={index}
                        >
                            {/* Imagem */}
                            <img
                                className="w-[100%] h-[100%] pointer-events-none transition-opacity duration-300 group-hover:opacity-50"
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

            {/* Bolinhas de navegação */}
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full mx-2 ${
                            index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};
