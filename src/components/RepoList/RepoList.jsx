import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import RepoCard from "../RepoCard/RepoCard";
import styles from "./RepoList.module.css";

const RepoList = ({ repoData }) => {
  return (
    <div>
      <RepoCard data={repoData} />
    </div>
  );
};

export default RepoList;
