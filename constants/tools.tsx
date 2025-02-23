import { FaFigma } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";

interface ToolsI {
    id: number;
    name: string;
    icon: React.ReactNode;
}



export const tools: ToolsI[] = [
  {
    id: 1,
    name: "VSCode",
    icon: (
      <VscVscode className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
  {
    id: 2,
    name: "Figma",
    icon: (
      <FaFigma className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
  {
    id: 3,
    name: "Adobe Photoshop",
    icon: (
      <SiAdobephotoshop className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
  {
    id: 4,
    name: "Adobe Illustrator",
    icon: (
      <SiAdobeillustrator  className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
];