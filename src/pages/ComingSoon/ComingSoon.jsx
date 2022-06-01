import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./ComingSoon.module.css";

const ComingSoon = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const handleContactUs = () => {
    setIsAnimate(!isAnimate);
  };
  const countdown = [
    {
      id: "days",
      title: "Days",
      value: 7,
    },
    {
      id: "hours",
      title: "Hours",
      value: 24,
    },
    {
      id: "minutes",
      title: "Minutes",
      value: 54,
    },
    {
      id: "second",
      title: "Second",
      value: 11,
    },
  ];
  return (
    <div
      className={isAnimate ? `${styles.blur}` : `${styles["page-container"]}`}
    >
      <NavBar contactUs={handleContactUs} />
      <div className={styles["big-sphere"]} />
      <div className={styles["medium-sphere"]} />
      <div className={styles["small-sphere"]} />
      <div className={styles["page-content"]}>
        <div className={isAnimate ? `${styles.lowercase}` : `${styles.header}`}>
          {" "}
          SOMETHING AWESOME IS <br /> COMING SOON{" "}
        </div>
        <div className={styles["sub-header"]}>
          {" "}
          Yout all-in-one affiliate marketing tracking software <b>
            track
          </b>, <b>automate</b> and <br /> <b>optimize</b> your campaigns{" "}
        </div>
        <div className={styles.counter}>
          {countdown.map((cntdwn) => (
            <div className={styles["count-box"]}>
              <div className={styles["count-value"]}>{cntdwn.value}</div>
              <div className={styles["count-title"]}> {cntdwn.title} </div>
            </div>
          ))}
        </div>
        <div className={styles["form-container"]}>
          <div
            className={
              isAnimate ? `${styles.display}` : `${styles["input-container"]}`
            }
          >
            <div className={styles.form}>
              <input
                className={styles["name-input"]}
                type="text"
                name="firstName"
              />
              <label htmlFor="firstName"> First Name </label>
            </div>
            <div className={styles.form}>
              <input
                className={styles["name-input"]}
                type="text"
                name="lastName"
              />
              <label htmlFor="lastName"> Last Name </label>
            </div>
          </div>
          <div
            className={
              isAnimate ? `${styles["move-up"]}` : `${styles["email-section"]}`
            }
          >
            <input className={styles["email-input"]} type="email" />
            <button
              className={
                isAnimate
                  ? `${styles["btn-move-up"]}`
                  : `${styles["email-btn"]}`
              }
            >
              JOIN OUR WAITING LIST
            </button>
          </div>
        </div>
        <div className={styles.footer}></div>
      </div>
    </div>
  );
};

export default ComingSoon;
