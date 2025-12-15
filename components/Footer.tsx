import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Brand */}
        <div className={styles.brand}>
          <h2>Pammi.dev</h2>
          <p>
            MERN Stack Developer building modern, scalable, and
            user-friendly web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Social */}
        <div className={styles.social}>
          <h4>Connect</h4>
          <a href="https://github.com" target="_blank">GitHub</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
        </div>

      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} Pammi. All rights reserved.
      </div>
    </footer>
  );
}
