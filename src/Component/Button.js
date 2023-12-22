import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button() {
  return (
    <div>
    <Link to="signup">
      <button className="btn">SignUp</button>
    </Link>
    </div>
   
  );
}

export default Button;