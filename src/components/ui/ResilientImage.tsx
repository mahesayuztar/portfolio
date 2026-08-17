"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

type ResilientImageProps = ImageProps & {
  fallbackLabel?: string;
  isCaching?: boolean;
};

const IMAGE_CACHE_PREFIX = "resilient-image:";

export function ResilientImage({ alt, className, fallbackLabel = "Image unavailable", fill, isCaching = false, onError, src, ...props }: ResilientImageProps) {
  const [failedSrc, setFailedSrc] = useState<string>();
  const [cachedImage, setCachedImage] = useState<{ sourceUrl: string; dataUrl: string }>();
  const sourceUrl = typeof src === "string" ? src : "src" in src ? src.src : src.default.src;
  const cachedSrc = isCaching && cachedImage?.sourceUrl === sourceUrl ? cachedImage.dataUrl : undefined;
  const displayedSrc = cachedSrc ?? sourceUrl;
  const hasError = failedSrc === displayedSrc;

  useEffect(() => {
    if (!isCaching) {
      return;
    }

    const cacheKey = `${IMAGE_CACHE_PREFIX}${sourceUrl}`;

    try {
      const storedSrc = window.localStorage.getItem(cacheKey);

      if (storedSrc) {
        Promise.resolve().then(() => setCachedImage({ sourceUrl, dataUrl: storedSrc }));
        return;
      }
    } catch {
      return;
    }

    const abortController = new AbortController();

    fetch(sourceUrl, { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to cache image: ${response.status}`);
        }

        return response.blob();
      })
      .then((blob) => new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
      }))
      .then((dataUrl) => {
        try {
          window.localStorage.setItem(cacheKey, dataUrl);
          setCachedImage({ sourceUrl, dataUrl });
        } catch {}
      })
      .catch(() => undefined);

    return () => abortController.abort();
  }, [isCaching, sourceUrl]);

  if (hasError) {
    return (
      <div role="img" aria-label={`${alt}. ${fallbackLabel}`} className={`flex items-center justify-center border border-border bg-surface text-faint-ink ${fill ? "absolute inset-0 h-full w-full" : ""} ${className ?? ""}`}>
        <svg viewBox="0 0 120 90" aria-hidden="true" className="h-1/2 max-h-20 w-1/2 max-w-28" fill="none">
          <rect x="10" y="10" width="100" height="70" rx="6" stroke="currentColor" strokeWidth="2" />
          <circle cx="39" cy="35" r="8" stroke="currentColor" strokeWidth="2" />
          <path d="m20 69 24-22 17 15 14-12 25 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  return <Image {...props} src={cachedSrc ?? src} alt={alt} className={className} fill={fill} onError={(event) => { setFailedSrc(displayedSrc); onError?.(event); }} />;
}
