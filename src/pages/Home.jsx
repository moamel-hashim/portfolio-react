import React from "react";
import Experience from "../components/experince";
import Projects from "../components/projects";
import ContactMe from "../components/contactMe";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
  <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 py-3">
        <a className="navbar-brand fw-bold" href="#profile">Moamel Hashim</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Profile Section */}
      <section id="about" className="container d-flex align-items-center text-center my-5 justify-content-center gap-5">
        <img src="public/images/1980.jpeg" alt="Moamel Hashim" className="rounded-circle mb-3" width="200" />
        <div className="">
        <p className="lead">Hello, I'm</p>
        <h1 className="display-4">Moamel Hashim</h1>
        <p className="fs-4 text-muted">Web developer</p>
        <div className="d-flex gap-3 justify-content-center">
          <a className="btn btn-outline-secondary" href="public/images/resume.pdf" target="_blank">Download CV</a>
          <a className="btn btn-primary" href="#contact">Contact Info</a>
        </div>
        <div className="d-flex gap-3 mt-3 justify-content-center">
          <Github/>
          <Linkedin/>
        </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container my-5">
      <div className="text-center">
        <p className="text-muted">Get To Know More</p>
        <h1 className="fw-bold">About Me</h1>
      </div>
      <div className="row align-items-center mt-5 justify-content-center">
        <div className="col-md-5 w-25 h-25">
          <img src="public/images/1994.jpeg" alt="About Me" className="img-fluid rounded" />
        </div>
        <div className="col-md-7">
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="border rounded p-3 text-center h-100">
                <i className="bi bi-award-fill display-6"></i>
                <h5 className="fw-bold mt-2">Experience</h5>
                <p className="mb-0">2+ years</p>
                <p className="text-muted">Frontend Development</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border rounded p-3 text-center h-100">
                <i className="bi bi-people-fill display-6"></i>
                <h5 className="fw-bold mt-2">Education</h5>
                <p className="mb-0">A.S degree in web development</p>
                <p className="text-muted">Software development boot camp</p>
              </div>
            </div>
          </div>
          <p className="text-muted">
            My name is Moamel Hashim and Im a former drone pilot operator I use to fly drones now I love coding and learning more about how to develop websites. The thing that I like most about being a developer is that you never stop learning.
          </p>
        </div>
      </div>
    </section>

    <section id="experience">
    <Experience/>
    </section>

    <section id="projects">
    <Projects/>
    </section>

    <section id="contact">
    <ContactMe/>
    </section>

      {/* Footer */}
      <footer className="bg-light text-center py-4">
        <div>
          <ul className="nav justify-content-center mb-3">
            <li className="nav-item"><a href="#about" className="nav-link px-2">About</a></li>
            <li className="nav-item"><a href="#experience" className="nav-link px-2">Experience</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link px-2">Projects</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>
          <p className="text-muted mb-0">&copy; 2025 all rights reserved to Moamel Hashim</p>
        </div>
      </footer>
    </div>
  );
};
