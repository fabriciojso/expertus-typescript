import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import ApplicationAddPage from "./pages/ApplicationAddPage";
import ApplicationListPage from "./pages/ApplicationListPage";
import "./styles/global";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/application" component={ApplicationListPage} />
      <Route
        exact={true}
        path="/application/add"
        component={ApplicationAddPage}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
