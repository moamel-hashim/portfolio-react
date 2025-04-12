import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';


const skillsFrontend = [
  { name: 'HTML', level: 'Experienced' },
  { name: 'CSS', level: 'Experienced' },
  { name: 'SASS', level: 'Intermediate' },
  { name: 'JavaScript', level: 'Experienced' },
  { name: 'TypeScript', level: 'Basic' },
  { name: 'Material UI', level: 'Intermediate' },
  {name: 'React.js', level: 'Experienced'},
  {name: 'Angular', level: 'Intermediate'},
];

const skillsBackend = [
  { name: 'PostgreSQL', level: 'Experienced' },
  { name: 'Node JS', level: 'Experienced' },
  { name: 'Express JS', level: 'Experienced' },
  { name: 'Git', level: 'Intermediate' },
  {name: 'PHP', level: 'Intermediate'},
  {name: 'MySQL', level: 'Intermediate'},
];

const SkillItem = ({ name, level }) => (
  <div className="d-flex align-items-center mb-3">
    <i className="bi bi-patch-check-fill me-3 fs-4"></i>
    <div>
      <strong>{name}</strong>
      <p className="mb-0 text-muted">{level}</p>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section className="my-5">
      <Container>
        <div className="text-center mb-5">
          <p className="text-muted">Explore My</p>
          <h1 className="fw-bold">Experience</h1>
        </div>
        <Row className="gy-4">
          <Col md={6}>
            <Card className="p-4 border rounded">
              <h4 className="fw-semibold mb-4">Frontend Development</h4>
              {skillsFrontend.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </Card>
          </Col>
          <Col md={6}>
            <Card className="p-4 border rounded">
              <h4 className="fw-semibold mb-4">Backend Development</h4>
              {skillsBackend.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


export default Experience;
