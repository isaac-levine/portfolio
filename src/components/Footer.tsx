"use client";
import React from "react";
import { socials } from "@/constants/socials";

export const Footer = () => {
  return (
    <div className="p-4 text-xs text-neutral-500 border-t border-neutral-100">
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
                className="text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                <Icon size={18} />
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
