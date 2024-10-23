// import React, { useEffect, useRef, useState } from "react";
// import hackathon from "../../Assets/carrossel/hackathon.png";
// import palestra from "../../Assets/carrossel/palestra.png";
// import apresentacao from "../../Assets/carrossel/apresentação.png";
// import adobe from "../../Assets/carrossel/adobe.png";
// import azure from "../../Assets/carrossel/azure.png";
// import { motion } from "framer-motion";

// export const Carousel = () => {
//     const images = [
//         { src: hackathon, title: "Participação em Hackathon" },
//         { src: azure, title: "Certificada em Azure AI-900" },
//         { src: palestra, title: "Palestra sobre empregabilidade" },
//         { src: adobe, title: "Certificada Adobe Illustrator" },
//         { src: apresentacao, title: "Apresentação do aplicativo Voltair" }
//     ];

//     const [width, setWidth] = useState(0);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const carousel = useRef();

//     useEffect(() => {
//         if (carousel.current) {
//             const scrollWidth = carousel.current.scrollWidth;
//             const offsetWidth = carousel.current.offsetWidth;
//             setWidth(scrollWidth - offsetWidth); // Define o limite de scroll para evitar ultrapassar o tamanho do carrossel
//         }
//     }, []);

//     const handleDragEnd = (event, info) => {
//         const offset = info.offset.x;
//         const newIndex = Math.round((currentIndex * -400 + offset) / -400);
//         setCurrentIndex(Math.min(Math.max(newIndex, 0), images.length - 1)); // Certifica-se de que o novo índice está dentro do intervalo válido
//     };

//     const goToPrevious = () => {
//         // Permite que a seta da esquerda funcione, mesmo que mostre a primeira imagem
//         setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//     };

//     const goToNext = () => {
//         setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
//     };

//     return (
//         <div className="relative w-full max-w-[1200px] mx-auto"> {/* Limita a largura do carrossel */}
//             <motion.div
//                 ref={carousel}
//                 className="w-full min-h-[100vh] flex items-center justify-center cursor-grab overflow-hidden"
//                 whileTap={{ cursor: "grabbing" }}
//             >
//                 <motion.div
//                     className="flex"
//                     drag="x"
//                     onDragEnd={handleDragEnd}
//                     dragConstraints={{ right: 0, left: -width }} // Limita o movimento ao tamanho do carrossel
//                     animate={{ x: -currentIndex * 400 }} // Anima o carrossel baseado no índice atual
//                     transition={{ ease: "easeOut", duration: 0.5 }}
//                 >
//                     {images.map((image, index) => (
//                         <motion.div
//                             className="min-h-[200px] min-w-[400px] p-[14px] relative group"
//                             key={index}
//                         >
//                             <img
//                                 className="w-[100%] h-[100%] pointer-events-none transition-opacity duration-300 group-hover:opacity-50"
//                                 src={image.src}
//                                 alt={image.title}
//                             />
//                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                 <span className="text-white text-2xl font-bold">
//                                     {image.title}
//                                 </span>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </motion.div>

//             {/* Setas de navegação */}
//             <button
//                 onClick={goToPrevious}
//                 className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full`}
//             >
//                 &#9664; {/* Seta para a esquerda */}
//             </button>
//             <button
//                 onClick={goToNext}
//                 disabled={currentIndex === images.length - 1} // Desabilita a seta se estiver no final
//                 className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${
//                     currentIndex === images.length - 1 ? "opacity-50 cursor-not-allowed" : "opacity-100"
//                 }`}
//             >
//                 &#9654; {/* Seta para a direita */}
//             </button>
//         </div>
//     );
// };
