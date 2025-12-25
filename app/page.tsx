import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home}>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Hi, I’m <span>Parmanand (Web Solutions)</span> 👋
          </h1>
          <p>
            A passionate MERN Stack Developer crafting modern,
            fast and scalable web applications.
          </p>

          <div className={styles.heroButtons}>
            <Link href="/projects" className={styles.primaryBtn}>
              View Projects
            </Link>
            <Link href="/contactus" className={styles.secondaryBtn}>
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className={styles.section}>
        <h2>About Me</h2>
        <p className={styles.sectionText}>
          I specialize in building full-stack web applications using
          React, Next.js, Node.js, and MongoDB with a focus on clean
          UI and great user experience.
        </p>
        <Link href="/about" className={styles.linkBtn}>
          Read More →
        </Link>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className={styles.sectionAlt}>
        <h2>Featured Projects</h2>

        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <h3>Hotel Booking System</h3>
            <p>MERN stack project with Razorpay integration.</p>
          </div>

          <div className={styles.projectCard}>
            <h3>Admin Dashboard</h3>
            <p>Responsive dashboard with analytics & charts.</p>
          </div>

          <div className={styles.projectCard}>
            <h3>Portfolio Website</h3>
            <p>Modern portfolio built with Next.js.</p>
          </div>
        </div>

        <Link href="/projects" className={styles.linkBtn}>
          View All Projects →
        </Link>
      </section>

      {/* CTA SECTION */}
      <section className={styles.cta}>
        <h2>Let’s Work Together</h2>
        <p>
          Have a project in mind? Let’s build something amazing.
        </p>
        <Link href="/contactus" className={styles.primaryBtn}>
          Hire Me
        </Link>
      </section>

    </main>
  );
}
