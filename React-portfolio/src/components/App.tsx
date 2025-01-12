import Header from "./Header";
import About from "./About";
import Skills from "./Skill";
import Footer from "./Footer";
import Hero from "./Hero";
import "../style.css";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
