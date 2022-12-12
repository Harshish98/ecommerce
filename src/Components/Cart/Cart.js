import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/Context";
import styles from "./Cart.module.css";

function Cart() {
  const global = useContext(CartContext);
  const state = global.state;
  const dispatch = global.dispatch;
  const total = state.reduce((prev, item) => {
    return prev + item.price * item.quantity;
  }, 0);

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cart_item}>
          {state.map((item, index) => {
            return (
              <div className={styles.cart_box} key={index}>
                <img src={item.image} alt={item.title} />
                <div className={styles.cart_info}>
                  <p>{item.title}</p>
                  <p>{item.category}</p>
                  <p>
                    <b>$ {item.quantity * item.price}</b>
                  </p>
                  <div className={styles.cart_quantity}>
                    <button
                      onClick={() => dispatch({ type: "INCRE", payload: item })}
                    >
                      +
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() => dispatch({ type: "DECRE", payload: item })}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.cart_sidepart}>
          {state.length !== 0 && (
            <div className={styles.cart_sidebox}>
              <p className={styles.billing}>Billing Details</p>
              <div className={styles.cart_total}>
                <p className={styles.left}>cart value</p>
                <p className={styles.right}>
                  <b>$ {total.toFixed(2)}</b>
                </p>
                <p className={styles.left}>shipping charges</p>
                <p className={styles.right}>$ 50</p>
                <p className={styles.left}>
                  <b>total amount</b>
                </p>
                <p className={styles.right}>
                  <b>$ {(total + 50).toFixed(2)}</b>
                </p>
              </div>
              <button>Place order</button>
            </div>
          )}
        </div>
      </div>
      {state.length === 0 && (
        <div className={styles.empty_section}>
          <img src="https://tss-static-images.gumlet.io/emptyCart.png" />
          <h3>Your Cart is Empty!!</h3>
          <p>Please add something soon, carts have feelings too.</p>
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
