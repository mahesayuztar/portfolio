"use client";

import { useModal } from "@/context/ModalContext";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ModalProps } from "@/types/modal";
import { useState } from "react";
import { Rnd } from "react-rnd";

export const Modal = (props: ModalProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const modalContext = useModal();
  const isMobile = useIsMobile();

  const frameClasses = `h-full w-full overflow-hidden rounded-xl border-ink bg-white transition-[box-shadow,transform] duration-200 ${
    isDragging ? "-translate-y-1 shadow-offset" : "shadow-offset-soft"
  }`;

  if (isMobile) {
    return (
      <div className={`${frameClasses} mb-4`} style={{ height: props.height ?? 400 }}>
        {props.children}
      </div>
    );
  }

  return (
    <Rnd
      key={props.id}
      default={{
        x: 100,
        y: 100,
        width: props.width ?? 500,
        height: props.height ?? 400,
      }}
      position={{
        x: props.x ?? 100,
        y: props.y ?? 100,
      }}
      minWidth={300}
      minHeight={200}
      enableResizing={
        props.enableResizing
          ? {
              top: true,
              right: true,
              bottom: true,
              left: true,
              topRight: true,
              bottomRight: true,
              bottomLeft: true,
              topLeft: true,
            }
          : {
              top: false,
              right: false,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }
      }
      onMouseDown={() => modalContext.setTopModal(props.id ?? "")}
      onDragStart={() => setIsDragging(true)}
      onDragStop={(e, d) => {
        e.preventDefault();
        modalContext.setModals((prev) =>
          prev.map((modal) =>
            modal.id === props.id
              ? {
                  ...modal,
                  x: d.x,
                  y: d.y,
                }
              : modal,
          ),
        );

        setIsDragging(false);
      }}
      style={{ zIndex: props.zIndex }}
    >
      <div className={frameClasses}>{props.children}</div>
    </Rnd>
  );
};
