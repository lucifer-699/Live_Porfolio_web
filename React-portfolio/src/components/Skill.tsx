import jscript from "../assets/javascript-logo.webp";
import javaimg from "../assets/java.png";
import sql from "../assets/sql.png";
import reactimg from "../assets/react-logo.webp";
import nodeimg from "../assets/node-logo.webp";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="text">
        I specialize in creating seamless digital experiences through a
        combination of strong backend and relational database expertise. My
        skills include database design and implementation, front-end creation,
        and responsive design, alongside proficiency in tools like MSSQL, MySQL,
        Microsoft Visual Studio, and Report Builder.
      </div>

      <div className="cells">
        <div className="cell">
          <img src={javaimg} alt="Java logo" />
          <span>Java</span>
        </div>
        <div className="cell">
          <img src={sql} alt="SQL logo" />
          <span>SQL</span>
        </div>
        <div className="cell">
          <img src={jscript} alt="JavaScript logo" />
          <span>JavaScript</span>
        </div>
        <div className="cell">
          <img src={nodeimg} alt="Node.js logo" />
          <span>Node.js</span>
        </div>
        <div className="cell">
          <img src={reactimg} alt="React.js logo" />
          <span>React.js</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
