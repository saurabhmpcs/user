import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeClass="active">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div className="">
            <p>PUBLIC</p>
          </div>
          <NavLink
            to="/Questions"
            className="side-nav-links"
            activeclassname="active"
          >
            <img src={Globe} alt="Globe" />
            <p style={{ paddingLeft: "10px" }}> Questions</p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="side-nav-links"
            style={{ paddingLeft: "10px" }}
          >
            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="side-nav-links"
            style={{ paddingLeft: "10px" }}
          >
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
