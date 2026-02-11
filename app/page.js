import ScrollAnimations from './components/ScrollAnimations'
import blogs from './data/blogs.json'

export default function Home() {
  return (
    <main>
      <ScrollAnimations />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-bg-layer"></div>
        {/* Massive Background Element to fill void */}
        <div className="hero-void-filler">DOMINATE</div>

        <div className="hero-content">
          <span className="hero-label">SENIOR LEAD ENGINEER // AI SPECIALIST</span>
          <h1 className="hero-title">
            ARCHISH<br />PATEL
          </h1>
          <p className="hero-statement">
            The Evolving Veteran | Forging Intelligent Systems That Dominate the Digital Battlefield.
          </p>
          <div className="hero-cta">
            <a href="#work" className="cta-btn cta-primary">
              <span>View The War Path</span>
            </a>
            <a href="#contact" className="cta-btn cta-secondary">
              <span>Deploy Me</span>
            </a>
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section className="philosophy">
        <h2 className="section-title"><span>01.</span> MANIFESTO</h2>
        <div className="philosophy-grid">
          <div className="philosophy-item">
            <div className="philosophy-number">01</div>
            <p className="philosophy-text">
              AUTOMATE OR DIE.
            </p>
          </div>
          <div className="philosophy-item">
            <div className="philosophy-number">02</div>
            <p className="philosophy-text">
              99.9% IS FAILURE. 100% IS BARE MINIMUM.
            </p>
          </div>
          <div className="philosophy-item">
            <div className="philosophy-number">03</div>
            <p className="philosophy-text">
              AI ISN'T THE FUTURE. IT'S THE WEAPON.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="about">
        <h2 className="section-title"><span>02.</span> IMPACT</h2>
        <div className="about-cards">
          <div className="about-card">
            <div className="about-card-content">
              <div className="about-number">10+</div>
              <div className="about-label">YEARS IN THE TRENCHES</div>
            </div>
          </div>
          <div className="about-card">
            <div className="about-card-content">
              <div className="about-number">50+</div>
              <div className="about-label">PROJECTS SHIPPED</div>
            </div>
          </div>
          <div className="about-card">
            <div className="about-card-content">
              <div className="about-number">AWS</div>
              <div className="about-label">CLOUD ARCHITECT</div>
            </div>
          </div>
          <div className="about-card">
            <div className="about-card-content">
              <div className="about-number">AI</div>
              <div className="about-label">SYSTEMS SPECIALIST</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION - NEW */}
      <section id="weaponry" className="philosophy">
        <h2 className="section-title"><span>03.</span> WEAPONRY</h2>
        <div className="philosophy-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <div className="philosophy-item">
            <div className="philosophy-number">CORE</div>
            <p className="experience-desc" style={{ fontWeight: 700, color: 'var(--text)' }}>
              PHP (Laravel), Python (Django, FastAPI), JavaScript
            </p>
          </div>
          <div className="philosophy-item">
            <div className="philosophy-number">CLOUD</div>
            <p className="experience-desc" style={{ fontWeight: 700, color: 'var(--text)' }}>
              AWS Lambda, Bedrock, Redshift, CDK, Docker
            </p>
          </div>
          <div className="philosophy-item">
            <div className="philosophy-number">INTELLIGENCE</div>
            <p className="experience-desc" style={{ fontWeight: 700, color: 'var(--text)' }}>
              TensorFlow, Prompt Engineering, Selenium Bots
            </p>
          </div>
          <div className="philosophy-item">
            <div className="philosophy-number">COMMERCE</div>
            <p className="experience-desc" style={{ fontWeight: 700, color: 'var(--text)' }}>
              Shopify API, Stripe, Third-Party Integrations
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="work" className="experience">
        <h2 className="section-title"><span>04.</span> WAR PATH</h2>
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-period">2016 — PRESENT</div>
            <h3 className="experience-role">Lead Senior Engineer</h3>
            <div className="experience-company">Crest Info. Systems</div>
            <p className="experience-desc">
              Commanding the full development lifecycle. Built AI marketing chatbots with AWS Bedrock. Created undetected Selenium bots to automate complex manual workflows. Optimized infrastructure with AWS CDK for maximum efficiency. Mentoring the next generation of code warriors.
            </p>
          </div>

          <div className="experience-item">
            <div className="experience-period">2016 — 2016</div>
            <h3 className="experience-role">Software Engineer</h3>
            <div className="experience-company">Doctor Stay Tech</div>
            <p className="experience-desc">
              Engineered critical healthcare admin panels. Secured patient data with MS SQL Server reliability. Built the backbone for doctor-patient connectivity.
            </p>
          </div>

          <div className="experience-item">
            <div className="experience-period">2014 — 2015</div>
            <h3 className="experience-role">Junior Engineer</h3>
            <div className="experience-company">Jack Solutions</div>
            <p className="experience-desc">
              Pioneered social analytics platforms ('Bionic') utilizing Facebook & Twitter APIs. Visualized data chaos into actionable dashboards.
            </p>
          </div>
        </div>
      </section>




      {/* WRITING SECTION */}
      <section id="writing" className="writing">
        <h2 className="section-title"><span>05.</span> INTEL</h2>
        <div className="writing-grid">
          {blogs.slice(0, 3).map((blog) => (
            <a
              key={blog.id}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="writing-card"
            >
              <div className="writing-info">
                <div className="writing-platform">{blog.platform}</div>
                <h3 className="writing-title">{blog.title}</h3>
                <p className="writing-excerpt">{blog.description}</p>
                <div className="writing-tags">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="writing-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <span className="contact-link" style={{ margin: 0, fontSize: '2rem' }}>🡪</span>
            </a>
          ))}
        </div>

        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
          <a href="/blog" className="cta-btn cta-secondary">
            <span>VIEW ALL INTEL</span>
          </a>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact">
        <div className="contact-content">
          <h2 className="contact-title">
            READY TO<br />DOMINATE?
          </h2>
          <p className="contact-subtitle">
            Surat, India. Ready for Global Impact.
          </p>
          <div className="contact-links">
            <a href="mailto:p.archish@live.com" className="contact-link">
              <span>p.archish@live.com</span>
            </a>
            <a href="tel:+919913750263" className="contact-link">
              <span>+91 99137 50263</span>
            </a>
            <a
              href="https://linkedin.com/in/archishpatel"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>LINKEDIN</span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Archish Patel // NO SURVIVORS.</p>
      </footer>
    </main>
  )
}
