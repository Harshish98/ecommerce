import React from "react";
import Products from "../Products/Products";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.banner}>
        <img
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Banner"
        ></img>
      </div>
      <br />
      <Products />
    </>
  );
}

export default Home;
