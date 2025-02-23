import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const title =
    "Este é o meu portfólio, onde transformo conceitos em experiências incríveis.";
  const about = "Olá, eu sou o Everton, um desenvolvedor Fullstack!";
  return (
    <div id="hero" className="pb-20 pt-36">
      <div className="h-screen w-full bg-black-100 bg-grid-white/[0.03] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="flex gap-2">
            <div className="bg-black-100 pointer-events-none border border-zinc-800 px-4 py-2 rounded-2xl text-xs">
              <h1>UI/UX</h1>
            </div>
            <div className="bg-black-100 pointer-events-none border border-zinc-800 px-4 py-2 rounded-2xl text-xs">
              <h1>Software Engineer</h1>
            </div>
          </div>
          <TextGenerateEffect
            duration={1}
            words={title}
            className="text-center pointer-events-none text-white dm-sans text-[40px] md:text-5xl lg:text-6xl tracking-tighter"
          />
          <TextGenerateEffect
            duration={2}
            words={about}
            className="text-center pointer-events-none text-zinc-300 mb-4 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
