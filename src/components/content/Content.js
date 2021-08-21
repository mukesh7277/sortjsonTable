import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Topbar from "./Topbar";
import Campaigns from "../../pages/Campaigns";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      <Route exact path="/" component={() => "Get Started"} />
      <Route exact path="/templates" component={() => "Template"} />
      <Route exact path="/campaigns" component={Campaigns} />
      <Route exact path="/integrations" component={() => "Integrations"} />
      <Route exact path="/manageWeb" component={() => "Manage Websites"} />
      <Route exact path="/settings" component={() => "Settings"} />
    </Switch>
  </Container>
);

export default Content;
