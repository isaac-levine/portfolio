"use client";
import React from "react";
import { socials } from "@/constants/socials";

export const Footer = () => {
  return (
    <div
      className="px-4 md:px-6 py-4 text-sm border-t"
      style={{ color: "var(--text-secondary)", borderColor: "var(--border)" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200 hover:-rotate-12"
                style={{ color: "var(--text-tertiary)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-tertiary)")
                }
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
        <div>
          <span className="font-semibold">{new Date().getFullYear()} </span>
          &#8212;{" "}
          <a
            className="underline"
            href="https://www.github.com/isaac-levine/portfolio"
            target={"_blank"}
          >
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};
