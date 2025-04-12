import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const projects = [
  {
    title: 'Agents Showcase',
    image: '/images/agent.png',
    github: 'https://github.com/moamel-hashim/agent-show-case',
    liveDemo: 'https://moamel-hashim.github.io/agent-show-case/'
  },
  {
    title: 'Dad Jokes',
    image: '/images/dadjokes.png',
    github: 'https://github.com/moamel-hashim/jquery-dad-jokes',
    liveDemo: 'https://moamel-hashim.github.io/jquery-dad-jokes/'
  },
  {
    title: 'Code Journal',
    image: '/images/codejournal.png',
    github: 'https://github.com/moamel-hashim/code-journal',
    liveDemo: 'https://moamel-hashim.github.io/code-journal/'
  }
];

const Projects = () => {
  return (
    <section className="container my-5">
      <div className="text-center mb-5">
        <p className="text-muted">Browse My Recent</p>
        <h1 className="fw-bold">Projects</h1>
      </div>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 text-center border rounded p-3">
              <img src={project.image} className="card-img-top rounded" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <a href={project.github} className="btn btn-outline-dark">Github</a>
                  <a href={project.liveDemo} className="btn btn-outline-dark">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
