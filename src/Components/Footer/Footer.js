import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faHome,
  faIndianRupee,
  faPhone,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <h2>HOMEGROWN INDIAN BRAND</h2>
        <p className={styles.footer_text}>
          Over <strong>4 Million</strong> Happy Customers
        </p>
        <div className={styles.footer_section}>
          <div className={styles.contact_section}>
            <p>
              <FontAwesomeIcon icon={faHome} size="2x" /> Parihar Sports and
              Stationers, Jodhpur, Rajasthan
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />{" "}
              harshish3498@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} size="2x" /> 8003141437
            </p>
          </div>
          <div className={styles.info_section}>
            <h3>COMPANY</h3>
            <Link to="/about">
              <p>About Us</p>
            </Link>
            <Link to="/contact">
              <p>Contact Us</p>
            </Link>
            <Link to="/products">
              <p>Products</p>
            </Link>
          </div>
          <div className={styles.info_section}>
            <h3>MORE INFO</h3>
            <p>T&C</p>
            <p>Privacy Policy</p>
            <p>Refund Policy</p>
          </div>
          <div className={styles.extra_info}>
            <p>
              <FontAwesomeIcon icon={faIndianRupee} /> COD Available
            </p>
            <p>
              <FontAwesomeIcon icon={faRefresh} /> 30 Days Easy Return
            </p>
          </div>
        </div>
        <div className={styles.footer_download}>
          <div className={styles.app_store}>
            <FontAwesomeIcon icon={faGooglePlay} size="2x" />
            <div>
              <p>Get it on</p>
              <h3>Google Play</h3>
            </div>
          </div>
          <div className={styles.app_store}>
            <FontAwesomeIcon icon={faApple} size="2x" />
            <div>
              <p>Download on the</p>
              <h3>Apple Store</h3>
            </div>
          </div>
        </div>
        <p className={styles.copyright}>&#169; Shopzy 2022-2023</p>
      </div>
    </>
  );
}

export default Footer;
