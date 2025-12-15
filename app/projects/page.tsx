import styles from "./page.module.css";

const projects = [
  {
    title: "Hotel Booking System",
    description:
      "Full MERN stack hotel booking platform with Razorpay payment integration, admin dashboard, and room management.",
    tech: ["React", "Next.js", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Admin Dashboard",
    description:
      "Responsive admin dashboard with charts, role-based access, and real-time data visualization.",
    tech: ["React", "Redux", "CSS"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built using Next.js with modern UI and optimized performance.",
    tech: ["Next.js", "TypeScript", "CSS Modules"],
    link: "#",
  },
  {
    title: "OTP Auth System",
    description:
      "Secure authentication system with OTP-based password reset and email notifications.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className={styles.projects}>

      {/* HEADER */}
      <section className={styles.header}>
        <h1>Projects</h1>
        <p>
          A selection of projects that highlight my skills
          and real-world development experience.
        </p>
      </section>

      {/* PROJECT LIST */}
      <section className={styles.list}>
        {projects.map((project, index) => (
          <div className={styles.card} key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className={styles.techStack}>
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <a
              href={project.link}
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </section>

    </main>
  );
}
