import "./BottomBar.css";
import { RiBook3Line } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import React from "react";

const BottomBar: React.FC = () => {
  return (
    <div className="btmbarCon">
      <div className="btmBar">
        <Link style={{ textDecoration: "none", color: "whitesmoke" }} to="/">
          <div className="navIcon">
            <FiHome style={{ fontSize: "18px", marginRight: "7px" }} />
            <div>Home</div>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "whitesmoke" }} to="/docs">
          <div className="navIcon">
            <RiBook3Line style={{ fontSize: "18px", marginRight: "7px" }} />
            <div>Favourite Images</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
