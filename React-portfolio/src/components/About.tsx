import React from "react";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/cv.pdf";
    link.download = "Sishir_Shrestha_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about-layout">
      <div className="about-left">
        <h2>About Me</h2>
        <p>
          Hi, I'm Sishir Shrestha, a Data analyst and Backend Java developer
          with over 1.5 years of experience in MSSQL and entry-level knowledge
          in Java programming with the Spring Boot framework!
        </p>
        <button onClick={handleDownload} className="download-cv">
          Download CV
        </button>
      </div>
      <div className="about-right">
        <section id="about" className="about-section">
          <div className="about-thumb">
            <div className="row">
              <div className="col-lg-6 col-6 featured-border-bottom py-2">
                <strong className="featured-numbers">1.5+</strong>
                <p className="featured-text">Years of Experience</p>
              </div>
              <div className="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">
                <strong className="featured-numbers">2</strong>
                <p className="featured-text">Company Affiliated</p>
              </div>
              <div className="col-lg-6 col-6 pt-4">
                <strong className="featured-numbers">20+</strong>
                <p className="featured-text">Projects Finished</p>
              </div>
              <div className="col-lg-6 col-6 featured-border-start ps-5 pt-4">
                <strong className="featured-numbers">3+</strong>
                <p className="featured-text">Certifications</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
