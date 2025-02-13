"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export const Blogs = ({ blogs }: { blogs: Blog[] }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div className="flex flex-col space-y-2">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.slug}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Link
            href={`/blog/${blog.slug}`}
            className="group flex flex-col sm:flex-row sm:items-center sm:justify-between 
              hover:bg-gray-50/50 rounded-lg transition-colors duration-200 p-4"
          >
            <h1 className="text-base text-xl font-semibold text-gray-700 group-hover:text-primary">
              {blog.title}
            </h1>

            <div className="flex items-center">
              <span className="text-secondary mt-1 sm:mt-0 text-sm sm:text-base">
                {formatDate(blog.date)}
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
