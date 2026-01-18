export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-photo-container">
            <img src="src/assets/Photu.jpg" alt="Neevesh Jain" className="hero-photo" />
        </div>
        <div className="hero-text">
          <h1>I'm Neevesh Jain.</h1>
          <h2>Software Development Engineer at Yardi</h2>
          <p>
            I specialize in building scalable enterprise systems and high-performance web applications. 
            My work focuses on creating robust backend architectures and seamless frontend experiences 
            using modern technologies.
          </p>
          <div className="hero-social-links">
            <a href="mailto:neeveshjain27@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/neevesh-jain/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/neeveshjain" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="Neevesh Jain - Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}
