const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="group">
        <div className="text">
          I'm always excited to connect with fellow tech enthusiasts, potential
          collaborators, or anyone interested in my work. Whether you're looking
          for assistance with IT projects, curious about my skills, or want to
          discuss opportunities, feel free to reach out. I'm eager to engage
          with the tech community and continue growing in my field.
        </div>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="message">Message</label>
          <textarea name="message" cols={30} rows={10}></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
