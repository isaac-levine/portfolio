"use client";

import { useEffect, useState } from "react";

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setProgress((scrollTop / scrollHeight) * 100);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-0.5"
      style={{ backgroundColor: "var(--border-light)" }}
    >
      <div
        className="h-full transition-[width] duration-75 ease-out"
        style={{
          width: `${progress}%`,
          backgroundColor: "var(--accent)",
        }}
      />
    </div>
  );
}
