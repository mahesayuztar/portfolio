"use client";

import { FloatingActionButton } from "@/components/button/FloatingActionButton";
import { Modal } from "@/components/modal/Modal";
import SubaruWindow from "@/components/modal/SubaruWindow";
import { useModal } from "@/context/ModalContext";
// import { useModal } from "@/context/ModalContext";
import { ModalProps } from "@/types/modal";
import { Repeat } from "lucide-react";

function renderModal(modal: ModalProps) {
  switch (modal.type) {
    case "subaru":
      return (
        <Modal
          key={modal.id}
          id={modal.id}
          x={modal.x}
          y={modal.y}
          zIndex={modal.zIndex}
        >
          <SubaruWindow>
            <></>
          </SubaruWindow>
        </Modal>
      );

    default:
      return null;
  }
}

export default function Main() {
  const modalContext = useModal();
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-zinc-100">
      {modalContext.modals.map((modal) => {
        return renderModal(modal);
      })}
      <FloatingActionButton
        className="z-[99999]"
        horizontal="right"
        vertical="bottom"
        onClick={() => modalContext.handleResetWindows()}
      >
        <Repeat size={20} />
      </FloatingActionButton>
    </main>
  );
}
