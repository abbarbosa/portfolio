// Modal.js
import React from "react";

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
            <div className="bg-white p-6 rounded-md shadow-md relative w-full sm:w-4/5 md:w-3/4 lg:w-2/3 max-w-2xl">
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
