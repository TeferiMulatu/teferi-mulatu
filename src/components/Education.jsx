// src/sections/Education.jsx
export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                Mekdela Amba University
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                2020 - 2024 (Expected)
              </p>
            </div>
            <div className="md:w-2/3">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                B.Sc. in Computer Science
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Specializing in Network Systems and Cybersecurity with
                coursework in:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  <span>Advanced Computer Networks</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  <span>Information Security</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  <span>Artificial Intelligence</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  <span>Web Application Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
