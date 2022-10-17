import React from "react";
import dateFormat from "dateformat";

export default function Profile(user) {
  const twitter = user.profile.twitter_username;
  const blogurl = user.profile.blog;
  return (
    <div className="card">
      <img src={user.profile.avatar_url} className="avatar" alt={user.profile.name} />
      <div className="user-info">
        <h2>{user.profile.name}</h2>
        <small>Member Since: {dateFormat(user.profile.created_at, "dS mmmm yyyy")}</small>
        <p>{user.bio || 'No bio 😒'}</p>
        <ul className="info">
          <li>{user.profile.followers}<strong> Followers</strong></li>
          <li>{user.profile.following}<strong> Following</strong></li>
          <li>{user.profile.public_repos}<strong> Public Repos</strong></li>
          <li>{user.profile.public_gists}<strong> Public Gists</strong></li>
        </ul>
        <ul className="info">
          <li>Company: <br/>{user.profile.company || 'none'}</li>
          <li>Website: <br/><a className="text-decoration-none" href={`http://${blogurl}`}>
            {user.profile.blog}</a></li>

            {user.profile.twitter_username ? (
        <li>Twitter: <br/><a className="text-decoration-none" href={`http://www.twitter.com/${twitter}`}>{user.profile.twitter_username}</a></li>
        ) : null}
        <li>Address: <br/>{user.profile.location}</li>
        </ul>        

        <button href={user.profile.html_url} className="btn btn-primary btn-block mt-3 mb-3 w-100"> View Profile</button>
      </div>
     
    </div>
  );
}