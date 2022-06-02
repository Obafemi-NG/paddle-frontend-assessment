import React from "react";
import styles from "./RepoCard.module.css";

const RepoCard = ({
  owner,
  repoName,
  description,
  stars,
  issues,
  createAt,
}) => {
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
            <div className={styles.stars}>{stars}</div>
            <div className={styles.issues}>{issues}</div>
            <div className={styles.date}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
