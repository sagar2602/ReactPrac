import Card from "./Card";
import { useState, useEffect } from "react";

// Body Componenet 
const Body = () => {
  // Local State variable - superpoerful variable
  const [ listOfRests, setListOfRestraunt ] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.608637&lng=77.359795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    //Convert data to JSON
    const jsonData = await data.json();
    // Optional Chaining
    setListOfRestraunt(jsonData?.data?.cards[ 1 ]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // Spinning Wheel
  if (listOfRests.length === 0) {
    return <h1>Loading...........</h1>;
  }

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