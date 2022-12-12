import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";
import SkeletonCard from "../Skeleton/SkeletonCard";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    showProduct();
  }, []);

  const showProduct = async () => {
    setLoad(true);
    const res = await fetch("https://fakestoreapi.com/products");
    setData(await res.clone().json());
    setFilter(await res.json());
    setLoad(false);
  };

  const filterList = (category) => {
    const finalData = data.filter((curr) => {
      return curr.category === category;
    });
    setFilter(finalData);
  };

  return (
    <>
      <h1 className={styles.category_heading}>Latest Collection</h1>
      <hr />
      <nav className={styles.category}>
        <button onClick={() => filterList("men's clothing")}>
          Men's Clothing
        </button>
        <button onClick={() => filterList("women's clothing")}>
          Women's Clothing
        </button>
        <button onClick={() => filterList("jewelery")}>Jewelery</button>
        <button onClick={() => filterList("electronics")}>Electronics</button>
        <button onClick={() => setFilter(data)}>All</button>
      </nav>
      <div className={styles.wrapper}>
        {load ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          <>
            {filter.map((val, index) => {
              return (
                <ProductCard
                  id={val.id}
                  key={index}
                  title={val.title}
                  price={val.price}
                  image={val.image}
                />
              );
            })}
          </>
        )}
      </div>
    </>
  );
}
export default Products;
