import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useContext } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/Context";
import styles from "./ProductDetails.module.css";
import SkeletonDetailCard from "../Skeleton/SkeletonDetailCard";

function ProductDetails() {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    showProduct();
  }, []);

  const showProduct = async () => {
    setLoad(true);
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    setItem(await response.json());
    console.log(item);
    setLoad(false);
  };

  const global = useContext(CartContext);
  const dispatch = global.dispatch;
  console.log(global);
  return (
    <>
      {load ? (
        <SkeletonDetailCard />
      ) : (
        <div className={styles.details}>
          <div className={styles.imageSection}>
            <img src={item.image} alt={item.title} />
          </div>
          <div className={styles.detailsSection}>
            <h3>{item.category}</h3>
            <h1>{item.title}</h1>
            <p>
              <b>
                Rating {item.rating && item.rating.rate}
                <FontAwesomeIcon icon={faStar} />
              </b>
            </p>
            <p className={styles.effect}>$ {item.price}</p>
            <p>{item.description}</p>
            <button
              className={styles.details_button}
              onClick={() => dispatch({ type: "ADD", payload: item })}
            >
              Add to Cart
            </button>
            <Link to="/cart">
              <button className={styles.details_button}>Go to Cart</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
