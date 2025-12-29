"use client";

import { useEffect, useRef, useState } from "react";

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !ref.current || !chart) return;

    const renderMermaid = async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        
        mermaid.initialize({
          startOnLoad: true,
          theme: "default",
          securityLevel: "loose",
        });
        
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const element = ref.current;
        
        if (element) {
          const result = await mermaid.render(id, chart);
          element.innerHTML = result.svg;
        }
      } catch (error) {
        console.error("Mermaid rendering error:", error);
      }
    };

    renderMermaid();
  }, [chart, isClient]);

  if (!isClient) {
    return <div className="my-8 flex justify-center overflow-x-auto" />;
  }

  return <div ref={ref} className="my-8 flex justify-center overflow-x-auto" />;
}

