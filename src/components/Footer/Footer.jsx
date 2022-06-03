import styles from "./Footer.module.css";
import { ReactComponent as Youtube } from "../../assets/youtube-brands.svg";
import { ReactComponent as Facebook } from "../../assets/facebook-square-brands.svg";
import { ReactComponent as Instagram } from "../../assets/instagram-brands.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin-brands.svg";
import { ReactComponent as Twitter } from "../../assets/twitter-square-brands.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles["socials-icon"]}>
        <Youtube className={styles.icon} height={20} width={20} fill="white" />
        <Facebook
          className={styles.icon}
          height={20}
          width={20}
          fill="rgba(255, 255, 255, 0.437)"
        />
        <LinkedIn
          className={styles.icon}
          height={20}
          width={20}
          fill="rgba(255, 255, 255, 0.437)"
        />
        <Instagram
          className={styles.icon}
          height={20}
          width={20}
          fill="rgba(255, 255, 255, 0.437)"
        />
        <Twitter
          className={styles.icon}
          height={20}
          width={20}
          fill="rgba(255, 255, 255, 0.437)"
        />
      </div>
      <div className={styles.links}>
        <p className={styles.link}>Terms of services</p>
        <p className={styles.link}>Privacy policy</p>
      </div>
      <div className={styles.copyright}>
        Copyright 2021 @ Peddle Technologies. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
