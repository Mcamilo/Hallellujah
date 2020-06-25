import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";

import Sidebar from "components/Sidebar/Sidebar.jsx";
import { isAuthenticated } from "../services/auth";

import {routesUser} from "routes.js";

var ps;

class DashboardUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "info"
    };
    console.log(routesUser)
    this.mainPanel = React.createRef();
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  handleActiveClick = color => {
    this.setState({ activeColor: color });
  };
  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };

  PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}

          routes={routesUser}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
        />
        <div className="main-panel" ref={this.mainPanel}>

          <Switch>
            {routesUser.map((prop, key) => {
              return (
                <this.PrivateRoute
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
          </Switch>
        </div>
      </div>
    );
  }
}

export default DashboardUser;
