import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import RepoCard from "../RepoCard/RepoCard";
import styles from "./RepoList.module.css";

const RepoList = ({ repoData }) => {
  return (
    <div>
      {repoData.map((repository) => {
        return (
          <RepoCard
            key={repository.id}
            owner={repository.owner}
            repoName={repository.name}
            description={repository.description}
            stars={repository.stargazers_count}
            issues={repository.open_issues_count}
            createdAt={repository.created_at}
          />
        );
      })}
    </div>
  );
};

export default RepoList;
