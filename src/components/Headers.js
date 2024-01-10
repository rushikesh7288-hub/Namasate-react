import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Headers = () => {

  const [btnName ,  setBtnReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button className="login" onClick={ () =>{
            btnName === "Login" ? setBtnReact("Logout") : setBtnReact("Login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};
export default Headers
