import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <>
      <div className={styles.about_section}>
        <h1>About Us</h1>
        <hr />
        <p>
          Our 'About Us' page would like to thank you from the bottom of its
          heart for visiting.
          <br />
          It doesn't get a lot of attention usually, as people are busy surfing
          other, 'cooler' pages. The fact that you voluntarily decided to come
          here means a lot.
        </p>
      </div>
      <div className={styles.about_section2}>
        <img
          src="https://tss-static-images.gumlet.io/banners/about-whoweare.jpg"
          alt="graph"
        />
        <div className={styles.inner_section}>
          <h2>We are your favourite, online store</h2>
          <p>
            Our funky products are designed and printed specifically to spread
            happiness, right down to the bottom of your 'soul'. A recent study
            by our internal, self-funded, fashion forward (and totally unbiased)
            team showed that if you buy from www.shopzy.com, it increases your
            lifespan by 7.5%. So if you're looking for great products, with even
            greater deals and discounts, you've come to the right place!
          </p>
        </div>
      </div>
      <div className={styles.about_section3}>
        <h2>the team</h2>
        <p>
          We're a bunch of comic book loving, lame joke cracking, and slightly
          weird but largely likeable people. We love what we do, and don't take
          ourselves too seriously. This company was started by 4 people, with a
          cupboard full of clothes (probably the size of your wardrobe). We've
          now grown to over 150 people, and graduated from cupboards to
          warehouses, but really, that's all that's changed. We're still
          childishly excited about everything we do- from the random post-it
          wall, to the unnecessary instructions outside the bathroom door, the
          board game sessions, and the pot-luck lunches.
          <br />
          <br />
          And we try and ensure that this philosophy resonates with all those
          who come and join our family. So, if you're bored of your current desk
          job and believe that 'work' does not necessarily have to be a bad
          word, look no further. We'd love to have you on our team!
        </p>
      </div>
      <img src="https://tss-static-images.gumlet.io/banners/about-doodlebanner.png" />
    </>
  );
}

export default About;
