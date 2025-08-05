// src/sections/Skills.jsx
export default function Skills() {
  const skills = {
    "Web Development": [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS",
    ],
    Networking: [
      "Cisco IOS",
      "Network Security",
      "TCP/IP",
      "VPN",
      "Firewall Configuration",
    ],
    Cybersecurity: [
      "OWASP Top 10",
      "Penetration Testing",
      "Cryptography",
      "Security Auditing",
    ],
    Programming: ["Python", "Java", "C++", "Data Structures", "Algorithms"],
    "AI/ML": ["TensorFlow", "Neural Networks", "Data Analysis", "NLP"],
    Tools: ["Git", "Wireshark", "Packet Tracer", "Linux", "Docker"],
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
