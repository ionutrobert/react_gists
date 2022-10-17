import React from "react";
import Gist from "super-react-gist";

const GistsCard = ({ gists }) => {
  function toDate(dateStr) {
    var parts = dateStr.slice(0, 10).split("-");
    return "Created at: " + parts[2] + "/" + parts[1] + "/" + parts[0];
  }
  return (
    <div id="repos">
      <h1>Public Repos</h1>
      {gists.map((gist, index) => (
        <div className="gist" key={index}>
          <p>
            <b>
              <a href={gist.html_url}>{gist.html_url}</a>
            </b>
          </p>

          <p>{gist.description}</p>
          <p>{toDate(gist.created_at)}</p>

          <div>
            <Gist url={gist.html_url} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GistsCard;
