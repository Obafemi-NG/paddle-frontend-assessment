import React from "react";
import styles from "./ContactUs.module.css";
import { ReactComponent as Arrow } from "../../assets/arrow-right-solid.svg";

const ContactUs = ({ close, animate }) => {
  return (
    <div
      className={
        animate ? `${styles["page-container"]}` : `${styles["move-out"]}`
      }
    >
      <div className={styles.title}>
        Hey, we are still in the works, <br /> but you can send us a message!
      </div>
      <div className={styles["input-section"]}>
        <div className={styles.form}>
          <label className={styles.label} htmlFor="firstName">
            {" "}
            First name{" "}
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your first name"
          />
        </div>
        <div className={styles.form}>
          <label className={styles.label} htmlFor="firstName">
            {" "}
            Last name{" "}
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your last name"
          />
        </div>
        <div className={styles.form}>
          <label className={styles.label} htmlFor="firstName">
            {" "}
            Email address{" "}
          </label>
          <input
            className={styles.input}
            type="email"
            placeholder="Enter your Email Address"
          />
        </div>
        <div className={styles.form}>
          <label className={styles.label} htmlFor="firstName">
            {" "}
            Tell Us What You Need Help With:{" "}
          </label>
          <textarea
            style={{ height: "130px", paddingTop: "5px" }}
            className={styles.input}
            type="text"
            placeholder="Enter 
            A Topic, Like 'Channel Problem...' "
          />
        </div>
      </div>
      <div className={styles.cta}>
        <button className={styles.btn}> SEND NOW </button>
      </div>
      <div onClick={close} className={styles["close-btn"]}>
        <Arrow height={20} width={20} fill="blue" />
      </div>
    </div>
  );
};

export default ContactUs;
