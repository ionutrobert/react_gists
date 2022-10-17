import React from "react";
import dateFormat from "dateformat";

export default function Repos(user) {
  // console.log(user.repos);
  const repos = user.repos;

  return (
    <div id="repos">
      <h1>Public Repos</h1>

      {repos.map((repo) => {
        return (
          <div key={repo.id} className="repo">
            <div className="column">
              <h3>
                <a
                  className="mb-6 text-uppercase text-decoration-none"
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {repo.name}
                </a>
              </h3>
              <p className="mt-2 mb-2">{repo.description}</p>

              {repo.language ? (
                <p>
                  Language:{" "}
                  <span className="badge bg-info">{repo.language}</span>
                </p>
              ) : null}

              {repo.homepage ? (
                <p>
                  Demo: <a href={repo.homepage}>Click Here</a>
                </p>
              ) : null}
            </div>
            <div className="column">
              <div className="">
                <p className="badge bg-primary p-2 mx-2">
                  Stars: {repo.stargazers_count}
                </p>
                <p className="badge bg-secondary p-2 mx-2">
                  Watchers: {repo.watchers_count}
                </p>
                <p className="badge bg-success p-2">
                  Forks: {repo.forks_count}
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <p className=" d-block mt-3">
                  Created:{" "}
                  <b>{dateFormat(repo.created_at, "dS mmm yyyy, h:MM TT")}</b>
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <p className=" d-block mt-3">
                  Update: {dateFormat(repo.updated_at, "dS mmm yyyy, h:MM TT")}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
