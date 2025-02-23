import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,
  id,
  stacks,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image?: string;
  id: number;
  stacks?: string[];
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 px-8 bg-black-100 border-white/[0.2] border",
        id === 1
          ? "md:col-span-3"
          : id === 3
          ? "md:col-span-1"
          : "md:col-span-2",
        className
      )}
    >
      {image && (
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
          <img
            src={image}
            alt="Background"
            className={cn(
              "w-full h-full object-cover transition-transform duration-200 opacity-30 scale-110 group-hover/bento:scale-105"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-l  from-transparent  via-black-100/50 to-black-100" />
        </div>
      )}
      {stacks && (
        <div className="absolute top-[50%] pl-2 py-2 translate-y-[-50%] transition-transform duration-200 scale-110 group-hover/bento:scale-105 right-0 w-1/2 overflow-hidden">
          <div className="flex flex-wrap gap-4 ">
            {stacks.map((stack, i) => (
              <div
                key={i}
                className="text-xs font-medium text-white rounded-lg px-2 py-1 bg-gradient-to-r from-purple-500 to-black-100 "
              >
                {stack}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-l w-full from-transparent   via-black-100/50 to-black-100/90" />
        </div>
      )}

      <div className="relative z-10 space-y-4 w-2/3">
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="font-sans text-sm  text-neutral-400 mb-2 mt-2">
            {title}
          </div>
          <div className="font-semibold font-sans  text-lg text-neutral-300 mb-4">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
