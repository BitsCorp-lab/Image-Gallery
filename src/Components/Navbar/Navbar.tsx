import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
    return (
        <div className="navbarWrap">
            <div className="navTitle">Image Gallery</div>
            <div className="navProfile">Hello!</div>
        </div>
    );
};

export default Navbar;
