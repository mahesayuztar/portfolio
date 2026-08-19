"use client";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const resumeUrl = "/mahesa-yuztar-resume.pdf";

export function ResumeViewer() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="h-dvh min-h-[30rem] bg-background p-2 sm:p-4">
      <div className="mx-auto h-full max-w-[100rem] overflow-hidden border border-border bg-window sm:rounded-[14px]">
        <Worker workerUrl="/pdf.worker.min.js">
          <Viewer
            fileUrl={resumeUrl}
            plugins={[defaultLayoutPluginInstance]}
            renderError={() => (
              <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                <p className="text-sm text-muted-ink">
                  The résumé preview could not be loaded.
                </p>
                <a
                  href={resumeUrl}
                  className="text-sm font-medium text-accent hover:text-accent-strong"
                >
                  Open the PDF directly
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
    </div>
  );
}
