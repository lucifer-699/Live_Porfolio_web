import backgroung from "../assets/sishir.png";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="text">
        <h2>Hi, I'm Sishir 👋</h2>
        <p>
          Welcome to my portfolio! I’m Sishir Shrestha, a backend developer, web
          designer, and data analyst, passionate about turning ideas into
          engaging, functional, and visually appealing experiences. With a
          strong background in MSSQL, SQL, and Java, I strive to craft designs
          that not only look great but also deliver results.
        </p>
      </div>

      <div className="headshot">
        <img src={backgroung} alt="Sishir Shrestha" />
      </div>
    </section>
  );
};

export default Hero;
