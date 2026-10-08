import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import photo from './assets/krushnal-photo.jpeg';

const projects = [
  {
    number: '01',
    title: 'MediQueue',
    category: 'HEALTHCARE / FULL STACK',
    description:
      'Hospital queue management system designed to improve patient flow, emergency handling, doctor queues, bed availability, and hospital operations.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    status: 'COMPLETED',
    source: undefined,
    live: 'https://krushnalp2007-cloud.github.io/hospital-queue-management-system/',
  },
  {
    number: '02',
    title: 'CareerPilot AI',
    category: 'AI / CAREER PLATFORM',
    description:
      'AI-powered career companion with skill analysis, learning paths, resume review and interview preparation workflows.',
    tech: ['Python', 'Streamlit', 'Gemini API', 'AI'],
    status: 'COMPLETED',
    source: 'https://lnkd.in/gx9nPiqD',
    live: 'https://lnkd.in/ggkn4EFq',
  },
  {
    number: '03',
    title: 'Smart Shopping Cart',
    category: 'IOT / E-COMMERCE',
    description:
      'Smart trolley concept combining phone-based product scanning, ESP32, TOF sensing and load-cell verification to create a faster assisted shopping experience.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'ESP32', 'HX711'],
    status: 'IN PROGRESS',
    source: undefined,
    live: undefined,
  },
  {
    number: '04',
    title: 'DevFlow AI',
    category: 'AI / DEVELOPER TOOLING',
    description:
      'Developer-focused AI application built with a FastAPI backend and React frontend, integrating Gemini-powered workflows.',
    tech: ['React', 'Vite', 'FastAPI', 'Python', 'Gemini API'],
    status: 'IN PROGRESS',
    source: undefined,
    live: undefined,
  },
];

