"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // later connect API / email service
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className={styles.contact}>

      {/* HEADER */}
      <section className={styles.header}>
        <h1>Contact Me</h1>
        <p>
          Have a project, idea, or just want to say hi?
          Let’s talk.
        </p>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INFO */}
        <div className={styles.info}>
          <h2>Get in Touch</h2>
          <p>
            I’m always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </p>

          <ul>
            <li><strong>Email:</strong> pjha3861@gmail.com</li>
            <li><strong>Phone:</strong> +91 - 9368394493</li>
            <li><strong>Location:</strong> near by Water Tank Road, Nagla Charan Dass, Phase-2, Noida, Uttar Pradesh 201305</li>
            <li><strong>Availability:</strong> Open for freelance</li>
          </ul>
        </div>

        {/* FORM */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label>Message</label>
            <textarea
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>

      </section>

    </main>
  );
}
