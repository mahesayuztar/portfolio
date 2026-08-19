"use client";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { useEffect, useState } from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const resumeUrl = "/mahesa-yuztar-resume.pdf";

export function ResumeViewer() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    const updateTheme = () =>
      setTheme(root.dataset.theme === "dark" ? "dark" : "light");
    const observer = new MutationObserver(updateTheme);

    updateTheme();
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-full min-h-0 bg-window">
      <Worker workerUrl="/pdf.worker.min.js">
        <Viewer
          fileUrl={resumeUrl}
          plugins={[defaultLayoutPluginInstance]}
          theme={theme}
          renderError={() => (
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
              <p className="text-sm text-muted-ink">
                The résumé preview could not be loaded.
              </p>
              <a
                href={resumeUrl}
                download
                className="text-sm font-medium text-accent hover:text-accent-strong"
              >
                Download the PDF instead
              </a>
            </div>
          )}
          renderLoader={(percentages) => (
            <div className="flex h-full items-center justify-center p-6 text-sm text-muted-ink">
              Loading résumé… {Math.round(percentages)}%
            </div>
          )}
        />
      </Worker>
    </div>
  );
}
