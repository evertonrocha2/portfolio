import { FaCloud, FaDocker, FaGit } from "react-icons/fa";

interface DevopsI {
  id: number;
  name: string;
  icon: React.ReactNode;
}

export const devops: DevopsI[] = [
  {
    id: 1,
    name: "Git",
    icon: (
      <FaGit className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
  {
    id: 2,
    name: "Docker",
    icon: (
      <FaDocker className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
  {
    id: 3,
    name: "CI/CD",
    icon: (
      <FaCloud className="w-8 h-8 text-gray-700 transition-colors duration-300 hover:text-gray-400 cursor-pointer" />
    ),
  },
];
