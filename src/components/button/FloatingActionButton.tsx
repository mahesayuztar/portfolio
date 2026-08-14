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
      className={`fixed ${props.horizontal === "right" ? `right-4` : `left-4`} ${props.horizontal === "top" ? `top-4` : `bottom-4`} flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-ink bg-white text-ink shadow-offset-sm transition-all duration-200 hover:bg-surface hover:shadow-offset active:scale-95 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
