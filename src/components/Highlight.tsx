import React from "react";

import { twMerge } from "tailwind-merge";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span
      className={twMerge("px-1 py-0.5", className)}
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      {children}
    </span>
  );
};
