import { FaHtml5, FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { DiMysql } from "react-icons/di";

interface SkillsI {
    id: number;
    name: string;
    icon: React.ReactNode;
}

export const frontend: SkillsI[] = [
  {
    id: 1,
    name: "HTML",
    icon: (
      <FaHtml5 className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
  {
    id: 2,
    name: "CSS",
    icon: (
      <FaCss3Alt className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
  {
    id: 3,
    name: "JavaScript",
    icon: (
      <IoLogoJavascript className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
  {
    id: 4,
    name: "React.js",
    icon: (
      <FaReact className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
  {
    id: 5,
    name: "Next.js",
    icon: (
      <SiNextdotjs className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: (
      <RiTailwindCssFill className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
];

export const backend: SkillsI[] = [
  {
    id: 1,
    name: "Node.js",
    icon: (
      <FaNodeJs className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
  {
    id: 2,
    name: "Express",
    icon: (
      <SiExpress className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
  {
    id: 3,
    name: "SQL",
    icon: (
      <DiMysql className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
  {
    id: 4,
    name: "MongoDB",
    icon: (
      <SiMongodb className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
];