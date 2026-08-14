import { GripVertical } from "lucide-react";
import { WindowChromeProps, WindowTone } from "@/types/window";

const toneClasses: Record<WindowTone, string> = {
  surface: "bg-surface",
  primary: "bg-primary",
  secondary: "bg-secondary",
  cream: "bg-cream",
};

export default function WindowChrome({
  title,
  icon,
  tone = "surface",
  children,
}: WindowChromeProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <div
        className={`flex shrink-0 items-center justify-between gap-2 border-b-[1.5px] border-ink px-4 py-2.5 ${toneClasses[tone]}`}
      >
        <div className="flex min-w-0 items-center gap-2">
          {icon && (
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink bg-white text-ink">
              {icon}
            </span>
          )}
          <span className="truncate font-heading text-sm font-semibold text-ink">
            {title}
          </span>
        </div>
        <GripVertical
          size={16}
          className="hidden shrink-0 text-muted-ink md:block"
          aria-hidden
        />
      </div>

      <div className="min-h-0 flex-1 overflow-auto bg-white p-5">
        {children}
      </div>
    </div>
  );
}
