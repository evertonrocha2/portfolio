import React from "react";

const FloatingNav = () => {
  return (
    <div>
      <header>
        <nav className="fixed w-64 md:w-96 rounded-full geist mx-auto top-0 left-0 right-0 bg-black-100 z-50 border flex items-center gap-8 justify-center p-4 my-8 border-zinc-800 sm:px-10 md:px-20 lg:px-28 xl:px-36">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-md font-regular text-white hover:text-white/70 transition-colors duration-200"
            >
              Início
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/contact"
              target="_blank"
              className="text-md font-regular text-white hover:text-white/70 transition-colors duration-200"
            >
              Contato
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default FloatingNav;
