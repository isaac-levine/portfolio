"use client";
import { Blog } from "@/types/blog";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { format } from "date-fns";

export const Blogs = ({ blogs }: { blogs: Blog[] }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div className="flex flex-col space-y-2">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.slug}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Link
            href={`/blog/${blog.slug}`}
            className="group flex flex-col sm:flex-row sm:items-center sm:justify-between
              rounded-lg transition-all duration-200 p-4 hover:scale-[1.02] no-underline"
            style={{ color: "var(--text-primary)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--card-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <h1 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
              {blog.title}
            </h1>

            <div className="flex items-center">
              <span className="mt-1 sm:mt-0 text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>
                {format(new Date(`${blog.date}T12:00:00Z`), "MMMM d, yyyy")}
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
