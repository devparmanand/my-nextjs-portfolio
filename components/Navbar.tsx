import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/">Parmanand (Web Solutions) </Link>
        </div>

        <nav className={styles.navLinks}>
          <Link href="/" className={styles.active}>Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contactus">Contact</Link>
        </nav>

        <div className={styles.navBtn}>
          <Link href="/contactus">Hire Me</Link>
        </div>
      </div>
    </header>
  );
}
