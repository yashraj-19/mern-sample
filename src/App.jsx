import Hero from './components/Hero';
import About from './components/About';
import Section from './components/Section';
import Testimonials from './components/Testimonials';


const IMG = "https://images.pexels.com/photos/3584973/pexels-photo-3584973.jpeg";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Build full stack web apps with MongoDB, Express, React and Node.js through hands on, project based learning.";

function App() {
  return (
    <>
      {/* top nav */}
      <nav className="navbar">
        <div className="logo">MERN Academy</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#join">Join</a></li>
        </ul>
      </nav>

      {/* hero card */}
      <Hero />

      {/* about section */}
      <About />

      {/* section — image RIGHT, text LEFT */}
      <Section
        reverse
        image={IMG}
        title="Learn By Building Real Projects"
        text={LOREM}
        meta={{ date: "June 20, 2026", time: "06:00 PM", author: "Jane Smith" }}
      />

      {/* features section */}
      <section className="features" id="features">
        <h2>What You Will Learn</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">⚛️</div>
            <h3>Frontend with React</h3>
            <p>Components, hooks, state and building modern user interfaces.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🟢</div>
            <h3>Backend with Node</h3>
            <p>REST APIs with Express and authentication done the right way.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🍃</div>
            <h3>Database with MongoDB</h3>
            <p>Model data, run queries and connect it all into one app.</p>
          </div>
        </div>
      </section>

      {/* testimonials section */}
      <Testimonials />

      {/* call to action */}
      <section className="cta" id="join">
        <h2>Ready to start your MERN journey?</h2>
        <p>Join the next batch and become a full stack developer.</p>
        <a href="#" className="btn">Enroll Now</a>
      </section>

      {/* footer */}
      <footer className="footer">
        © 2026 MERN Academy. All rights reserved.
      </footer>
    </>
  );
}

export default App;
