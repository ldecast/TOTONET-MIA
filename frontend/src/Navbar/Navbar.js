import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function GetButtonText(session) {
    const path = useLocation().pathname;
    if (!session.logged) {
        if (path === "/Login")
            return "Home";
        else
            return "Login";
    }
    else {
        return "Logout";
    }
}

function Navbar(props) {
    let _t = GetButtonText(props.session);
    return (
        <div className="topnav">
            <h1>TOTONET</h1>
            <Link id="login" to={`/${_t}`}>{_t}</Link>
        </div>
    );
}

export default Navbar;