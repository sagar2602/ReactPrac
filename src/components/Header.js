import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



// Header Component
const Header = () => {
  const [ btn, updateBtn ] = useState("Login");
  console.log("Header render");

  // Case-1-If no dependency array => useEffect is called on every render.
  // Case-2-If dependency array is empty => useEffect is called only on intial render(just once).
  // Case-3-If there is something inside dependency array => useEffect is called only when dependency changes; 
  // Case-3-ex- If dependency array is [btn] => called everytime btn gets updated.
  useEffect(() => {
    console.log("useEffect callback");
  }, [btn]);
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
          <li><a href="/about">About Us</a></li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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