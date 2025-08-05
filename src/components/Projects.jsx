import React from "react";

// src/sections/Projects.jsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Smart Campus Network Design",
    description:
      "Designed and simulated a secure campus network infrastructure with VLAN segmentation, firewall protection, and intrusion detection systems using Cisco technologies.",
    technologies: [
      "Cisco Packet Tracer",
      "Wireshark",
      "Python",
      "Network Security",
    ],
    github: "https://github.com/teferimulatu/campus-network",
    demo: null,
    image: "/project-network.jpg",
  },
  {
    title: "E-Commerce Security Dashboard",
    description:
      "Full-stack web application that analyzes e-commerce security vulnerabilities with real-time threat monitoring and automated security recommendations.",
    technologies: ["React", "Node.js", "MongoDB", "OAuth 2.0", "JWT"],
    github: "https://github.com/teferimulatu/ecommerce-security",
    demo: "https://ecommerce-security-demo.vercel.app",
    image: "/project-dashboard.jpg",
  },
  {
    title: "AI Web Accessibility Plugin",
    description:
      "Browser extension that uses machine learning to automatically detect and correct accessibility issues in real-time for better WCAG compliance.",
    technologies: [
      "TensorFlow",
      "JavaScript",
      "Chrome API",
      "Web Accessibility",
    ],
    github: "https://github.com/teferimulatu/ai-accessibility",
    demo: "https://chrome.google.com/webstore/yourextension",
    image: "/project-ai.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">
                  Project Image
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                    >
                      <FaGithub className="mr-2" /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
