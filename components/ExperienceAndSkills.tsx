import { devops } from "../constants/devops";
import { backend, frontend } from "../constants/skills";
import { tools } from "../constants/tools";
import ShimmerButton from "./ui/ShimmerButton";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/Tooltip";

const ExperienceAndSkills = () => {
  return (
    <div
      id="skills"
      className="w-full flex-col h-screen flex items-center justify-center pt-20"
    >
      <div>
        <h2 className="text-center text-4xl dm-sans tracking-tighter">
          Habilidades e Experiência
        </h2>
        <div className="flex items-center flex-col md:flex-row justify-center gap-16 pt-20">
          <div className="flex flex-col items-center justify-center gap-16">
            <div className="flex flex-col gap-2  items-center justify-center">
              <div>
                <h3 className="tracking-tighter font-semibold pointer-events-none">
                  Frontend
                </h3>
              </div>
              <div className="flex">
                {frontend.map((item, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <div key={i} className="flex items-center group">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{item.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2  items-center justify-center">
              <div>
                <h3 className="tracking-tighter font-semibold pointer-events-none">
                  Backend
                </h3>
              </div>
              <div className="flex">
                {backend.map((item, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <div key={i} className="flex items-center group">
                        <div className="w-12 h-12 cursor-pointer rounded-full flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{item.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-16">
            <div className="flex flex-col gap-2 items-center justify-center">
              <div>
                <h3 className="tracking-tighter font-semibold pointer-events-none">
                  DevOps
                </h3>
              </div>
              <div className="flex">
                {devops.map((item, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <div key={i} className="flex items-center group">
                        <div className="w-12 h-12 cursor-pointer rounded-full flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{item.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2  items-center justify-center">
              <div>
                <h3 className="tracking-tighter font-semibold pointer-events-none">
                  Tools
                </h3>
              </div>
              <div className="flex">
                {tools.map((item, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <div key={i} className="flex items-center group">
                        <div className="w-12 h-12 cursor-pointer rounded-full flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{item.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShimmerButton href="my-cv.pdf" words="Baixar meu CV" />
    </div>
  );
};

export default ExperienceAndSkills;
