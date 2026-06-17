// Testimonials section — what past students say about the program.
const REVIEWS = [
  {
    quote:
      "The project-based approach made everything click. I went from zero to building full stack apps in a few months.",
    name: "Aarav Sharma",
    role: "Frontend Developer",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    quote:
      "Best decision I made for my career. The mentors actually care and the projects look great on a resume.",
    name: "Priya Patel",
    role: "Full Stack Engineer",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
  {
    quote:
      "Clear explanations, real code, and a community that keeps you going. I landed a job within weeks of finishing.",
    name: "Diego Martinez",
    role: "Node.js Developer",
    avatar: "https://i.pravatar.cc/100?img=33",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Students Say</h2>
      <p className="testimonials-subtitle">
        Real feedback from developers who completed the program.
      </p>

      <div className="testimonials-grid">
        {REVIEWS.map((r) => (
          <div className="testimonial-card" key={r.name}>
            <p className="quote">“{r.quote}”</p>
            <div className="author">
              <img src={r.avatar} alt={r.name} />
              <div>
                <h4>{r.name}</h4>
                <span>{r.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
