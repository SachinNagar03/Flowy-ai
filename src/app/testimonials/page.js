import "./testimonials.css";

export default function TestimonialsPage() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="bg-glow"></div>

      <div className="test-container">
        <div className="section-header">
          <h2>
            Loved by <span className="text-gradient">teams worldwide</span>
          </h2>
          <p className="section-subtitle">
            See what our customers have to say about their experience with Flowly.
          </p>
        </div>

        <div className="testimonials-grid">
          <Testimonial
            quote="Flowly transformed how our team works. We shipped our product 3 months ahead of schedule."
            avatar="SC"
            name="Sarah Chen"
            role="CTO at TechStart"
          />

          <Testimonial
            quote="The AI features are incredible. It's like having an extra team member who never sleeps."
            avatar="MJ"
            name="Marcus Johnson"
            role="Product Lead at Innovate"
          />

          <Testimonial
            quote="Finally, a tool that actually makes project management enjoyable. Our team adoption was instant."
            avatar="ER"
            name="Emily Rodriguez"
            role="Engineering Manager at Scale"
          />
        </div>
      </div>
    </section>
  );
}

function Testimonial({ quote, avatar, name, role }) {
  return (
    <div className="testimonial-card">
      <blockquote>“{quote}”</blockquote>

      <div className="author-info">
        <div className="avatar">{avatar}</div>
        <div>
          <div className="author-name">{name}</div>
          <div className="author-role">{role}</div>
        </div>
      </div>
    </div>
  );
}
