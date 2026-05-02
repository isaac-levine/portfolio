"use client";
import React from "react";
import { socials } from "@/constants/socials";

export const Footer = () => {
  return (
    <footer
      className="text-sm py-10"
      style={{ color: "var(--text-secondary)" }}
    >
      <div className="max-w-4xl w-full mx-auto px-4 md:px-10 flex items-center justify-between">
        <div>
          <span className="font-semibold">{new Date().getFullYear()}</span>
          {" — "}
          <a
            className="underline-offset-4 hover:underline"
            href="https://www.github.com/isaac-levine/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code
          </a>
        </div>
        <div className="flex items-center gap-4">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: "var(--text-tertiary)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-tertiary)")
                }
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
