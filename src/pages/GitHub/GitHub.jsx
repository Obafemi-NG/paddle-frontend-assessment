import { useState } from "react";
import Header from "../../components/Header/Header";
import RepoList from "../../components/RepoList/RepoList";
import { SpinnerCircular } from "spinners-react";
import styles from "./GitHub.module.css";

const GitHub = () => {
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const url =
    "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&per_page=100&page=2";
  const fetchRepos = async () => {
    setLoading(true);
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
    setLoading(false);
  };

  return (
    <div>
      <Header fetchRepo={fetchRepos} />

      <RepoList repoData={repo} />

      {loading && (
        <div className={styles.spinner}>
          <SpinnerCircular color="#205375" />
          <div className={styles.loading}>Loading...</div>
        </div>
      )}
    </div>
  );
};

export default GitHub;
