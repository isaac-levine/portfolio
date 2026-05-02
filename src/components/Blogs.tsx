"use client";
import { Blog } from "@/types/blog";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import { format } from "date-fns";

export const Blogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="flex flex-col space-y-2">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.25,
            delay: Math.min(index * 0.04, 0.24),
            ease: "easeOut",
          }}
        >
          <Link
            href={`/blog/${blog.slug}`}
            className="group flex flex-col sm:flex-row sm:items-center sm:justify-between
              rounded-lg transition-colors duration-200 p-4 no-underline"
            style={{ color: "var(--text-primary)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--card-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <h2
              className="text-xl font-semibold"
              style={{
                color: "var(--text-primary)",
                viewTransitionName: `blog-title-${blog.slug}`,
              }}
            >
              {blog.title}
            </h2>

            <div className="flex items-center">
              <span
                className="mt-1 sm:mt-0 text-sm sm:text-base"
                style={{ color: "var(--text-secondary)" }}
              >
                {format(new Date(`${blog.date}T12:00:00Z`), "MMMM d, yyyy")}
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
