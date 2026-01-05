"use client";

import { useEffect } from "react";

export function EasterEggs() {
  useEffect(() => {
    // Console easter egg
    console.log(
      "%c👋 Hey there!",
      "font-size: 24px; font-weight: bold; color: #10b981;"
    );
    console.log(
      "%cLike poking around in the dev tools? We should chat. Email me at isaacmlevine4@gmail.com",
      "font-size: 14px; color: #fff; background: linear-gradient(90deg, #8b5cf6, #ec4899); padding: 8px 12px; border-radius: 4px;"
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

