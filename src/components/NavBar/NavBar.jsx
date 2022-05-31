import React from "react";
import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div className={styles["logo-container"]}>
        <h4 className={styles.logo}> METRICKS </h4>
      </div>
      <div className={styles["links-container"]}>
        <p onClick={() => navigate("/about")} className={styles.link}>
          {" "}
          ABOUT{" "}
        </p>
        <p onClick={() => navigate("/blog")} className={styles.link}>
          {" "}
          BLOG{" "}
        </p>
        <button className={styles.btn}>CONTACT US</button>
      </div>
    </div>
  );
};

export default NavBar;
