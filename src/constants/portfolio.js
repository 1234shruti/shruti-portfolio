export const siteConfig = {
  name: "Shruti Jumbad",
  wordmark: "SHRUTI JUMBAD",
  location: "Pune, Maharashtra, India",
  roles: "Software Developer | Full-Stack Developer",
  status: "Open to Software Engineering Opportunities",
  availabilityDetails: "Internships & Full-Time Roles",
  bio: "Software developer and full-stack engineer passionate about crafting robust web applications, engineering reliable systems with Java and modern web technologies, and solving challenging problems with clean, scalable code.",
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ],
  codeSnippet: {
    fileName: "ShrutiDev.java",
    language: "java",
    code: `public class ShrutiDev {
    String name = "Shruti Jumbad";
    String location = "Pune, Maharashtra, India";
    String[] coreStrengths = {
        "Full-Stack Development",
        "Java & Object-Oriented Design",
        "Modern React & Web Architecture",
        "Algorithmic Problem Solving"
    };

    boolean openToOpportunities = true;
}`,
  },
}

/**
 * PlaceMate repository URL configuration.
 * Note: Configurable repository URL. Currently null because the user's profile URL 
 * (https://github.com/1234shruti) is not the verified project repo URL.
 * When the repository is provided, set this to the repo URL string.
 */
export const PLACEMATE_REPO_URL = null

export const aboutConfig = {
  heading: "A little about me",
  sectionLabel: "About Me",
  introduction:
    "I'm a Computer Engineering student at Nutan Maharashtra Institute of Engineering & Technology, passionate about software development and solving practical problems through technology. I enjoy building full-stack applications, exploring AI-powered solutions, and improving my problem-solving skills through coding.",
  cards: [
    {
      id: "education",
      title: "Education",
      headline: "BE Computer Engineering",
      subline: "Expected 2028",
      institution: "Nutan Maharashtra Institute of Engineering & Technology",
      description: "BE Computer Engineering, expected 2028.",
      icon: "GraduationCap",
      badge: "In Progress",
    },
    {
      id: "achievement",
      title: "Academic Achievement",
      headline: "CGPA 8.91",
      subline: "Undergraduate Score",
      institution: "Academic Performance",
      description: "CGPA 8.91.",
      icon: "Award",
      badge: "8.91 / 10.0",
    },
    {
      id: "focus",
      title: "Development Focus",
      headline: "Full-Stack & Java",
      subline: "Core Engineering Strengths",
      institution: "Software Development & Problem Solving",
      description: "Full-stack development, Java, and problem-solving.",
      icon: "Code2",
      badge: "Core Stack",
    },
  ],
}

export const projectsConfig = {
  heading: "Things I've built",
  sectionLabel: "Featured Projects",
  subtitle:
    "A selection of software projects spanning full-stack web applications, computer vision systems, and AI-enabled platforms.",
  projects: [
    {
      id: "placemate",
      title: "PlaceMate — Placement & Job Management Platform",
      shortTitle: "PlaceMate",
      category: "Full-Stack Web Application",
      description:
        "A full-stack platform connecting students, recruiters, and administrators through role-based authentication. Supports job discovery, saved jobs, application tracking, recruiter workflows, candidate shortlisting, and interview management.",
      techStack: [
        "React.js",
        "Vite",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "REST APIs",
      ],
      githubUrl: PLACEMATE_REPO_URL,
      isPending: !PLACEMATE_REPO_URL,
      pendingLabel: "Repository link pending",
      accent: "indigo",
      icon: "Briefcase",
    },
    {
      id: "airtouch",
      title: "AirTouch — Touchless Mouse Control",
      shortTitle: "AirTouch",
      category: "Computer Vision & Interaction",
      description:
        "A hand-gesture-controlled computer interaction system that supports cursor movement, clicking, scrolling, drag-and-drop, and browser navigation using a camera.",
      techStack: ["Python", "OpenCV", "MediaPipe", "NumPy", "PyAutoGUI"],
      githubUrl: "https://github.com/1234shruti/AirTouch.git",
      isPending: false,
      accent: "teal",
      icon: "Hand",
    },
    {
      id: "sevalink",
      title: "SevaLink — AI-Powered Volunteer Coordination",
      shortTitle: "SevaLink",
      category: "AI & Volunteer Coordination",
      description:
        "A volunteer coordination platform with role-based dashboards, task creation and tracking, geolocation features, and Gemini AI-powered task assistance.",
      techStack: [
        "React.js",
        "JavaScript",
        "Gemini AI",
        "Maps/Geolocation API",
        "AWS S3",
      ],
      githubUrl: "https://github.com/1234shruti/SevaLink.git",
      isPending: false,
      accent: "purple",
      icon: "HeartHandshake",
    },
  ],
}

export const experienceConfig = {
  heading: "Where I've worked",
  sectionLabel: "Experience",
  subtitle:
    "Practical experience developing web applications, building database modules, and collaborating through agile workflows.",
  experiences: [
    {
      id: "passion-software",
      role: "Software & Web Development Intern",
      company: "Passion Software Pvt. Ltd.",
      period: "June 2024 – July 2024",
      durationBadge: "June 2024 – July 2024",
      type: "Internship",
      responsibilities: [
        "Developed front-end and back-end modules for a web application.",
        "Worked on feature development and application enhancements.",
        "Used MySQL queries and CRUD operations to manage data.",
        "Debugged issues and improved application functionality and user experience.",
        "Gained exposure to Agile development and the software development lifecycle.",
      ],
      technologies: ["Web Development", "MySQL", "CRUD Operations", "Debugging", "Agile / SDLC"],
    },
  ],
}

export const skillsConfig = {
  heading: "Technologies I work with",
  sectionLabel: "Skills & Technologies",
  subtitle:
    "Core programming languages, frameworks, databases, and developer tools in my technical repertoire.",
  categories: [
    {
      id: "programming",
      name: "Programming & Problem Solving",
      icon: "Terminal",
      skills: ["Java", "Data Structures and Algorithms (DSA)"],
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: "Layout",
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
    },
    {
      id: "backend",
      name: "Backend",
      icon: "Server",
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      id: "database",
      name: "Database",
      icon: "Database",
      skills: ["MySQL", "MongoDB"],
    },
    {
      id: "tools",
      name: "Tools & Platforms",
      icon: "Wrench",
      skills: ["Git", "GitHub"],
    },
    {
      id: "ai-cv",
      name: "AI & Computer Vision",
      icon: "Brain",
      skills: ["Gemini AI", "OpenCV", "MediaPipe"],
    },
  ],
}

export const contactConfig = {
  heading: "Let's connect",
  sectionLabel: "Get In Touch",
  introduction:
    "I'm always happy to connect with developers, collaborate on interesting projects, and discuss opportunities to learn and build together.",
  email: "jumbadshruti97@gmail.com",
  github: "https://github.com/1234shruti",
  linkedin: "https://www.linkedin.com/in/shrutijumbad11/",
}


