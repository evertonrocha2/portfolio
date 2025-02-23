"use client";
import MagicButton from "./ui/MagicButton";
import ShimmerButton from "./ui/ShimmerButton";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      image: "img-01.png",
      title: "Muve Delivery",
      description:
        "Desenvolvimento de uma solução digital para a Muve Delivery, uma empresa especializada no mercado de entregas, com o objetivo de otimizar e facilitar a gestão e acompanhamento dos pedidos.",
      href: "https://app.muve.delivery/",
    },
    {
      image: "img-02.png",
      title: "Weight Speed",
      description:
        "Criação de uma plataforma inovadora voltada para o emagrecimento, com ferramentas personalizadas que ajudam as pessoas a alcançar seus objetivos de forma saudável e eficiente.",
      href: "https://github.com/evertonrocha2/magnareid",
    },
    {
      image: "img-03.png",
      title: "CurrencyHub",
      description:
        "Desenvolvimento de um sistema de conversão de moedas que utiliza uma API externa para fornecer dados de câmbio atualizados em tempo real, facilitando transações internacionais.",
      href: "https://github.com/evertonrocha2/currency-hub",
    },
  ];

  return (
    <motion.div
      id="skills"
      className="w-full flex-col geist min-h-screen flex items-center justify-center py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-center mb-16 text-4xl dm-sans tracking-tighter">
          Meus projetos
        </h2>
      </motion.div>
      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-white dark:bg-[#000103] border-[0.2px] border-zinc-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <div className="relative group h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="mt-auto pt-4 border-t border-zinc-900 flex items-center dark:border-zinc-900">
                <a
                  href={project.href}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Acessar Projeto
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16"
      >
        <ShimmerButton
          href="https://github.com/evertonrocha2"
          words="Acessar GitHub!"
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
