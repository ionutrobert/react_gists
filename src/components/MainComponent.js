import React, { useState } from "react";
import Profile from "./Profile";
import Repos from "./Repos";
import GistsCard from "./GistsCard";
import axios from "axios";
import { octokit } from "../octokit";

export default function MainComponent() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState(null);
  const [gists, setGists] = useState(null);

  const updateInput = (e) => {
    setUsername(e.target.value);
  };

  const searchUser = (event) => {
    event.preventDefault();
    searchProfile(username);
    searchRepos(username);
    searchGists(username);
  };

  const searchProfile = (username) => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const searchRepos = (username) => {
    axios
      .get(`https://api.github.com/users/${username}/repos?page=1&per_page=100`)
      .then((res) => {
        setRepos(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  async function searchGists(username) {
    await octokit
      .request(`GET /users/${username}/gists`)
      .then((res) => {
        setGists(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <main>
      <div className="search">
        <div>
          <h1>Search Github User</h1>
        </div>
        <div>
          <form id="form" onSubmit={searchUser}>
            <input
              onChange={updateInput}
              value={username}
              type="text"
              id="search"
              placeholder="Github Username"
            />
            <input
              type="submit"
              id="searchBtn"
              className="btn btn-success"
              value="Search"
            />
          </form>
        </div>
      </div>

      <>
        {profile ? <Profile profile={profile} /> : null}

        {repos ? <Repos repos={repos} /> : null}

        {gists ? <GistsCard gists={gists} /> : null}
      </>
    </main>
  );
}
