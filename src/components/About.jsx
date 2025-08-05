import React from "react";

// src/sections/About.jsx
import { FaServer, FaShieldAlt, FaCode, FaBrain } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Personal Image Placeholder - Replace with your actual image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-lg">
                  Your Photo
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Computer Science Student & Aspiring Full-Stack Developer
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm Teferi Mulatu, a passionate 4th-year Computer Science student
              specializing in
              <span className="font-medium text-indigo-600 dark:text-indigo-400">
                {" "}
                Artificial Intelligence
              </span>
              ,
              <span className="font-medium text-indigo-600 dark:text-indigo-400">
                {" "}
                Web Development
              </span>
              , and
              <span className="font-medium text-indigo-600 dark:text-indigo-400">
                {" "}
                Cybersecurity
              </span>
              . My mission is to transform the web into a more interactive and
              secure platform for all users, eliminating outdated practices and
              building solutions that prioritize both user experience and
              safety.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                  <FaCode className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Web Development
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Building modern, responsive web applications with
                    cutting-edge technologies
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                  <FaShieldAlt className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Cybersecurity
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Implementing secure solutions to protect users and their
                    data
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                  <FaServer className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Network Engineering
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Designing robust and efficient network infrastructures
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                  <FaBrain className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    AI Enthusiast
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Exploring machine learning applications to solve real-world
                    problems
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              After graduation, I aim to pursue a career as either a{" "}
              <span className="font-medium">Network Engineer</span> or
              <span className="font-medium"> Web Developer</span>, where I can
              combine my technical skills with my passion for creating secure,
              user-friendly digital experiences. I believe technology should
              adapt to human needs, not the other way around, and I'm committed
              to building web solutions that are both powerful and accessible.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
              >
                Contact Me
              </a>
              <a
                href="#" // Add your resume link here
                className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-gray-800 transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
