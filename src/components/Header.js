import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Header Component
const Header = () => {
  const [ btn, updateBtn ] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // Case-1-If no dependency array => useEffect is called on every render.
  // Case-2-If dependency array is empty => useEffect is called only on intial render(just once).
  // Case-3-If there is something inside dependency array => useEffect is called only when dependency changes; 
  // Case-3-ex- If dependency array is [btn] => called everytime btn gets updated.
  useEffect(() => {
    console.log("useEffect callback");
  }, [btn]);
  return (
    <div className="flex justify-between bg-pink-50 sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img
          className="w-56"
          src={ LOGO_URL }
        ></img>
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            OnlineStatus: {onlineStatus ? "✅" : "🔴" }
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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