// Reusable hero/section: image on one side, text on the other.
// Set reverse={true} to flip the image to the right side.
function Section({ image, title, text, meta, reverse = false }) {
  return (
    <section className={reverse ? "section reverse" : "section"}>
      <div className="section-image">
        <img src={image} alt={title} />
      </div>

      <div className="section-text">
        <h1>{title}</h1>
        <p>{text}</p>

        {meta && (
          <div className="meta">
            <span>📅 {meta.date}</span>
            <span>⏰ {meta.time}</span>
            <span>✍️ {meta.author}</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default Section;
