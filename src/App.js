import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Notes from "./Notes/Notes";
import Context from "./Context";
import AddNote from "./AddNote/AddNote";

class App extends React.Component {
  state = {
    notes: [],
    folders: [],
    handleDeleteNote: (noteId, history) => {
      fetch(`http://localhost:9090/notes/${noteId}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) return res.json().then((e) => Promise.reject(e));
          return res.json();
        })
        .then(() => {
          this.setState(
            {
              notes: this.state.notes.filter((note) => note.id !== noteId),
            },
            () => history.push("/")
          );
        })
        .catch((error) => {
          console.error({ error });
        });
    },
    addNote: (note) => {
      this.setState({ notes: [...this.state.notes, note] });
      fetch(`https://localhost:9090/notes/${note}`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    },
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

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <Route path="/" component={Header} />
          <Route path="/" component={SideBar} />
          <Route path="/" component={Notes} />
          <Route path="/addNote" component={AddNote} />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
