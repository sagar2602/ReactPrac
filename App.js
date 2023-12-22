import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Bar
 * Body
 *  - Search Bar
 *  - Card Container
 *    - Restaruant Cards
 *      - Img
 *      - Star Rating
 *      - Cuisines
 *      - Name of rest
 *      - deleievery time
 * Footer
 *  - Copyright
 *  - Privacy Policy
 *  - Social Icons
 *  - ContactUs
 */

// Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

// Inline CSS in JSX
const styleCard = {
  backgroundColor: "#f0f0f0"
}

// Restaurant Card 
const Card = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ilautxtm7p3tf9cibcnc"></img>
      <h3>Bikkgane Biryani</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.3*</h4>
      <h4>38 minutes</h4>
    </div>
  )
}

// Body Componenet 
const Body = () => {
  return (
    <div className="body-container">
      <div className="search">

      </div>
      <div className="restaurant-container">
        <Card />
      </div>
    </div>
  )
}

// Build App Layout Component
const AppLayout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


