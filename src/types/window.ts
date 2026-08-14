import { ReactNode } from "react";

export type WindowTone = "surface" | "primary" | "secondary" | "cream";

export interface WindowChromeProps {
  title: string;
  icon?: ReactNode;
  tone?: WindowTone;
  children?: ReactNode;
}
