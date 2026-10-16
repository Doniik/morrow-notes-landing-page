import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Command,
  FileText,
  Folder,
  Hash,
  Layers3,
  LockKeyhole,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    number: "01",
    title: "Catch every thought",
    description:
      "Get ideas out of your head and onto the page. Start writing instantly, without getting in your own way.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "A place for everything",
    description:
      "Keep class notes, projects, plans, and little sparks of inspiration neatly organised in one space.",
  },
  {
    icon: Search,
    number: "03",
    title: "Find it in a flash",
    description:
      "Search across your notes and use tags to get back to the thought you need, right when you need it.",
  },
];

const notes = [
  { color: "lavender", title: "Ideas for the next big thing", label: "Ideas", time: "Edited 2m ago" },
  { color: "peach", title: "Things worth remembering", label: "Personal", time: "Edited yesterday" },
  { color: "mint", title: "Project roadmap", label: "Work", time: "Edited Monday" },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Morrow home">
          <BrandMark />
          <span>morrow</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#get-started">
          Get started <ArrowRight size={16} />
        </a>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14} /> YOUR MIND, WITH MORE ROOM</div>
          <h1>Make room for<br />your <span>thoughts.</span></h1>
          <p className="hero-description">
            A calmer place for all the things on your mind. Capture ideas, organise your notes, and get back to what matters.
          </p>
          <div className="hero-actions" id="get-started">
            <a className="button button-dark" href="#features">Find your flow <ArrowRight size={17} /></a>
            <a className="text-link" href="#how-it-works">Take a quick look <ArrowDownRight size={16} /></a>
          </div>
          <div className="social-proof">
            <div className="avatar-stack" aria-hidden="true"><span>J</span><span>M</span><span>A</span><span>K</span></div>
            <div><strong>A little space to think.</strong><small>Made for curious minds everywhere.</small></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Preview of the Morrow notes interface">
          <div className="decor decor-one" />
          <div className="decor decor-two" />
          <div className="app-window">
            <aside className="mock-sidebar">
              <div className="mock-brand"><BrandMark /><span>morrow</span></div>
              <div className="mock-search"><Search size={13} /><span>Search anything</span><kbd>⌘ K</kbd></div>
              <div className="sidebar-label">WORKSPACE</div>
              <div className="side-item active"><FileText size={15} /> All notes <span>12</span></div>
              <div className="side-item"><Folder size={15} /> My folders</div>
              <div className="side-item"><Hash size={15} /> Tags</div>
              <div className="sidebar-label recent-label">YOUR FOLDERS</div>
              <div className="folder-item"><span className="folder-dot lilac" /> Personal</div>
              <div className="folder-item"><span className="folder-dot orange" /> University</div>
              <div className="folder-item"><span className="folder-dot green" /> Projects</div>
              <div className="sidebar-bottom"><div className="profile-avatar">D</div><div><b>Your workspace</b><small>Free plan</small></div><span className="dots">···</span></div>
            </aside>
            <div className="mock-content">
              <div className="mock-topline"><span>All notes <span className="muted-count">12</span></span><button type="button" className="new-note"><span>+</span> New note</button></div>
              <div className="mock-heading"><h3>Your thoughts,<br />all in one place.</h3><p>A little progress is still progress.</p></div>
              <div className="mock-note-list">
                {notes.map((note) => (
                  <div className="mock-note" key={note.title}>
                    <div className={`note-icon ${note.color}`}><FileText size={16} /></div>
                    <div className="note-info"><b>{note.title}</b><small>{note.time}</small></div>
                    <span className={`tag tag-${note.color}`}>{note.label}</span>
                  </div>
                ))}
              </div>
              <div className="daily-card"><div className="daily-icon"><Sparkles size={17} /></div><div><b>A gentle reminder</b><p>You don't have to figure it all out today.</p></div></div>
            </div>
          </div>
          <div className="floating-note"><span className="floating-icon"><Zap size={15} /></span><div><b>Thought captured</b><small>That's one less thing to remember.</small></div><Check size={16} className="check-icon" /></div>
        </div>
      </section>

      <div className="trust-strip">
        <span>LESS CLUTTER IN YOUR HEAD.</span><span className="trust-line" /><span>MORE SPACE FOR WHAT'S NEXT.</span>
      </div>

      <section className="features-section section-wrap" id="features">
        <div className="section-intro">
          <div className="eyebrow"><span className="eyebrow-dot" /> THE GOOD STUFF</div>
          <h2>Simple by nature.<br /><span>Useful by design.</span></h2>
          <p>All the essentials for getting your thoughts together, without the extra noise.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="feature-card" key={feature.number}>
                <div className="feature-card-top"><div className="feature-icon"><Icon size={21} strokeWidth={1.7} /></div><span>{feature.number}</span></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-arrow"><ArrowRight size={17} /></div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="quote-section section-wrap" id="how-it-works">
        <div className="quote-mark">“</div>
        <p>Your notes don't need to be perfect.<br />They just need a place to begin.</p>
        <span>YOUR SPACE. YOUR PACE.</span>
      </section>

      <section className="bottom-cta section-wrap" id="about">
        <div className="cta-spark"><Sparkles size={21} /></div>
        <div><div className="eyebrow">A FRESH PAGE AWAITS</div><h2>Ready to clear a little space?</h2><p>Start with one thought. See where it takes you.</p></div>
        <a className="button button-light" href="#home">Let's get started <ArrowRight size={17} /></a>
        <div className="cta-orb orb-a" /><div className="cta-orb orb-b" />
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><BrandMark /><span>morrow</span></a>
        <p>A little more room to think.</p>
        <div className="footer-links"><a href="#home">Home</a><a href="#features">Features</a><a href="#about">About</a><a href="mailto:hello@morrow.example">Contact</a></div>
        <div className="footer-bottom"><span>© 2026 Morrow Notes. Made for your next thought.</span><span className="footer-privacy"><LockKeyhole size={12} /> Your space, your way.</span></div>
      </footer>
    </main>
  );
}
