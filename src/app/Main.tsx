"use client";

import { FloatingActionButton } from "@/components/button/FloatingActionButton";
import { Modal } from "@/components/modal/Modal";
import WindowChrome from "@/components/modal/WindowChrome";
import { AboutWindow } from "@/components/AboutWindow";
import { ContactWindow } from "@/components/ContactWindow";
import { ProjectsWindow } from "@/components/ProjectsWindow";
import { useModal } from "@/context/ModalContext";
import { ModalProps } from "@/types/modal";
import { FolderKanban, Mail, Repeat, User } from "lucide-react";

function renderModal(modal: ModalProps) {
  const shared = {
    key: modal.id,
    id: modal.id,
    x: modal.x,
    y: modal.y,
    width: modal.width,
    height: modal.height,
    zIndex: modal.zIndex,
  };

  switch (modal.type) {
    case "about":
      return (
        <Modal {...shared}>
          <WindowChrome title="About" icon={<User size={13} />} tone="primary">
            <AboutWindow />
          </WindowChrome>
        </Modal>
      );

    case "projects":
      return (
        <Modal {...shared}>
          <WindowChrome
            title="Selected work"
            icon={<FolderKanban size={13} />}
            tone="secondary"
          >
            <ProjectsWindow />
          </WindowChrome>
        </Modal>
      );

    case "contact":
      return (
        <Modal {...shared}>
          <WindowChrome title="Contact" icon={<Mail size={13} />} tone="cream">
            <ContactWindow />
          </WindowChrome>
        </Modal>
      );

    default:
      return null;
  }
}

export default function Main() {
  const modalContext = useModal();
  return (
    <main className="relative flex min-h-screen w-full flex-col gap-4 overflow-x-hidden bg-background p-4 md:block md:gap-0 md:p-0">
      {modalContext.modals.map((modal) => renderModal(modal))}
      <FloatingActionButton
        className="z-[99999] hidden md:flex"
        horizontal="right"
        vertical="bottom"
        onClick={() => modalContext.handleResetWindows()}
      >
        <Repeat size={20} />
      </FloatingActionButton>
    </main>
  );
}
