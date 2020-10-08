import React from "react";
// import folders from "../STORE";
import Context from "../Context";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class SFolder extends React.Component {
  static contextType = Context;
  render() {
    let note =
      this.context.notes.find(
        (snote) => snote.id === this.props.match.params.noteid
      ) || null;

    let folder = note
      ? this.context.folders.find((sfolder) => sfolder.id === note.folderId)
      : {};

    return (
      <div>
        {folder.name}
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

export default SFolder;

SFolder.propTypes = {
  context: PropTypes.shape({
    notes: PropTypes.object,
    folders: PropTypes.object,
  }),
};
