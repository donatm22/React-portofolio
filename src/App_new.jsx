import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const roles = [
    { title: "Full Stack Developer", icon: "💻", color: "#3B82F6" },
    { title: "React Specialist", icon: "⚛️", color: "#10B981" },
    { title: "UI/UX Designer", icon: "🎨", color: "#F59E0B" },
    { title: "Problem Solver", icon: "🧩", color: "#8B5CF6" }
  ]

  const projects = [
    {
      id: 1,
      title: "Movie Discovery App",
      description: "A sophisticated React-based movie discovery application with advanced search functionality, detailed movie information, and user reviews.",
      technologies: ["React", "JavaScript", "Node.js", "MongoDB", "API Integration"],
      demoLink: "#",
      codeLink: "#",
      category: "Web Development",
      status: "In Development"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce platform with user authentication, shopping cart and inventory management.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "mySQL"],
      demoLink: "#",
      codeLink: "#",
      category: "Full Stack",
      status: "In Development"
    },
    {
      id: 3,
      title: "Task Management Suite",
      description: "Enterprise-level productivity application with drag-and-drop functionality, progress tracking, and team collaboration.",
      technologies: ["React", "TypeScript", "GraphQL", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#",
      category: "Web Development",
      status: "Completed"
    }
  ]

  const skills = {
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "Vue.js", level: 75 }
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 }
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Figma", level: 80 },
      { name: "VS Code", level: 95 }
    ]
  }

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "2023 - Present",
      description: "Leading frontend development team, implementing modern React applications with advanced state management.",
      achievements: [
        "Reduced load times by 40% through optimization",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      duration: "2021 - 2023",
      description: "Developed full-stack web applications using React, Node.js, and various databases.",
      achievements: [
        "Built 15+ client projects",
        "Improved code quality by 60%",
        "Mentored junior developers"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupCo",
      duration: "2020 - 2021",
      description: "Created responsive web interfaces and collaborated with design team.",
      achievements: [
        "Developed mobile-first applications",
        "Integrated RESTful APIs",
        "Optimized user experience"
      ]
    }
  ]

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Scroll to section
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
            <li><a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('contact')}}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-greeting">Hello, I'm</p>
              <h1>Donat <span className="highlight">Mustafa</span></h1>
              <div className="role-badges">
                {roles.map((role, index) => (
                  <div 
                    key={index} 
                    className="role-badge"
                    style={{ 
                      animationDelay: `${index * 0.2}s`,
                      borderColor: role.color 
                    }}
                  >
                    <span className="role-icon">{role.icon}</span>
                    <span className="role-title">{role.title}</span>
                  </div>
                ))}
              </div>
              <p className="hero-description">
                Passionate developer creating amazing web experiences with modern technologies. 
                I love turning ideas into reality through clean, efficient code.
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
              <h3>Crafting Digital Experiences</h3>
              <p>
                With over 4 years of experience in web development, I specialize in creating 
                responsive, user-friendly applications that solve real-world problems. My journey 
                started with a curiosity about how websites work, and has evolved into a passion 
                for full-stack development.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the 
                latest technologies. When I'm not coding, you can find me exploring new frameworks, 
                contributing to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="detail-grid">
              <div className="detail-item">
                <h4>🎓 Education</h4>
                <p>Computer Science Degree<br/>University of Technology</p>
              </div>
              <div className="detail-item">
                <h4>💼 Experience</h4>
                <p>4+ Years<br/>Professional Development</p>
              </div>
              <div className="detail-item">
                <h4>🚀 Projects</h4>
                <p>50+ Completed<br/>Web Applications</p>
              </div>
              <div className="detail-item">
                <h4>🏆 Achievements</h4>
                <p>Multiple Awards<br/>for Innovation</p>
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
                    <a href={project.demoLink} className="btn primary small">Live Demo</a>
                    <a href={project.codeLink} className="btn outline small">View Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p className="section-subtitle">Let's discuss your next project or just say hello</p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:donat@example.com">donat@example.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <a href="tel:+1234567890">+123 456 7890</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Your City, Country</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com/in/donatmustafa" target="_blank" rel="noopener noreferrer">
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
