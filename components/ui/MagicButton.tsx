import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  href,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
  href?: string;
}) => {
  return (
    <div>
      <a target="_blank" href={href}>
        <button className="relative inline-flex h-12 overflow-hidden p-[2px] focus:outline-none w-full md:w-32 md:mt-10 rounded-full">
          <span className="absolute rounded-full inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span
            className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-1 py-1 text-sm font-semibold geist tracking-tighter text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
            onClick={handleClick}
          >
            {position === "left" && icon}
            {title}
            {position === "right" && icon}
          </span>
        </button>
      </a>
    </div>
  );
};

export default MagicButton;
