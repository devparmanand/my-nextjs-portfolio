import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.about}>

      {/* HEADER */}
      <section className={styles.header}>
        <h1>About Me</h1>
        <p>
          Get to know more about who I am, what I do,
          and how I build digital experiences.
        </p>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* TEXT */}
        <div className={styles.text}>
          <h2>Hello! I’m Pammi 👋</h2>
          <p>
            I’m a passionate MERN Stack Developer with experience
            building modern web applications using React, Next.js,
            Node.js, MongoDB, and REST APIs.
          </p>

          <p>
            I focus on writing clean, scalable code and designing
            intuitive user interfaces that provide excellent user
            experiences. I enjoy solving real-world problems and
            continuously improving my skills.
          </p>

          <p>
            When I’m not coding, I enjoy learning new technologies,
            creating content, and working on side projects.
          </p>
        </div>

        {/* STATS */}
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <h3>1+</h3>
            <p>Years Experience</p>
          </div>
          <div className={styles.statCard}>
            <h3>15+</h3>
            <p>Projects Completed</p>
          </div>
          <div className={styles.statCard}>
            <h3>5+</h3>
            <p>Tech Stacks</p>
          </div>
        </div>

      </section>

      {/* SKILLS */}
      <section className={styles.skills}>
        <h2>Skills & Technologies</h2>

        <div className={styles.skillGrid}>
          <span>React</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Express</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>HTML & CSS</span>
        </div>
      </section>

    </main>
  );
}
