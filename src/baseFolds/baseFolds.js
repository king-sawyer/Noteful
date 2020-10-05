import React from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

class baseFolds extends React.Component {
  static contextType = Context;
  render() {
    return (
      <div>
        <ul>
          {this.context.folders.map((fold) => (
            <li key={`${fold.id}`}>
              <Link to={`/folders/${fold.id}`}>{fold.name}</Link>
            </li>
          ))}
        </ul>
        <button>+ Folder</button>
      </div>
    );
  }
}

export default baseFolds;
