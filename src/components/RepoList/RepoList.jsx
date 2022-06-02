import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import RepoCard from "../RepoCard/RepoCard";
import styles from "./RepoList.module.css";

const RepoList = ({ repoData }) => {
  // const today = new Date().getTime();
  // console.log(today);
  // const priorDate = new Date().setDate(today.getDate());
  return (
    <div>
      {repoData.map((repository) => {
        const dateCreated = new Date(repository.created_at);
        const todaysDate = new Date("2021-09-13");
        const differenceInTime = dateCreated.getTime() - todaysDate.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        console.log(Math.floor(differenceInDays));

        return (
          <div>
            {differenceInDays < 30 && differenceInDays > 0 && (
              <RepoCard
                key={repository.id}
                owner={repository.owner}
                repoName={repository.name}
                description={repository.description}
                stars={repository.stargazers_count}
                issues={repository.open_issues_count}
                createdAt={repository.created_at}
                Day={differenceInDays}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RepoList;
