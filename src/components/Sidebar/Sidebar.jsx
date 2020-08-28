import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { logout } from "../../services/auth"
import { getEmail } from "../../services/auth"
import '../../assets/css/Main.css'

import logo from "../../assets/img/logo-branco-c-slogan.png";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }

  handleClick(){
    logout()
  }
  render() {
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
      >
        <div className="logo">
          <a
            href="#"
            className="simple-text logo-normal"
          >
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
            
          </a>
        </div>
        <div className="sidebar-wrapper" ref={this.sidebar} style={{overflowX:"hidden"}}>
          <Nav>
            <li
            className="email"
            >
            Bem vindo(a) {getEmail()}
            </li>
            {this.props.routes.map((prop, key) => {
              // Avaliar single project
              if(prop.visible){
              return (
                <li
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
              }
            })}
            <li>
              <NavLink
                onClick={this.handleClick.bind(this)}
                to="/"
              >
                <i className="nc-icon nc-simple-remove" />
                <p>Logout</p>
              </NavLink>
            </li>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
