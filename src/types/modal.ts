import { ReactNode } from "react";

export interface ModalProps {
  id?: string;
  title?: string;
  type?: string;

  x?: number;
  y?: number;

  width?: number;
  height?: number;

  minimized?: boolean;
  maximized?: boolean;
  isDragged?: boolean;

  zIndex: number;
  enableResizing?: boolean;
  children?: ReactNode;
}
