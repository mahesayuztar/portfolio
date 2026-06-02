export interface WindowItem {
  id: string;
  title: string;

  x: number;
  y: number;

  width: number;
  height: number;

  minimized: boolean;
  maximized: boolean;

  zIndex: number;
}
