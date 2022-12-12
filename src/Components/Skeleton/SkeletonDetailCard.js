import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../ProductDetails/ProductDetails.module.css";

function SkeletonDetailCard() {
  return (
    <>
      <div className={styles.details}>
        <div className={styles.imageSection}>
          <Skeleton height={600} width={500} />
        </div>
        <div className={styles.detailsSection}>
          <h3>
            <Skeleton height={25} width={300} />
          </h3>
          <h1>
            <Skeleton height={75} />
          </h1>
          <p>
            <Skeleton height={25} width={150} />
          </p>
          <p className={styles.effect}>
            <Skeleton width={150} />
          </p>
          <p>
            <Skeleton height={130} />
          </p>
          <div className={styles.details_button}>
            <Skeleton height={50} width={100} />
          </div>
          <div className={styles.details_button}>
            <Skeleton height={50} width={100} style={{ marginLeft: -16 }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SkeletonDetailCard;
