// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

// pages/Home.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen p-6 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Moamel Hashim</h1>
        <nav className="space-x-4">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center mb-10">
        <img
          src="/avatar.jpg"
          alt="Profile"
          className="mx-auto w-32 h-32 rounded-full border"
        />
        <h2 className="text-xl mt-4">Hello, I'm</h2>
        <h3 className="text-3xl font-bold">Moamel Hashim</h3>
        <p>Frontend Developer</p>
        <div className="mt-4 space-x-2">
          <button className="bg-white text-black px-4 py-2 rounded">Resume</button>
          <button className="bg-transparent border px-4 py-2 rounded">Contact Me</button>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="mb-12 text-center">
        <img src="/about-img.jpg" alt="About" className="w-52 h-72 mx-auto rounded-xl mb-4" />
        <div className="flex justify-around text-left">
          <div>
            <h4 className="font-bold">Experience</h4>
            <p>2+ years</p>
            <p>Frontend Development</p>
          </div>
          <div>
            <h4 className="font-bold">Education</h4>
            <p>A.S in Web Development</p>
            <p>Bootcamp</p>
          </div>
        </div>
        <p className="mt-4 max-w-xl mx-auto">
          My name is Moamel Hashim and I’m a Software developer. I specialize in Frontend development. I am also a fast learner and love to work with new technologies. I’m most excited about web development & new JavaScript libraries.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-4">Experience</h2>
        <div className="flex justify-center gap-8">
          <div className="bg-zinc-800 p-4 rounded shadow">
            <h4 className="font-semibold">Frontend Development</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="bg-zinc-800 p-4 rounded shadow">
            <h4 className="font-semibold">Backend Development</h4>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>SQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-4">Projects</h2>
        <div className="flex justify-center gap-8">
          <div className="bg-zinc-800 p-4 rounded shadow text-center">
            <img src="/project1.jpg" alt="Project 1" className="mb-2 rounded" />
            <div className="space-x-2">
              <button className="bg-white text-black px-4 py-1 rounded">GitHub</button>
              <button className="border px-4 py-1 rounded">Live Demo</button>
            </div>
          </div>
          <div className="bg-zinc-800 p-4 rounded shadow text-center">
            <img src="/project2.jpg" alt="Project 2" className="mb-2 rounded" />
            <div className="space-x-2">
              <button className="bg-white text-black px-4 py-1 rounded">GitHub</button>
              <button className="border px-4 py-1 rounded">Live Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
        <div className="flex justify-center gap-6 text-2xl">
          <Github />
          <Linkedin />
          <Mail />
        </div>
      </section>
    </div>
  );
}

// pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-zinc-900 text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-2 text-xl">Page Not Found</p>
      <Link to="/" className="mt-4 underline">
        Go Back Home
      </Link>
    </div>
  );
}
