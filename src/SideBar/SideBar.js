import React from "react";
import { Route } from "react-router-dom";
import baseFolds from "../baseFolds/baseFolds";
import SFolder from "../SFolder/SFolder";

function SideBar(props) {
  return (
    <div className="sidebar">
      <Route exact path="/" component={baseFolds} />
      <Route
        path="/note/:noteid"
        render={(rprops) => <SFolder {...rprops} />}
      />
    </div>
  );
}

export default SideBar;
