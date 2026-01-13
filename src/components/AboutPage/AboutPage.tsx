export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1 className="about-main-title">About Me</h1>
        <p className="about-intro">
          Hey, I'm Hammad — a Software Engineer passionate about building clean, efficient, and impactful software. 
          I started coding seriously in 2022 and have been hooked ever since. I love open-source, exploring AI/ML, 
          containerization with Docker, and creating tools that solve real problems.
        </p>
        <p className="about-intro">
          Outside of code, I enjoy [add your hobbies here — e.g., gaming, reading sci-fi, fitness, traveling, playing guitar, etc.]. 
          This site is my corner of the internet — no tracking, no ads, just things I've built and learned.
        </p>
      </section>

      <hr className="about-divider" />

      <section className="about-section">
        <h2 className="about-section-title">What I'm Doing Now</h2>
        <p className="about-updated">Updated January 2026</p>
        <ul className="about-list">
          <li>Building and refining this personal portfolio</li>
          <li>Working on [current job/freelance/project]</li>
          <li>Learning more about [e.g., advanced React patterns, machine learning, system design]</li>
          <li>Exploring [personal activity, e.g., new games, books, or hobbies]</li>
        </ul>
      </section>

      <hr className="about-divider" />

      <section className="about-section">
        <h2 className="about-section-title">Skills & Tools</h2>
        <h3 className="about-sub-title">Languages & Frameworks</h3>
        <ul className="about-list">
          <li>JavaScript / TypeScript</li>
          <li>React (hooks, context, concurrent features)</li>
          <li>Node.js / Express</li>
          <li>HTML / CSS (responsive design)</li>
        </ul>

        <h3 className="about-sub-title">Tools & DevOps</h3>
        <ul className="about-list">
          <li>Git & GitHub (including Actions for CI/CD)</li>
          <li>Docker & containerization</li>
          <li>Vite / Webpack</li>
          <li>VS Code, Linux</li>
        </ul>

        <h3 className="about-sub-title">Interested In</h3>
        <ul className="about-list">
          <li>Artificial Intelligence & Machine Learning</li>
          <li>Open-source contributions</li>
          <li>System design & scalable architecture</li>
        </ul>
      </section>

      <hr className="about-divider" />

      <section className="about-section">
        <h2 className="about-section-title">Contact</h2>
        <ul className="about-list">
          <li>Email: [your-email@example.com]</li>
          <li>GitHub: <a href="https://github.com/qhammad99" className="about-link">qhammad99</a></li>
          <li>LinkedIn: [your-linkedin-url]</li>
          <li>WhatsApp: [link or number]</li>
        </ul>
      </section>
    </div>
  );
};