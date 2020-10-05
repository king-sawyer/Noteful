import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Notes from "./Notes/Notes";
import Context from "./Context";

class App extends React.Component {
  state = {
    notes: [],
    folders: [],
  };

  componentDidMount() {
    fetch("http://localhost:9090/notes")
      .then((response) => {
        if (!response.ok) {
          return response.json().then((e) => Promise.reject(e));
        }
        return response.json();
      })
      .then((notes) => this.setState({ notes }))
      .catch((error) => {
        console.error(error);
      });

    fetch("http://localhost:9090/folders")
      .then((response) => {
        if (!response.ok) {
          return response.json().then((e) => Promise.reject(e));
        }
        return response.json();
      })
      .then((folders) => this.setState({ folders }))
      .catch((error) => console.error(error));
  }

  handleDeleteNote = (noteId) => {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== noteId),
    });
  };

  render() {
    let value = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.handleDeleteNote,
    };

    return (
      <Context.Provider value={value}>
        <div className="App">
          <Route path="/" component={Header} />
          <Route path="/" component={SideBar} />
          <Route path="/" component={Notes} />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
