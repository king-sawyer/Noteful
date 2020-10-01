import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Notes from "./Notes/Notes";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route path="/" component={SideBar} />
      <Route path="/" component={Notes} />
    </div>
  );
}

export default App;
