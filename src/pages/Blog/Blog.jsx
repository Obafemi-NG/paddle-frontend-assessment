import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <div className={styles["page-container"]}>
      <NavBar />
      <div className={styles["page-content"]}>Blog</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
