import React from "react";
import Context from "../Context";
import PropTypes from "prop-types";

class AddFolder extends React.Component {
  static contextType = Context;
  render(props) {
    let randFold = "e" + Math.floor(Math.random() * 100000);

    let newFold = {
      id: randFold,
      name: this.context.newFoldName,
    };

    return (
      <div>
        <h2>Create a folder:</h2>
        <form
          onSubmit={(e) => {
            this.context.addFolder(e, newFold);
            this.props.history.push("/");
          }}
        >
          <label htmlFor="newFoldName" />
          <input
            required
            name="newFoldName"
            type="text"
            value={this.context.newFoldName}
            onChange={(e) => this.context.handleFolderChange(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddFolder;

AddFolder.propTypes = {
  context: PropTypes.shape({
    newFoldName: PropTypes.string,
    addFolder: PropTypes.func,
    handleFolderChange: PropTypes.func,
  }),
};
