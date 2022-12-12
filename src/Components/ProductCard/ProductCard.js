import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ id, title, price, image }) {
  return (
    <>
      <div className={styles.card}>
        <Link to={`/products/${id}`}>
          <img className={styles.cardimage} src={image} alt={title} />
        </Link>
        <div className={styles.title}>{title}</div>
        <div className={styles.card_price}>$ {price}</div>
        <Link to={`/products/${id}`}>
          <button className={styles.card_button}>Buy Now</button>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
