// Hero card — image on top, text inside a raised card.
const IMG = "https://images.pexels.com/photos/3584973/pexels-photo-3584973.jpeg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">
        <div className="hero-card-image">
          <img src={IMG} alt="MERN Stack Training" />
        </div>

        <div className="hero-card-body">
          <span className="badge">New Batch</span>
          <h1>MERN Stack Training</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Become a
            full stack developer with MongoDB, Express, React and Node.js.
          </p>

          <div className="meta">
            <span>📅 June 17, 2026</span>
            <span>⏰ 10:00 AM</span>
            <span>✍️ John Doe</span>
          </div>

          <a href="#join" className="btn">Enroll Now</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
