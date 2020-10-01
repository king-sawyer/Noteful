import React from "react";
import { Link } from "react-router-dom";
import folders from "../STORE";

function baseFolds() {
  return (
    <div>
      <ul>
        {folders.folders.map((fold) => (
          <li key={`${fold.id}`}>
            <Link to={`/folders/${fold.id}`}>{fold.name}</Link>
          </li>
        ))}
      </ul>
      <button>+ Folder</button>
    </div>
  );
}

export default baseFolds;
