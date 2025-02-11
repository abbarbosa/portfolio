// Modal.js
import React from "react";

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    // Função para lidar com o clique fora do modal
    const handleBackdropClick = (e) => {
        // Verifica se o clique foi fora da área do modal (ou seja, no fundo)
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4" 
            onClick={handleBackdropClick} // Adiciona o evento de clique
        >
            <div className="bg-white p-6 rounded-md shadow-md relative w-full sm:w-4/5 md:w-3/4 lg:w-2/3 max-w-2xl z-60">
                <button
                    className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="overflow-y-auto max-h-[80vh]">{children}</div>
            </div>
        </div>
    );
}
