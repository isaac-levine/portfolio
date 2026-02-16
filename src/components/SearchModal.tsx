"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import searchIndex from "@/generated/search-index.json";

interface SearchItem {
  title: string;
  href: string;
  category: string;
  text: string;
  date?: string;
}

const items: SearchItem[] = searchIndex.filter(
  (item: SearchItem) => item.href !== "/resume"
);

function getSnippet(text: string, query: string, maxLen = 120): string | null {
  if (!text || !query.trim()) return null;
  const lower = text.toLowerCase();
  const qLower = query.toLowerCase();
  const idx = lower.indexOf(qLower);
  if (idx === -1) return null;

  const start = Math.max(0, idx - 40);
  const end = Math.min(text.length, idx + query.length + maxLen - 40);
  let snippet = text.slice(start, end).replace(/\n/g, " ");
  if (start > 0) snippet = "..." + snippet;
  if (end < text.length) snippet = snippet + "...";
  return snippet;
}

function highlightMatch(text: string, query: string) {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark
        key={i}
        className="bg-transparent font-semibold"
        style={{ color: "var(--accent)" }}
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const filtered = query.trim()
    ? items.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.text.toLowerCase().includes(q)
        );
      })
    : items.filter((item) => item.category === "Page");

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Scroll selected item into view
  useEffect(() => {
    if (!resultsRef.current) return;
    const selected = resultsRef.current.children[selectedIndex] as HTMLElement;
    if (selected) {
      selected.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  const navigate = useCallback(
    (href: string) => {
      onClose();
      router.push(href);
    },
    [onClose, router]
  );

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        navigate(filtered[selectedIndex].href);
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, filtered, selectedIndex, navigate, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100]"
            style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[101] flex items-start justify-center pt-[20vh]"
            onClick={onClose}
          >
            <div
              className="w-[calc(100%-2rem)] max-w-xl rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Search input */}
              <div
                className="flex items-center gap-3 px-4 py-3 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "var(--text-tertiary)", flexShrink: 0 }}
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search across all posts and pages..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-sm outline-none"
                  style={{ color: "var(--text-primary)" }}
                />
                <kbd
                  className="hidden sm:inline text-[10px] px-1.5 py-0.5 rounded font-mono"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-tertiary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div ref={resultsRef} className="max-h-[320px] overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <div
                    className="px-4 py-8 text-center text-sm"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {query.trim()
                      ? "No results found"
                      : "Type to search across all post content"}
                  </div>
                ) : (
                  filtered.map((item, i) => {
                    const snippet = query.trim()
                      ? getSnippet(item.text, query)
                      : null;

                    return (
                      <button
                        key={item.href}
                        onClick={() => navigate(item.href)}
                        onMouseEnter={() => setSelectedIndex(i)}
                        className="w-full flex flex-col px-4 py-2.5 text-left text-sm transition-colors"
                        style={{
                          backgroundColor:
                            i === selectedIndex
                              ? "var(--bg-secondary)"
                              : "transparent",
                        }}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span style={{ color: "var(--text-primary)" }}>
                            {highlightMatch(item.title, query)}
                          </span>
                          <span
                            className="text-xs ml-3 flex-shrink-0"
                            style={{ color: "var(--text-tertiary)" }}
                          >
                            {item.category}
                          </span>
                        </div>
                        {snippet && (
                          <span
                            className="text-xs mt-1 line-clamp-2"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {highlightMatch(snippet, query)}
                          </span>
                        )}
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
