"use client";

import { useEffect } from "react";

export function EasterEggs() {
  useEffect(() => {
    // Console easter egg
    console.log("\n");
    console.log(
      "%c👋 Hey there!",
      "font-size: 28px; font-weight: bold; color: #3b82f6;"
    );
    console.log("\n");
    console.log(
      "%cLike poking around in the dev tools?",
      "font-size: 14px; color: #666;"
    );
    console.log(
      "%cWe should chat → isaacmlevine4@gmail.com",
      "font-size: 14px; color: #fff; background: linear-gradient(90deg, #3b82f6, #8b5cf6); padding: 10px 16px; border-radius: 6px; margin: 4px 0;"
    );
    console.log("\n");
    console.log(
      "%c🎮 Psst... try: ↑ ↑ ↓ ↓ ← → ← → b a",
      "font-size: 11px; color: #999; font-style: italic; padding: 4px 0;"
    );

    // Konami code
    const code = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let index = 0;

    const handler = (e: KeyboardEvent) => {
      if (e.key === code[index]) {
        index++;
        if (index === code.length) {
          // 🎉 Secret unlocked!
          document.body.style.transition = "transform 0.5s";
          document.body.style.transform = "rotate(360deg)";
          setTimeout(() => {
            document.body.style.transform = "rotate(0deg)";
          }, 500);
          index = 0;
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return null;
}

