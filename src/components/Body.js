import Card from "./Card";
import resObject from "../utils/mockData";
import { useState } from "react";

// Body Componenet 
const Body = () => {
  // Local State variable - superpoerful variable
  const [ listOfRests, setListOfRestraunt ] = useState(resObject);

  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const topRatedList = listOfRests.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestraunt(topRatedList);
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