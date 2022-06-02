import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import RepoList from "../../components/RepoList/RepoList";

const GitHub = () => {
  const [repo, setRepo] = useState([]);
  const url =
    "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=2";
  const fetchRepos = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const repoData = data.items;
      setRepo(repoData);
      console.log(repoData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header fetchRepo={fetchRepos} />
      <RepoList repoData={repo} />
    </div>
  );
};

export default GitHub;
