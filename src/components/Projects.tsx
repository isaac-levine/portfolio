"use client";
import React from "react";
import { Heading } from "./Heading";
import { Project } from "@/constants/projects";
import { projects } from "@/constants/projects";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { FaGithub, FaLink, FaYoutube } from "react-icons/fa";

export const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project: Project, idx: number) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <div
              className="group flex flex-col space-y-3
              rounded-xl transition-all duration-200 p-3
              shadow-sm hover:shadow-md max-w-xl h-[440px]"
              style={{
                border: "1px solid var(--border)",
                backgroundColor: "var(--card-bg)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--card-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--card-bg)")
              }
            >
              <div
                className="relative w-full h-[280px] rounded-lg overflow-hidden"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              >
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} thumbnail`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain hover:scale-[1.02] transition-transform duration-200"
                />
              </div>
              <div className="flex flex-col justify-between w-full h-full">
                <div>
                  <div className="flex justify-between items-center">
                    <h1 className="text-base md:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      {project.title}
                    </h1>
                    <div className="flex gap-2">
                      {project.href && (
                        <Link
                          href={project.href}
                          className="p-2 rounded-full transition-all hover:scale-110"
                          style={{ color: "var(--text-secondary)" }}
                          target="_blank"
                        >
                          <FaLink className="w-4 h-4" />
                        </Link>
                      )}
                      {project.demo && (
                        <Link
                          href={project.demo}
                          className="p-2 rounded-full transition-all hover:scale-110"
                          style={{ color: "var(--text-secondary)" }}
                          target="_blank"
                        >
                          <FaYoutube className="w-4 h-4" />
                        </Link>
                      )}
                      {project.githubLink && (
                        <Link
                          href={project.githubLink}
                          className="p-2 rounded-full transition-all hover:scale-110"
                          style={{ color: "var(--text-secondary)" }}
                          target="_blank"
                        >
                          <FaGithub className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <Paragraph className="text-sm mt-2 max-w-xl">
                    {project.description}
                  </Paragraph>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs px-3 py-1.5 rounded-full
                        bg-gradient-to-r from-primary/10 to-secondary/10
                        text-secondary font-medium
                        hover:scale-105 transition-transform duration-200"
                      style={{ border: "1px solid var(--border)" }}
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
