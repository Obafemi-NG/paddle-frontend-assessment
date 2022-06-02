import React from "react";

const RepoCard = ({ data }) => {
  const today = new Date();
  const priorDate = new Date().setDate(today.getDate());
  return (
    <div>
      <div>{priorDate}</div>
      <div> {data.map((repo) => console.log(repo.created_at))} </div>
    </div>
  );
};

export default RepoCard;
