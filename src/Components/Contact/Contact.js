import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact_section}>
      <h1>Feel free to Contact Us</h1>
      <hr />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.5892827029033!2d72.9827856148382!3d26.274990183406487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418e8f828701a1%3A0x3556666be991dd38!2sParihar%20Sports%20And%20Stationers!5e0!3m2!1sen!2sin!4v1669033850628!5m2!1sen!2sin"
        title="location"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className={styles.contact_details}>
        <div>
          <FontAwesomeIcon icon={faBuilding} size="3x" border />
          <p>
            Parihar Sports and Stationers, Cheergarh Chopasni Road, Jodhpur,
            Rajasthan
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} size="3x" border />
          <p>8003141437</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} size="3x" border />
          <p>harshish3498@gmail.com</p>
        </div>
      </div>
      <div className={styles.social}>
        <p>Follow Us:</p>
        <a
          href="https://www.instagram.com/accounts/login/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="3x"
            className={styles.icons}
          />
        </a>
        <a
          href="https://twitter.com/i/flow/login"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            size="3x"
            className={styles.icons}
          />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="3x" className={styles.icons} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
