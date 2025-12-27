import { useState } from "react";
import styles from "./Authentication.module.css";

export default function Authentication() {
  const [login, setLogin] = useState(true);

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2>{login ? "Login" : "Sign Up"}</h2>

        {!login && (
          <input type="text" placeholder="Enter your name" />
        )}

        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />

        <p
          className={styles.toggle}
          onClick={() => setLogin(!login)}
        >
          {login
            ? "Don't have an account? Click here to sign up"
            : "Already have an account? Click here to login"}
        </p>

        <button>
          {login ? "Login" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
