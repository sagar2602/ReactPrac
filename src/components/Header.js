import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";



// Header Component
const Header = () => {
  const [ btn, updateBtn ] = useState("Login");
  console.log("Header render");

  // Case-1-If no dependency array => useEffect is called on every render
  useEffect(() => {
    console.log("useEffect callback");
  });
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={ LOGO_URL }
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={
            () => {
              btn === "Login"
                ? updateBtn("Logout")
                : updateBtn("Login");
            }
          }
          >{btn}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;