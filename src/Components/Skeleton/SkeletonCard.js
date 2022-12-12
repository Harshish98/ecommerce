import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../ProductCard/ProductCard.module.css";

function SkeletonCard() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardimage}>
          <Skeleton height={300} />
        </div>
        <div className={styles.title}>
          <Skeleton />
        </div>
        <div className={styles.card_price}>
          <Skeleton width={55} />
        </div>
        <div className={styles.card_button}>
          <Skeleton width={77} height={37} />
        </div>
      </div>
    </>
  );
}

export default SkeletonCard;
