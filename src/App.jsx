import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code2,
  Database,
  Cloud,
  Server,
} from "lucide-react";

import "./App.css";

function App() {
  const skills = {
    Frontend: [
      "Angular",
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "RxJS",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      ".NET",
    ],
    Database: ["MongoDB", "SQL"],
    "Cloud & AI": [
      "AWS",
      "Docker",
      "CI/CD",
      "RAG",
      "Prompt Engineering",
    ],
    Tools: [
      "Git",
      "GitHub",
      "Agile",
      "Scrum",
      "Jasmine",
      "Karma",
    ],
  };

  const experiences = [
    {
      company: "PAIX SERVICES INDIA PVT LTD",
      role: "Junior Software Engineer",
      period: "Nov 2024 – Feb 2026",
      points: [
        "Developed scalable Angular applications using Angular, TypeScript, JavaScript, RxJS, and reusable UI components.",
        "Worked with React.js, Node.js, Express.js, and MongoDB for full-stack development.",
        "Integrated REST APIs and authentication for enterprise application workflows.",
        "Created 200+ unit tests using Jasmine and Karma, achieving 80% code coverage.",
        "Collaborated in Agile teams across development, debugging, testing, and deployment.",
      ],
    },
    {
      company: "IDC ENGINEERING INDIA PRIVATE LTD",
      role: "Graduate Engineer Trainee",
      period: "May 2022 – Apr 2024",
      points: [
        "Developed and maintained web applications using Angular, TypeScript, JavaScript, HTML, and CSS.",
        "Built responsive and reusable Angular components and REST API integrations.",
        "Worked on database-driven modules and workflow management systems.",
        "Contributed to HR and enterprise workflow applications.",
      ],
    },
  ];

  const projects = [
    {
      title: "Movie Ticket Booking Platform",
      description:
        "A full-stack movie booking platform with movie search, theatre and showtime selection, seat booking, authentication, payments, and booking management.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Razorpay",
      ],
      github: "https://github.com/Abitha22-png",
      live: "https://movie-ticket-booking-platform.netlify.app/",
    },
    {
      title: "Healthcare Inpatient Management System",
      description:
        "An enterprise healthcare application supporting patient admission, treatment tracking, billing, and clinical workflows.",
      technologies: [
        "Angular",
        "TypeScript",
        ".NET",
        "REST APIs",
        "RabbitMQ",
        "SQL",
      ],
    },
  ];

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            AB
          </a>

          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section id="home" className="hero section">
          <div className="hero-content">
            <div className="hero-label">
              <span></span>
              Available for opportunities
            </div>

            <h1>
              Hi, I'm <span>Abitha Balaguru</span>
            </h1>

            <h2>Full Stack Developer</h2>

            <p className="hero-description">
              Building scalable and user-focused web applications with
              Angular, React, Node.js, TypeScript, and modern backend
              technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Work
                <ArrowUpRight size={18} />
              </a>

           <a
  href="/Abitha_Balaguru_Resume.pdf"
  download="Abitha_Balaguru_Resume.pdf"
  className="primary-button"
>
  <Download size={17} />
  Download Resume
</a>
            </div>

            <div className="hero-links">
              <a
                href="https://www.linkedin.com/in/abitha-balaguru-906321212"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Abitha22-png"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a href="mailto:guruabitha2000@gmail.com">
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="code-window">
              <div className="window-header">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <pre>
{`const developer = {
  name: "Abitha Balaguru",
  role: "Full Stack Developer",
  experience: "3.4+ years",

  frontend: [
    "Angular",
    "React",
    "TypeScript"
  ],

  backend: [
    "Node.js",
    "Express.js"
  ],

  database: [
    "MongoDB",
    "SQL"
  ],

  focus: [
    "Full Stack",
    "Cloud",
    "AI"
  ]
};`}
              </pre>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-heading">
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <div>
              <h3>
                Software Engineer focused on building reliable web
                applications.
              </h3>
            </div>

            <div className="about-text">
              <p>
                I'm a Full Stack Developer with 3.4 years of professional
                experience building enterprise web applications using
                Angular, TypeScript, JavaScript, and REST APIs.
              </p>

              <p>
                I have experience across frontend and backend development
                with Angular, React, Node.js, Express.js, MongoDB, and SQL.
                My work includes reusable UI components, API integration,
                authentication, testing, and enterprise workflows.
              </p>

              <p>
                I'm also expanding my expertise in cloud and AI technologies,
                including AWS, Docker, CI/CD, RAG, and Prompt Engineering.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-heading">
            <h2>Technical Skills</h2>
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-card" key={category}>
                <div className="skill-icon">
                  {category === "Frontend" && <Code2 size={22} />}
                  {category === "Backend" && <Server size={22} />}
                  {category === "Database" && <Database size={22} />}
                  {category === "Cloud & AI" && <Cloud size={22} />}
                  {category === "Tools" && <Code2 size={22} />}
                </div>

                <h3>{category}</h3>

                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section-heading">
            <h2>Professional Experience</h2>
          </div>

          <div className="experience-list">
            {experiences.map((experience, index) => (
              <div
                className="experience-item"
                key={experience.company}
              >
                <div className="experience-number">
                  0{index + 1}
                </div>

                <div className="experience-content">
                  <div className="experience-top">
                    <div>
                      <h3>{experience.role}</h3>
                      <h4>{experience.company}</h4>
                    </div>

                    <span>{experience.period}</span>
                  </div>

                  <ul>
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-heading">
            <h2>Featured Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className="project-card"
                key={project.title}
              >
                <div className="project-number">
                  0{index + 1}
                </div>

                <div className="project-header">
                  <h3>{project.title}</h3>

                </div>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* PROJECT LINKS */}
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                      <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="contact-section section"
        >
          <div className="contact-box">
            <span className="contact-label">
              CONTACT
            </span>

            <h2>Let's build something together.</h2>

            <p>
              I'm open to opportunities in Full Stack Development,
              Angular, React, Node.js, and cloud-focused application
              development.
            </p>

            <a
              href="mailto:guruabitha2000@gmail.com"
              className="primary-button"
            >
              <Mail size={18} />
              Get In Touch
            </a>

            <div className="contact-details">
              <div>
                <MapPin size={18} />
                Chennai, India
              </div>

              <div>
                <Phone size={18} />
                +91 9025503605
              </div>

              <div>
                <Mail size={18} />
                guruabitha2000@gmail.com
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>
          © {new Date().getFullYear()} Abitha Balaguru
        </p>

        <div>
          <a
            href="https://www.linkedin.com/in/abitha-balaguru-906321212"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Abitha22-png"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:guruabitha2000@gmail.com">
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;