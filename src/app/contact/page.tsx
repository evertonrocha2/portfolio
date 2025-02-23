"use client";
import React from "react";
import FloatingNav from "../../../components/FloatingNav";

const Contact = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");
  const [isShow, setIsShow] = React.useState(false);
  const activeConffetion = () => {
    setIsShow(true);
    setTimeout(() => {
      setIsShow(false);
    }, 1800);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="bg-black-100">
      <FloatingNav />
      <div className="w-[20%] mx-auto geist flex flex-col h-screen relative justify-center">
        <div
          className={`absolute ${
            isShow ? "block" : "hidden"
          } left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`}
        >
          <img src="/confetti.gif" alt="Confetti" className="w-full h-full" />
        </div>
        <h2 className="text-5xl text-center tracking-tighter">
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
            />
          </div>
          <div className="flex flex-col gap-1 my-4">
            <label htmlFor="email">Email:</label>
            <input
              className="px-4 bg-black-100 border-[0.2px] border-zinc-950 py-2 rounded-xl text-sm"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-1 my-4">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              placeholder="Exemplo: Olá, gostaria de te contratar 💖"
              className="px-4 bg-black-100 border-[0.2px] border-zinc-950 py-2 rounded-xl text-sm"
              name="mensagem"
            ></textarea>
          </div>
          <button
            onClick={activeConffetion}
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
