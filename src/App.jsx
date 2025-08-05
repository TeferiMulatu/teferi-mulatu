import { useState } from "react";

import {
  Navbar,
  Hero,
  About,
  Projects,
  Footer,
  Contact,
  Skills,
} from "./components";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      dd
    </div>
  );
}

export default App;
