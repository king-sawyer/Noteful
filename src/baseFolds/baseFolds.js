import React from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import PropTypes from "prop-types";

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
        <Link to="/addFolder">
          <button>+ Folder</button>
        </Link>
      </div>
    );
  }
}

export default baseFolds;

baseFolds.propTypes = {
  context: PropTypes.shape({
    folders: PropTypes.object,
  }),
};
