"use client";
import React, { useState } from "react";
import FloatingNav from "../../../components/FloatingNav";
import emailjs from "emailjs-com";

const Contact = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isShow, setIsShow] = useState(false);

  const activeConffetion = () => {
    setIsShow(true);
    setTimeout(() => {
      setIsShow(false);
    }, 1800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

    const templateParams = {
      from_name: nome,
      from_email: email,
      message: mensagem,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        alert("E-mail enviado com sucesso!");
        setNome("");
        setEmail("");
        setMensagem("");
        activeConffetion();
      })
      .catch((error: any) => {
        console.error("Erro ao enviar o e-mail:", error);
      });
  };

  return (
    <div className="bg-black-100">
      <FloatingNav />
      <div className="md:w-[40%] sm:w-[60%] w-[80%] mx-auto geist flex flex-col h-screen relative justify-center">
        <div
          className={`absolute ${
            isShow ? "block" : "hidden"
          } left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`}
        >
          <img src="/confetti.gif" alt="Confetti" className="w-full h-full" />
        </div>
        <h2 className="text-3xl md:text-3xl text-center tracking-tighter">
          Entre em contato comigo! 😄
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 my-4">
            <label htmlFor="nome">Nome:</label>
            <input
              className="px-4 bg-black-100 border-[0.2px] border-zinc-950 py-2 rounded-xl text-sm"
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-1 my-4">
            <label htmlFor="email">Email:</label>
            <input
              className="px-4 bg-black-100 border-[0.2px] border-zinc-950 py-2 rounded-xl text-sm"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-1 my-4">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              placeholder="Exemplo: Olá, gostaria de te contratar 💖"
              className="px-4 bg-black-100 border-[0.2px] border-zinc-950 py-2 rounded-xl text-sm"
              name="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            className="bg-blue-500 px-4 py-2 rounded-xl text-center w-full hover:bg-blue-500/80 transition-colors duration-300"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
