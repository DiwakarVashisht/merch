"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Login.module.css";

const LoginPage = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/PrizePage");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log In</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input type="email" id="email" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
