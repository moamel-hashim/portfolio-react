import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactMe = () => {
  return (
    <section className="container my-5">
      <div className="text-center">
        <p className="text-muted">Get in Touch</p>
        <h1 className="fw-bold">Contact Me</h1>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
