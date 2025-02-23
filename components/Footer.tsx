import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-8 flex items-center justify-center gap-4">
      <a target="_blank" href="https://www.linkedin.com/in/rochaeverton/">
        <FaLinkedin className="cursor-pointer" size={20} />
      </a>
      <a target="_blank" href="https://github.com/evertonrocha2">
        <FaGithub className="cursor-pointer" size={20} />
      </a>
    </footer>
  );
};

export default Footer;
