const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-grid">
          <div className="nav-left">
            <a href="#">Sishir Shrestha</a>
          </div>

          <div className="nav-center">
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-right">
            <a
              href="https://github.com/lucifer-699"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
              <span>Github</span>
            </a>

            <a href="https://www.linkedin.com/in/sishir-shrestha-57a50b1b9/">
              <i className="fa-brands fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>

            <a href="mailto:sishershrestha000@gmail.com">
              <i className="fa-solid fa-envelope"></i>
              <span>Email</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
