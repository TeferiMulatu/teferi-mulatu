import React from "react";

// src/sections/Hero.jsx
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 px-4"
    >
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Teferi Mulatu
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Computer Science Student | Full-Stack Developer | Tech Enthusiast
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Final year Computer Science student passionate about building
          innovative solutions. I specialize in modern web development with
          expertise in React, Node.js, and cloud technologies. Currently seeking
          opportunities to apply my academic knowledge to real-world challenges.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-gray-800 transition duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
