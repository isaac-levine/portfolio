"use client";

import { navlinks } from "@/constants/navlinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { SearchModal } from "./SearchModal";
import { ReadingProgressBar } from "./ReadingProgressBar";

export function TopNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "d") {
        e.preventDefault();
        toggleTheme();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleTheme]);

  const isActive = (href: string) => pathname === href;
  const isBlogPost = pathname?.startsWith("/blog/");
  const isMac = typeof navigator !== "undefined" && /Mac/.test(navigator.userAgent);
  const modKey = isMac ? "\u2318" : "Ctrl+";

  return (
    <>
      <nav
        className={twMerge(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "shadow-sm" : ""
        )}
        style={{
          backgroundColor: scrolled ? "var(--nav-bg)" : "var(--bg-primary)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        {isBlogPost && <ReadingProgressBar />}
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 md:px-6 h-16">
          {/* Left: headshot + name */}
          <Link href="/" className="flex items-center gap-3 no-underline group">
            <Image
              src="/images/headshot.png"
              alt="Isaac Levine"
              height={38}
              width={38}
              className="rounded-full object-cover object-top flex-shrink-0 ring-2 ring-transparent group-hover:ring-[var(--accent)] transition-all duration-200"
            />
            <span
              className="font-semibold text-base tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Isaac Levine
            </span>
          </Link>

          {/* Right: desktop nav links + actions */}
          <div className="hidden md:flex items-center gap-1.5">
            {navlinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={twMerge(
                  "relative px-4 py-2 rounded-full text-base transition-all duration-200 no-underline",
                  isActive(link.href)
                    ? "font-medium"
                    : "hover:bg-[var(--bg-secondary)]"
                )}
                style={{
                  color: isActive(link.href)
                    ? "var(--text-primary)"
                    : "var(--text-secondary)",
                  backgroundColor: isActive(link.href)
                    ? "var(--bg-secondary)"
                    : undefined,
                }}
              >
                {link.label}
              </Link>
            ))}

            <div
              className="w-px h-5 mx-2"
              style={{ backgroundColor: "var(--border)" }}
            />

            {/* Search button */}
            <button
              className="flex items-center gap-2.5 px-3 py-2 rounded-full transition-all duration-200 hover:bg-[var(--bg-secondary)]"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <span className="flex items-center"><SearchIcon size={18} /></span>
              <kbd
                className="font-mono px-3 py-1.5 rounded-lg inline-flex items-center gap-0.5"
                style={{
                  color: "var(--text-secondary)",
                  backgroundColor: "var(--bg-secondary)",
                  fontSize: 15,
                  lineHeight: 1,
                }}
              >
                <span style={{ transform: "translateY(1px)" }}>{modKey}</span>
                <span>k</span>
              </kbd>
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center gap-2.5 px-3 py-2 rounded-full transition-all duration-200 hover:bg-[var(--bg-secondary)]"
              style={{ color: "var(--text-secondary)" }}
            >
              <span className="flex items-center">{theme === "light" ? <SunIcon size={18} /> : <MoonIcon size={18} />}</span>
              <kbd
                className="font-mono px-3 py-1.5 rounded-lg inline-flex items-center gap-0.5"
                style={{
                  color: "var(--text-secondary)",
                  backgroundColor: "var(--bg-secondary)",
                  fontSize: 15,
                  lineHeight: 1,
                }}
              >
                <span style={{ transform: "translateY(1px)" }}>{modKey}</span>
                <span>d</span>
              </kbd>
            </button>
          </div>

          {/* Right: mobile actions */}
          <div className="flex md:hidden items-center gap-1">
            <button
              className="p-2.5 rounded-full transition-colors hover:bg-[var(--bg-secondary)]"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <SearchIcon size={18} />
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-full transition-colors hover:bg-[var(--bg-secondary)]"
              style={{ color: "var(--text-secondary)" }}
            >
              {theme === "light" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full transition-colors hover:bg-[var(--bg-secondary)]"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden border-b"
            style={{
              backgroundColor: "var(--nav-bg)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderColor: "var(--border)",
            }}
          >
            <div className="max-w-5xl mx-auto px-4 py-2 flex flex-col">
              {navlinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={twMerge(
                    "px-3 py-2.5 rounded-lg text-sm transition-colors no-underline",
                    isActive(link.href)
                      ? "font-medium"
                      : ""
                  )}
                  style={{
                    color: isActive(link.href)
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                    backgroundColor: isActive(link.href)
                      ? "var(--bg-secondary)"
                      : undefined,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function SearchIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="10" r="7" />
      <line x1="22" y1="22" x2="15" y2="15" />
    </svg>
  );
}

function SunIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
