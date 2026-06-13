import { ReactNode } from "react";

type FABType = {
  className?: string;
  horizontal?: string;
  vertical?: string;
  children: ReactNode;
  onClick: () => void;
};

export const FloatingActionButton = (props: FABType) => {
  return (
    <button
      className={`absolute ${props.horizontal === "right" ? `right-4` : `left-4`} ${props.horizontal === "top" ? `top-4` : `bottom-4`} border border-black flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-zinc-600 backdrop-blur-sm transition-all duration-200 hover:bg-white/80 hover:text-zinc-900 hover:shadow-md active:scale-95 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
