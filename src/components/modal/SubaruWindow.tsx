import { WindowProps } from "@/types/window";
import Image from "next/image";

export default function SubaruWindow({ children }: WindowProps) {
  return (
    <>
      <div className="relative w-full h-full">
        <div className="absolute left-1/2 -top-7 -translate-x-1/2 z-30 w-[150] h-[110]">
          <Image
            src="/subarunew.png"
            alt="Logo"
            fill
            sizes="100%"
            draggable={false}
            style={{ objectFit: "fill" }}
            priority
          />
        </div>
        <div className="h-full w-full overflow-hidden rounded-xl border border-[#46454D] flex flex-col">
          <div className="relative h-[30%] shrink-0 bg-[#5D5C5A]">
            <div className="absolute top-[60%] left-1/2 h-[30%] w-full -translate-x-1/2 rounded-t-xl border-t border-[#46454D] bg-[#EE9A46] z-10" />

            <div className="absolute top-[70%] left-1/2 h-full w-full -translate-x-1/2 rounded-t-xl border-t border-[#46454D] bg-white z-20" />
          </div>

          <div className="flex-1 min-h-0 bg-white">
            <div className="h-full w-full overflow-auto p-4">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
