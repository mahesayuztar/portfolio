import type { Metadata } from "next";
import { ResumeViewer } from "./ResumeViewer";

export const metadata: Metadata = {
  title: "Résumé | Mahesa Yuztar",
  description: "Preview Mahesa Yuztar's résumé.",
  robots: { index: false, follow: false },
};

export default function ResumePage() {
  return <ResumeViewer />;
}
