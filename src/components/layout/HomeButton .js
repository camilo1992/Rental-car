import React from "react";
import { Link } from "react-router-dom";
function HomeButton(props) {
  return (
    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
      Home
    </Link>
  );
}

export default HomeButton;
