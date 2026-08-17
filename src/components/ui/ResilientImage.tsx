"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type ResilientImageProps = ImageProps & {
  fallbackLabel?: string;
};

export function ResilientImage({ alt, className, fallbackLabel = "Image unavailable", fill, onError, ...props }: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

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

  return <Image {...props} alt={alt} className={className} fill={fill} onError={(event) => { setHasError(true); onError?.(event); }} />;
}
