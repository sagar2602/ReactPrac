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
const Card = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ilautxtm7p3tf9cibcnc"></img>
      <h3>{ resData.info.name }</h3>
      <h4>{ resData.info.cuisines.join(", ") }</h4>
      <h4>{ resData.info.avgRatingString } stars</h4>
      <h4>{resData.info.sla.slaString }</h4>
    </div>
  )
}

const resObject = {
  info: {
    id: "140666",
    name: "Burger King",
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    locality: "ASJ Grand Plaza Mall",
    areaName: "Dwarika Puri",
    costForTwo: "₹350 for two",
    cuisines: [
      "Burgers",
      "American"
    ],
    avgRating: 4.4,
    parentId: "166",
    avgRatingString: "4.4",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 18,
      lastMileTravel: 1.5,
      serviceability: "SERVICEABLE",
      slaString: "18 mins",
      lastMileTravelString: "1.5 km",
      iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
      nextCloseTime: "2023-12-22 23:59:00",
      opened: true
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {}
      }
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹129"
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      freedelMessage: "FREE DELIVERY",
      badgeType: "BADGE_TYPE_ONE_LITE"
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {}
      }
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {}
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/burger-king-asj-grand-plaza-mall-dwarika-puri-muzaffarnagar-140666",
    type: "WEBLINK"
  }
};


// Body Componenet 
const Body = () => {
  return (
    <div className="body-container">
      <div className="search">

      </div>
      <div className="restaurant-container">
        <Card resData={ resObject } />
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


