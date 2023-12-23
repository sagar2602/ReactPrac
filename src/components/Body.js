import Card from "./Card";
import resObject from "../utils/mockData";

// Body Componenet 
const Body = () => {
  let listOfRests = [
    {
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
        avgRatingString: "4.4",
        sla: {
          deliveryTime: 18,
          slaString: "18 mins",
        },
      },
    },
    {
      info: {
        id: "140667",
        name: "KFC",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "ASJ Grand Plaza Mall",
        areaName: "Dwarika Puri",
        costForTwo: "₹350 for two",
        cuisines: [
          "Burgers",
          "American"
        ],
        avgRating: 4.5,
        avgRatingString: "4.4",
        sla: {
          deliveryTime: 18,
          slaString: "18 mins",
        },
      },
    },
    {
      info: {
        id: "140668",
        name: "Burger King-duplicate",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "ASJ Grand Plaza Mall",
        areaName: "Dwarika Puri",
        costForTwo: "₹350 for two",
        cuisines: [
          "Burgers",
          "American"
        ],
        avgRating: 3.3,
        avgRatingString: "3.3",
        sla: {
          deliveryTime: 18,
          slaString: "18 mins",
        },
      },
    },
  ];
  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log('clicked');
          }}
        > Top Rated </button>
      </div>
      <div className="restaurant-container">
        {
          listOfRests.map(restaurant => <Card key={restaurant.info.id
          } resData={restaurant} />)
        }
      </div>
    </div>
  )
}

export default Body;