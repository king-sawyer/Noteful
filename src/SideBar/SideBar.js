import React from "react";
import { Route, Switch } from "react-router-dom";
import baseFolds from "../baseFolds/baseFolds";
import SFolder from "../SFolder/SFolder";

function SideBar(props) {
  return (
    <div>
      <Switch>
        <Route
          path="/note/:noteid"
          render={(rprops) => <SFolder {...rprops} />}
        />
        <Route path="/" component={baseFolds} />
      </Switch>
    </div>
  );
}

export default SideBar;
