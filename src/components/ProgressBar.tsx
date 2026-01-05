"use client";

import { AppProgressBar } from "next-nprogress-bar";

export function ProgressBar() {
  return (
    <AppProgressBar
      height="3px"
      color="#3b82f6"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}

