// Modal.js
import React from "react";

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
            <div className="bg-white p-6 rounded-md shadow-md relative w-full sm:w-3/4 md:w-1/2 lg:w-1/3 max-w-md">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div>{children}</div>
            </div>
        </div>
    );
}
