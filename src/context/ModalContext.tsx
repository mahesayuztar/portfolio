"use client";

import { ModalProps } from "@/types/modal";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

const DEFAULT_WINDOWS: ModalProps[] = [
  {
    id: "window-about",
    type: "about",
    zIndex: 1,
    x: 80,
    y: 110,
    width: 460,
    height: 400,
  },
  {
    id: "window-projects",
    type: "projects",
    zIndex: 2,
    x: 580,
    y: 80,
    width: 560,
    height: 480,
  },
  {
    id: "window-contact",
    type: "contact",
    zIndex: 3,
    x: 220,
    y: 560,
    width: 440,
    height: 320,
  },
];

export type ModalContextType = {
  modals: ModalProps[];
  setModals: Dispatch<SetStateAction<ModalProps[]>>;
  addNewModal: (modal: ModalProps) => void;
  getTopModal: () => ModalProps | null;
  setTopModal: (id: string) => void;
  setDragging: (dragging: boolean, id?: string) => void;
  handleResetWindows: () => void;
};

export type ModalProviderType = {
  children: ReactNode;
};

export const ModalContext = createContext<ModalContextType>({
  modals: [],
  setModals: () => null,
  addNewModal: () => null,
  getTopModal: () => null,
  setTopModal: () => null,
  setDragging: () => null,
  handleResetWindows: () => null,
});

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used inside ModalProvider");
  }
  return context;
}

export function ModalProvider({ children }: ModalProviderType) {
  const [modals, setModals] = useState<ModalProps[]>(() => {
    try {
      const saved = localStorage.getItem("modals");
      return saved ? JSON.parse(saved) : DEFAULT_WINDOWS;
    } catch {
      return DEFAULT_WINDOWS;
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem("modals", JSON.stringify(modals));
    }, 200);
    return () => clearTimeout(timer);
  }, [modals]);

  const addNewModal = (modal: ModalProps) => {
    setModals((prev) => [...prev, modal]);
  };

  const getTopModal = (): ModalProps | null => {
    if (!modals.length) return null;
    return modals.reduce((max, current) =>
      max.zIndex < current.zIndex ? current : max,
    );
  };

  const setTopModal = (id: string) => {
    setModals((prev) => {
      const target = prev.find((m) => m.id === id);

      if (!target) return prev;

      const maxZ = Math.max(...prev.map((m) => m.zIndex), 0);

      if (target.zIndex === maxZ) {
        return prev;
      }

      return prev.map((modal) =>
        modal.id === id
          ? {
              ...modal,
              zIndex: maxZ + 1,
            }
          : modal,
      );
    });
  };

  const setDragging = (dragging: boolean, id?: string) => {
    if (!id) return;

    setModals((prev) =>
      prev.map((modal) =>
        modal.id === id
          ? {
              ...modal,
              isDragged: dragging,
            }
          : modal,
      ),
    );
  };

  const handleResetWindows = () => {
    setModals(
      DEFAULT_WINDOWS.map((modal) => ({
        ...modal,
      })),
    );
  };

  return (
    <ModalContext.Provider
      value={{
        modals,
        setModals,
        addNewModal,
        getTopModal,
        setTopModal,
        setDragging,
        handleResetWindows,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
