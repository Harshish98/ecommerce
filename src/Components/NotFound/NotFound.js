import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.not_found}>
      <img src="https://tss-static-images.gumlet.io/notfound.png" />
      <h1>We can't seem to find the page you are looking for</h1>
      <Link to="/home">
        <button>let's take you home</button>
      </Link>
    </div>
  );
}

export default NotFound;
