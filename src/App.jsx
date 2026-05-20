import "./App.css";

const navItems = [
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Works", target: "portfolio" },
  { label: "Prompts", target: "prompts" },
  { label: "Process", target: "process" },
  { label: "Contact", target: "contact" },
];

const skills = [
  "AI Video Prompting",
  "Cinematic Storytelling",
  "Camera Movement Design",
  "Runway Prompt Writing",
  "Midjourney Image Prompt",
  "Concept Art Direction",
  "Scene Planning",
  "Visual Mood Design",
];

const portfolioItems = [
  {
    title: "Cyberpunk City Chase",
    description:
      "A high-speed neon chase concept built around wet roads, sharp camera cuts, drone movement, and glowing city reflections.",
    tools: "Runway, Midjourney",
    category: "Action Sequence",
    video: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  },
  {
    title: "Human and Robot Coexistence",
    description:
      "A warm sci-fi street story showing humans and robots sharing the same market, routines, and emotional city rhythm.",
    tools: "Pika, Kling",
    category: "Sci-Fi Drama",
    video: "https://media.w3.org/2010/05/bunny/trailer.mp4",
  },
  {
    title: "AI Future City",
    description:
      "A world-building prompt package for an AI-managed megacity with holographic signage, autonomous transit, and wide cinematic shots.",
    tools: "Runway, Kling",
    category: "World Building",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Neon Rain Street",
    description:
      "A moody night sequence using slow motion pedestrians, neon signs, rain particles, and reflective asphalt textures.",
    tools: "Midjourney, Pika",
    category: "Mood Film",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    title: "Android Emotional Portrait",
    description:
      "A close-up portrait direction focused on subtle facial movement, artificial tears, chrome skin, and cold rim lighting.",
    tools: "Runway, Midjourney",
    category: "Character Portrait",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    title: "Futuristic Classroom",
    description:
      "A bright future-learning concept with holographic boards, AI tutors, glass architecture, and smooth tracking movement.",
    tools: "Kling, Pika",
    category: "Education Future",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
  },
];

const showcaseVideos = [
  {
    title: "Neon Direction Reel",
    label: "Main Preview",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Synthetic City Motion",
    label: "City Concept",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    title: "AI Character Mood",
    label: "Portrait Mood",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  },
];

const promptSamples = [
  {
    title: "Neon Alley Tracking Shot",
    prompt:
      "A cinematic tracking shot through a rainy cyberpunk alley, neon signs reflecting on wet pavement, a lone character wearing a translucent tech coat, handheld camera feel, shallow depth of field, blue and magenta lighting, atmospheric mist, 24fps film look.",
    purpose: "Opening shot for a tense city chase sequence",
    mood: "Rainy, nocturnal, cinematic neon noir",
  },
  {
    title: "Android Memory Close-Up",
    prompt:
      "Extreme close-up of an android face as artificial tears form under glowing eyes, subtle micro expressions, holographic memories flickering across chrome skin, slow dolly-in, soft rim light, emotional science fiction drama, ultra detailed cinematic realism.",
    purpose: "Emotional portrait shot for an android character",
    mood: "Cold, intimate, dramatic science fiction",
  },
  {
    title: "Future Learning Lab",
    prompt:
      "Wide shot of a futuristic classroom with floating holographic diagrams, students interacting with an AI mentor, clean glass architecture, morning sunlight mixed with cyan interface glow, smooth crane movement, optimistic future documentary style.",
    purpose: "Main concept for a future education campaign",
    mood: "Optimistic, polished, intelligent tech vision",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Concept Planning",
    text: "Define the story world, visual references, emotional goal, and shot purpose before writing the first prompt.",
  },
  {
    step: "02",
    title: "Prompt Writing",
    text: "Translate subject, camera, lighting, texture, motion, and mood into tool-specific prompt structures.",
  },
  {
    step: "03",
    title: "Visual Testing",
    text: "Run image and video tests, then refine composition, pacing, prompt intensity, and visual consistency.",
  },
  {
    step: "04",
    title: "Final Direction",
    text: "Package the strongest prompt direction with shot notes, tone guidance, and production-ready revisions.",
  },
];

