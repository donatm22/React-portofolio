import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode ? JSON.parse(savedMode) : false
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const heroRef = useRef(null)
  const vantaEffect = useRef(null)

  const projects = [
    {
      id: 1,
      title: "Movie Discovery App",
      description: "A sophisticated React-based movie discovery application with advanced search functionality, detailed movie information, and user reviews.",
      technologies: ["React", "JavaScript", "Node.js", "MongoDB", "API Integration"],
      demoLink: "#",
      codeLink: "#",
      category: "Web Development",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management Suite",
      description: "Enterprise-level productivity application with drag-and-drop functionality, progress tracking, and team collaboration.",
      technologies: ["React", "TypeScript", "GraphQL", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#",
      category: "Web Development",
      status: "Completed"
    },
    {
      id: 3,
      title: "Vinyl Records E-commerce",
      description: "Full-featured e-commerce platform for vinyl records with product catalog, shopping cart, secure checkout, and inventory management. Features vinyl collection browsing, detailed product pages, and seamless purchasing experience.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "CSS"],
      demoLink: "http://vinyl-store.test/home.html",
      codeLink: "https://github.com/yourusername/vinyl-ecommerce",
      category: "E-commerce",
      status: "Completed"
    }
  ]

  const certifications = [
    {
      name: "JavaScript Fundamentals",
      issuer: "freeCodeCamp",
      date: "2024",
      credentialId: "fcc-js-2024-001",
      image: "/images/certifications/javascript-fundamentals.jpg"
    },
    {
      name: "React Development",
      issuer: "Codecademy",
      date: "2024",
      credentialId: "cda-react-2024-015",
      image: "/images/certifications/react-development.jpg"
    },
    {
      name: "Git Version Control",
      issuer: "GitKraken",
      date: "2024",
      credentialId: "gk-git-2024-078",
      image: "/images/certifications/git-version-control.jpg"
    },
    {
      name: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      credentialId: "uc-web-2023-456",
      image: "/images/certifications/web-development-bootcamp.jpg"
    }
  ]

  const techStack = [
    { name: "React", image: "/images/tech-stack/react.png", color: "#61DAFB" },
    { name: "JavaScript", image: "/images/tech-stack/javascript.png", color: "#F7DF1E" },
    { name: "TypeScript", image: "/images/tech-stack/typescript.png", color: "#3178C6" },
    { name: "Node.js", image: "/images/tech-stack/nodejs.png", color: "#339933" },
    { name: "HTML", image: "/images/tech-stack/html.png", color: "#E34F26" },
    { name: "CSS", image: "/images/tech-stack/css.png", color: "#1572B6" },
    { name: "Git", image: "/images/tech-stack/git.png", color: "#F05032" },
    { name: "MongoDB", image: "/images/tech-stack/mongodb.png", color: "#47A248" },
    { name: "Express", image: "/images/tech-stack/express.png", color: "#000000" }
  ]

  const skills = {
    frontend: [
      "React",
      "JavaScript", 
      "TypeScript",
      "HTML/CSS",
      "Vue.js"
    ],
    backend: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Python"
    ],
    tools: [
      "Git",
      "Docker", 
      "AWS",
      "Figma",
      "VS Code"
    ]
  }

  const experiences = [
    {
      title: "Frontend Development Intern",
      company: "Tectigon Academy",
      duration: "Summer 2024",
      description: "Worked on React-based web applications during my summer internship, learning industry best practices and collaborating with senior developers.",
      achievements: [
        "Built responsive components using React and CSS",
        "Fixed 15+ bugs in the main application",
        "Learned Git workflow and code review process"
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Independent Projects",
      duration: "2024 - Present",
      description: "Creating websites for local businesses and personal projects while studying. Building my portfolio and gaining real-world experience.",
      achievements: [
        "Developed 5+ websites for small businesses",
        "Learned full-stack development with React and Node.js",
        "Improved problem-solving skills through client work"
      ]
    },
    {
      title: "Computer Science Student",
      company: "University",
      duration: "2024 - Present (2nd Year)",
      description: "Currently pursuing Computer Science degree, focusing on web development, algorithms, and software engineering principles.",
      achievements: [
        "Maintaining strong GPA while learning programming",
        "Active in coding clubs and hackathons",
        "Building projects to apply classroom knowledge"
      ]
    }
  ]

  // Vanta clouds effect
  useEffect(() => {
    if (!vantaEffect.current && heroRef.current) {
      vantaEffect.current = window.VANTA.CLOUDS({
        el: heroRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        backgroundColor: 0x23153c,
        skyColor: 0x68b8d7,
        cloudColor: 0xadc1de,
        cloudShadowColor: 0x183550,
        sunColor: 0xff8a00,
        sunGlareColor: 0xff8a00,
        sunlightColor: 0xff8a00,
        speed: 1.00
      })
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])

  // Apply dark mode to document body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode))
  }

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Donat Mustafa</div>
          
          <div className="nav-controls">
            <button 
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              ☰
            </button>
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home')}}>Home</a></li>
            <li><a href="#about" onClick={(e) => {e.preventDefault(); scrollToSection('about')}}>About</a></li>
            <li><a href="#experience" onClick={(e) => {e.preventDefault(); scrollToSection('experience')}}>Experience</a></li>
            <li><a href="#projects" onClick={(e) => {e.preventDefault(); scrollToSection('projects')}}>Projects</a></li>
            <li><a href="#skills" onClick={(e) => {e.preventDefault(); scrollToSection('skills')}}>Skills</a></li>
            <li><a href="#tech-stack" onClick={(e) => {e.preventDefault(); scrollToSection('tech-stack')}}>Tech Stack</a></li>
            <li><a href="#certifications" onClick={(e) => {e.preventDefault(); scrollToSection('certifications')}}>Certifications</a></li>
            <li><a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('contact')}}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-greeting">Hello, I'm</p>
              <h1>Donat <span className="highlight">Mustafa</span></h1>
              <p className="hero-description">
                CS student passionate about web development and always eager to learn. 
                I love building projects that solve real problems and help me grow as a developer.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn primary" onClick={(e) => {e.preventDefault(); scrollToSection('projects')}}>
                  View My Work
                </a>
                <a href="#contact" className="btn secondary" onClick={(e) => {e.preventDefault(); scrollToSection('contact')}}>
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <p className="section-subtitle">Get to know more about my background and what drives me</p>
          </div>
          
          <div className="about-content">
            <div className="about-intro">
              <h3>Learning & Building</h3>
              <p>
                I'm a 19-year-old Computer Science student currently in my 2nd year at university. 
                My journey into web development started with curiosity about how websites work, 
                and has grown into a genuine passion for creating digital solutions.
              </p>
              <p>
                While I'm still learning, I love taking on freelance projects and internships 
                to apply what I study in the classroom. I'm always eager to learn new technologies 
                and improve my skills through hands-on experience and personal projects.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-row">
                <span className="stat-label">Currently</span>
                <span className="stat-value">2nd Year CS Student</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Experience</span>
                <span className="stat-value">Learning & Building for 1+ Year</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Projects</span>
                <span className="stat-value">10+ Personal & Freelance</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Focus</span>
                <span className="stat-value">Web Development & Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <h2>Professional Journey</h2>
            <p className="section-subtitle">A timeline of my career growth and key accomplishments</p>
          </div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.title}</h3>
                    <div>
                      <span className="company">{exp.company}</span>
                      <span className="duration">{exp.duration}</span>
                    </div>
                  </div>
                  <p>{exp.description}</p>
                  <div className="achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p className="section-subtitle">A showcase of my best work and technical expertise</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-status">{project.status}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href={project.demoLink} className="btn primary small" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href={project.codeLink} className="btn outline small" target="_blank" rel="noopener noreferrer">View Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <h2>Technical Skills</h2>
            <p className="section-subtitle">Technologies and tools I work with on a daily basis</p>
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="skill-category">
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <div className="skills-list">
                  {skillList.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <span className="skill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tech-stack" className="tech-stack">
        <div className="container">
          <div className="section-header">
            <h2>Tech Stack</h2>
            <p className="section-subtitle">Technologies I love working with</p>
          </div>

          <div className="tech-carousel" style={{
            position: 'relative',
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            padding: '40px 0',
            overflow: 'hidden',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <style jsx>{`
              @keyframes techRiver {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .tech-river {
                animation: techRiver 20s linear infinite;
              }
            `}</style>
            
            <div className="tech-carousel-container" style={{
              overflow: 'hidden',
              width: '100%'
            }}>
              <div className="tech-carousel-track tech-river" style={{
                display: 'flex',
                width: 'fit-content'
              }}>
                {/* First set of logos */}
                {techStack.map((tech, index) => (
                  <div key={`first-${index}`} className="tech-item" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    margin: '0 30px',
                    cursor: 'pointer',
                    flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    <div style={{
                      width: '100px',
                      height: '100px',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img 
                        src={tech.image} 
                        alt={tech.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          display: 'block'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentNode.innerHTML = `
                            <div style="
                              width:100px;
                              height:100px;
                              display:flex;
                              align-items:center;
                              justify-content:center;
                              background:${tech.color};
                              color:white;
                              font-weight:bold;
                              font-size:14px;
                              text-align:center;
                              border-radius:15px;
                            ">${tech.name}</div>
                          `;
                        }}
                      />
                    </div>
                    <span style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      textAlign: 'center',
                      color: 'white'
                    }}>{tech.name}</span>
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {techStack.map((tech, index) => (
                  <div key={`second-${index}`} className="tech-item" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    margin: '0 30px',
                    cursor: 'pointer',
                    flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    <div style={{
                      width: '100px',
                      height: '100px',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img 
                        src={tech.image} 
                        alt={tech.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          display: 'block'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentNode.innerHTML = `
                            <div style="
                              width:100px;
                              height:100px;
                              display:flex;
                              align-items:center;
                              justify-content:center;
                              background:${tech.color};
                              color:white;
                              font-weight:bold;
                              font-size:14px;
                              text-align:center;
                              border-radius:15px;
                            ">${tech.name}</div>
                          `;
                        }}
                      />
                    </div>
                    <span style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      textAlign: 'center',
                      color: 'white'
                    }}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="certifications">
        <div className="container">
          <div className="section-header">
            <h2>Certifications</h2>
            <p className="section-subtitle">Courses and certifications I've completed</p>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-image-container">
                  {cert.image ? (
                    <img src={cert.image} alt={cert.name} className="cert-image" />
                  ) : (
                    <div className="cert-image-placeholder">
                      <div className="upload-icon">📄</div>
                      <p>Certificate Image</p>
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              // You can handle the image upload here
                              console.log('Image uploaded:', event.target.result);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="image-upload-input"
                      />
                      <label className="upload-label">Click to upload</label>
                    </div>
                  )}
                </div>
                <div className="cert-content">
                  <h3 className="cert-name">{cert.name}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <div className="cert-details">
                    <span className="cert-date">{cert.date}</span>
                    <span className="cert-id">ID: {cert.credentialId}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p className="section-subtitle">Let's discuss your next project or just say hello</p>
          </div>

          <div className="contact-content">
            <div className="contact-stats">
              <div className="stat-row">
                <span className="label">Email</span>
                <span>donatmst5@gmail.com</span>
              </div>

              <div className="stat-row">
                <span className="label">Phone</span>
               <span>+383 44 840 290</span>
              </div>

              <div className="stat-row">
                <span className="label">Location</span>
                <span>Prishtina, Kosovo</span>
              </div>

              <div className="stat-row">
                <span className="label">LinkedIn</span>
                <a href="https://linkedin.com/in/donatmustafa" target="_blank" rel="noopener noreferrer">
                  Connect with me
                </a>
              </div>
            </div>

            <div className="contact-form">
              <textarea 
                placeholder="Tell me about your project or just say hello..."
                rows="8"
                className="message-textbox"
              ></textarea>
              <button 
                type="button" 
                className="send-button"
                onClick={() => {
                  alert('Thanks for your interest! This is a demo button.');
                }}
              >
                Send Message ✉️
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Donat Mustafa</h3>
              <p>
                Full Stack Developer passionate about creating amazing web experiences 
                and solving complex problems with elegant solutions.
              </p>
              <div className="social-links">
                <a href="https://github.com/donatmustafa" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/donatmustafa" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com/donatmustafa" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Donat Mustafa. All rights reserved.</p>
            <p>Made with ❤️ using React</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