const skills: [string, string[]][] = [
  ['PROGRAMMING', ['C', 'C++', 'Python', 'JavaScript']],
  ['FRONTEND', ['React', 'HTML', 'CSS', 'Vite']],
  ['BACKEND', ['Node.js', 'FastAPI', 'REST APIs']],
  ['DATA', ['PostgreSQL', 'SQL', 'Data Analytics']],
  ['AI', ['Gemini API', 'AI / ML', 'Streamlit']],
  ['ENGINEERING', ['DSA', 'Git', 'GitHub', 'IoT']],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    const move = (event: MouseEvent) =>
      setCursor({ x: event.clientX, y: event.clientY });

    window.addEventListener('mousemove', move);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.removeEventListener('mousemove', move);
    };
  }, []);

  const nav = ['about', 'projects', 'skills', 'journey', 'contact'];

  return (
    <main>
      <motion.div
        className="cursor"
        animate={{ x: cursor.x - 5, y: cursor.y - 5 }}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
      />

      <header className="nav">
        <a className="brand" href="#home">
          KP<span>.</span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.toUpperCase()}
            </a>
          ))}
        </nav>

        <a
          className="resume-btn"
          href="./resume.pdf"
          download="Krushnal-Patil-Resume.pdf"
        >
          RESUME <span>↓</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </header>

      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            COMPUTER SCIENCE & ENGINEERING • KOLHAPUR
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            KRUSHNAL
            <br />
            <em>PATIL</em>
          </motion.h1>

          <motion.div
            className="role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span /> SOFTWARE DEVELOPER
          </motion.div>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            I build practical software, AI-powered tools and real-world
            systems that turn ideas into useful products.
          </motion.p>

          <div className="hero-actions">
            <a className="gold-btn" href="#projects">
              EXPLORE MY WORK <span>→</span>
            </a>

            <a className="line-btn" href="#contact">
              CONTACT ME
            </a>
          </div>

          <div className="socials">
            <a
              href="https://github.com/krushnalp2007-cloud"
              target="_blank"
              rel="noreferrer"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/krushnal-patil-81741b385"
              target="_blank"
              rel="noreferrer"
            >
              IN
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="gold-orbit orbit-one" />
          <div className="gold-orbit orbit-two" />

          <motion.div
            className="portrait-wrap"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.25 }}
          >
            <img src={photo} alt="Krushnal Patil" className="portrait" />
          </motion.div>

          <motion.div
            className="floating-note note-one"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            BUILD
            <br />
            LEARN
            <br />
            SOLVE
          </motion.div>

          <motion.div
            className="floating-note note-two"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            C++
            <br />
            PYTHON
            <br />
            AI / ML
          </motion.div>

          <div className="signature">
            Krushnal
            <br />
            Patil
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>04</strong>
          <span>MAJOR PROJECTS</span>
        </div>

        <div>
          <strong>03</strong>
          <span>AI FOCUS</span>
        </div>

        <div>
          <strong>∞</strong>
          <span>IDEAS TO BUILD</span>
        </div>
      </section>

      <section id="about" className="content-section">
        <SectionLabel number="01" text="ABOUT ME" />

        <div className="about-grid">
          <div>
            <h2>
              I DON'T JUST WRITE CODE.
              <br />
              <span>I BUILD WHAT'S NEXT.</span>
            </h2>

            <p className="lead">
              I'm <b>Krushnal Patil</b>, a Computer Science & Engineering
              student and software developer focused on building real-world
              applications with modern web, backend, database and AI
              technologies.
            </p>

            <p className="body-copy">
              I enjoy working across the stack—from designing interfaces and
              APIs to database architecture and AI integrations. My goal is to
              keep learning, solve meaningful problems and grow into a strong
              software engineer.
            </p>
          </div>

          <div className="about-card">
            <img src={photo} alt="Krushnal Patil portrait" />
            <div className="card-caption">
              SOFTWARE DEVELOPER / BUILDER
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="content-section projects-section">
        <SectionLabel number="02" text="SELECTED WORK" />

        <h2 className="section-title">
          PROJECTS
          <br />
          <span>THAT MATTER.</span>
        </h2>

        <div className="project-stack">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="project-top">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </div>

              <div className="project-main">
                <div>
                  <div
                    className={`project-status ${
                      project.status === 'COMPLETED'
                        ? 'completed'
                        : 'progress'
                    }`}
                  >
                    {project.status}
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-side">
                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.source && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                      >
                        SOURCE CODE ↗
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LIVE DEMO ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="project-line"
                style={{ width: `${30 + index * 18}%` }}
              />
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="content-section skills-section">
        <SectionLabel number="03" text="TECH MATRIX" />

        <h2 className="section-title">
          TOOLS I
          <br />
          <span>BUILD WITH.</span>
        </h2>

        <div className="skills-grid">
          {skills.map(([title, items]) => (
            <motion.div
              className="skill-card"
              key={title}
              whileHover={{ y: -5 }}
            >
              <div className="skill-index">{title}</div>

              <div className="skill-items">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="journey" className="content-section journey-section">
        <SectionLabel number="04" text="MY JOURNEY" />

        <h2 className="section-title">
          LEARNING.
          <br />
          <span>BUILDING. GROWING.</span>
        </h2>

        <div className="timeline">
          <Journey
            year="CURRENT"
            title="B.E. / B.TECH — COMPUTER SCIENCE & ENGINEERING"
            org="KIT / KITCoEK, KOLHAPUR"
            text="Second-year CSE student building software projects, strengthening DSA and exploring full-stack and AI engineering."
          />

          <Journey
            year="2026"
            title="NATIONAL HACKATHON BUILDS"
            org="SIH / AI & PRODUCT BUILDS"
            text="Working on problem-focused products including MediQueue and AI-driven career tooling."
          />

          <Journey
            year="ONGOING"
            title="PROJECT-BASED ENGINEERING"
            org="GITHUB / OPEN SOURCE STYLE WORKFLOW"
            text="Building and iterating on MediQueue, Smart Shopping Cart, CareerPilot AI and DevFlow AI."
          />
        </div>
      </section>

      <section id="contact" className="contact-section">
        <SectionLabel number="05" text="CONTACT" />

        <div className="contact-grid">
          <div>
            <h2>
              LET'S BUILD
              <br />
              <span>SOMETHING USEFUL.</span>
            </h2>

            <p>
              Have a project, collaboration or opportunity in mind? The
              fastest way to reach me is through LinkedIn or GitHub.
            </p>

            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/krushnal-patil-81741b385"
                target="_blank"
                rel="noreferrer"
              >
                LINKEDIN ↗
              </a>

              <a
                href="https://github.com/krushnalp2007-cloud"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB ↗
              </a>
            </div>
          </div>

          <div className="contact-terminal">
            <div className="terminal-head">
              <span>KRUSHNAL@PORTFOLIO</span>
              <span>● ● ●</span>
            </div>

            <div className="terminal-body">
              <p>
                <i>01</i> const goal = "build useful software";
              </p>

              <p>
                <i>02</i> const focus = ["C++", "Python", "React", "AI"];
              </p>

              <p>
                <i>03</i> const mindset = "learn → build → improve";
              </p>

              <p className="terminal-cursor">_</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>KP // KRUSHNAL PATIL</span>
        <span>SOFTWARE DEVELOPER • EDITION 2026</span>
        <span>MADE WITH PURPOSE</span>
      </footer>
    </main>
  );
}

function SectionLabel({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="section-label">
      <span>
        {number} / {text}
      </span>
      <i />
    </div>
  );
}

function Journey({
  year,
  title,
  org,
  text,
}: {
  year: string;
  title: string;
  org: string;
  text: string;
}) {
  return (
    <motion.div
      className="journey-row"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="year">{year}</div>
      <div className="node" />

      <div>
        <h3>{title}</h3>
        <b>{org}</b>
        <p>{text}</p>
      </div>
    </motion.div>
  );
}

export default App;