function App() {
  const scrollToSection = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="portfolio-site">
      <nav className="site-nav">
        <button className="brand-mark" onClick={() => scrollToSection("hero")} aria-label="Go to hero">
          AIVP
        </button>
        <div className="nav-links">
          {navItems.map((item) => (
            <button key={item.target} onClick={() => scrollToSection(item.target)}>
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <section className="hero-section" id="hero">
        <video
          className="hero-video"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
          autoPlay
          muted
          defaultMuted
          loop
          playsInline
          preload="auto"
          aria-label="Cyberpunk portfolio background video"
        />
        <div className="hero-grid"></div>
        <div className="hero-content">
          <p className="section-kicker">Prompt systems for synthetic cinema</p>
          <h1 className="glitch-title" data-text="AI Video Prompt Portfolio">
            AI Video Prompt Portfolio
          </h1>
          <h2>Cinematic AI Video Prompt Designer</h2>
          <p className="hero-description">
            Video prompt planning and cinematic concept design for Runway, Pika, Kling, and Midjourney workflows.
          </p>
          <div className="hero-actions">
            <button className="neon-button" onClick={() => scrollToSection("portfolio")}>
              View Works
            </button>
            <button className="neon-button secondary" onClick={() => scrollToSection("contact")}>
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-hud">
          <span>RUNWAY_READY</span>
          <span>PIKA_SIGNAL_88%</span>
          <span>KLING_RENDER_ON</span>
        </div>
      </section>

      <section className="content-section about-section" id="about">
        <div className="section-heading">
          <p className="section-kicker">About</p>
          <h2>Turning story, camera language, and AI prompts into cinematic direction.</h2>
        </div>
        <div className="about-layout">
          <div className="about-copy hologram-panel">
            <p>
              I design AI video prompts as production-ready scene directions. Each prompt connects story intent,
              subject behavior, camera movement, lighting, texture, and mood into a clear cinematic brief.
            </p>
            <p>
              My work focuses on storytelling, scene planning, camera motion, visual mood design, and prompt structures
              adapted for Runway, Pika, Kling, and Midjourney-based visual workflows.
            </p>
          </div>
          <aside className="profile-card hologram-panel">
            <div className="profile-avatar">AI</div>
            <h3>Prompt Director</h3>
            <p>Cinematic scene planner for AI video campaigns, short films, mood reels, and concept pitches.</p>
            <div className="profile-stats">
              <span>Scene</span>
              <strong>120+</strong>
              <span>Tools</span>
              <strong>4 Core</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="content-section" id="skills">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2>Core skills for AI video concept production</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-chip" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" id="portfolio">
        <div className="section-heading">
          <p className="section-kicker">Portfolio</p>
          <h2>Cinematic prompt concepts with moving previews</h2>
        </div>
        <div className="showcase-video-grid">
          {showcaseVideos.map((video, index) => (
            <article className={`showcase-video-card ${index === 0 ? "featured" : ""}`} key={video.title}>
              <video
                autoPlay
                muted
                defaultMuted
                loop
                playsInline
                preload="auto"
                controls={index === 0}
                disablePictureInPicture
                aria-label={`${video.title} video`}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="showcase-video-caption">
                <span>{video.label}</span>
                <h3>{video.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <article className="work-card hologram-panel" key={item.title}>
              <div className="thumbnail-wrap">
                <video
                  className="portfolio-video"
                  autoPlay
                  muted
                  defaultMuted
                  loop
                  playsInline
                  preload="auto"
                  controls
                  disablePictureInPicture
                  aria-label={`${item.title} preview video`}
                >
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <span>{item.category}</span>
              </div>
              <div className="work-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="work-meta">
                  <span>Tools</span>
                  <strong>{item.tools}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="prompts">
        <div className="section-heading">
          <p className="section-kicker">Prompt Sample</p>
          <h2>Prompt samples ready for AI video generation</h2>
        </div>
        <div className="prompt-grid">
          {promptSamples.map((sample) => (
            <article className="prompt-card hologram-panel" key={sample.title}>
              <h3>{sample.title}</h3>
              <p className="prompt-text">{sample.prompt}</p>
              <div className="prompt-info">
                <span>Purpose</span>
                <p>{sample.purpose}</p>
                <span>Mood</span>
                <p>{sample.mood}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="process">
        <div className="section-heading">
          <p className="section-kicker">Process</p>
          <h2>From visual idea to final prompt direction</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((item) => (
            <article className="process-card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="section-heading">
          <p className="section-kicker">Contact</p>
          <h2>Let us design your next AI video concept.</h2>
        </div>
        <form className="contact-form hologram-panel">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="your@email.com" />
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="Tell me about your AI video project" />
          </label>
          <button className="neon-button" type="button">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
