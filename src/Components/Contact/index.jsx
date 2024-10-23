import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const params = {
        from_name: name,
        message: message,
        email: email,
    };

    function sendEmail(e) {
        e.preventDefault();

        emailjs.send("service_saw85mr", "template_kzbmuno", params, "18m1Foxa94E7IGIEf")
            .then((response) => {
                console.log('Mensagem enviada com sucesso!', response.status, response.text);
                alert('Mensagem enviada com sucesso!');
            })
            .catch((error) => {
                console.error('Falha ao enviar mensagem...', error);
                alert('Ocorreu um erro ao enviar a mensagem, tente novamente.');
            })
            .finally(() => {
                // Limpar campos do formulário após o envio
                setEmail('');
                setName('');
                setMessage('');
            });
    }

    return (
        <div className="max-w-lg mx-auto mt-10">
            <form className="flex flex-col space-y-4" onSubmit={sendEmail}>
                <div>
                    <label htmlFor="name" className="block text-gray-700"></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='     Digite seu nome'
                        required
                        className="w-full p-2 border border-gray-300 rounded-[30px]"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-700"></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='     Digite seu melhor e-mail'
                        required
                        className="w-full p-2 border border-gray-300 rounded-[30px]"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-gray-700"></label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder='     Digite sua mensagem...'
                        required
                        className="w-full p-2 h-40 border border-gray-300 rounded-[30px]"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-[#7877DF] text-white p-2 rounded-[50px] hover:bg-[#474689] transition-colors"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};
