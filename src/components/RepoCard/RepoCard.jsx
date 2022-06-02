import React from "react";
import styles from "./RepoCard.module.css";

const RepoCard = ({ owner, repoName, description, stars, issues, Day }) => {
  // const today = new Date();
  // const priorDate = new Date().setDate(today.getDate());
  return (
    <div className={styles.container}>
      <div className={styles["repo-card"]}>
        <div className={styles["image-container"]}>
          <img
            src={owner.avatar_url}
            alt="owner_avatar"
            width={100}
            height={100}
          />
        </div>
        <div className={styles["repo-info"]}>
          <div className={styles.top}>
            <div className={styles.title}> {repoName} </div>
            <div className={styles.desc}> {description} </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.stars}> Stars: {stars}</div>
            <div className={styles.issues}> Issues: {issues}</div>

            <div className={styles.date}>{` Submitted ${Math.floor(
              Day
            )} days ago by ${owner.login} `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
