import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// Body Componenet 
const Body = () => {
  // Local State variable - superpoerful variable
  const [ listOfRests, setListOfRestraunt ] = useState([]);
  const [ defaultResList, setDefaultRestList ] = useState([]);
  const [ searchText, setInput ] = useState("");

  // Whever the state variable gets updated, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.608637&lng=77.359795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    // Convert data to JSON
    const jsonData = await data.json();
    const resList = jsonData?.data?.cards[ 5 ]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // Optional Chaining
    setListOfRestraunt(resList);
    setDefaultRestList(resList);
  };

  return (listOfRests.length === 0) ? <Shimmer/> : (
    <div className="body-container">
      <div className="filter">
      <div className="search"> 
          <input className="search-box" type="text" value={searchText} onChange={(e) => {
            setInput(e.target.value);
        }}>
        </input>
          <button onClick={() => {
            // Filter the restaurant cards and update the UI
            // search text
            const filteredRest = defaultResList.filter((res) => {
              return res.info.name.toLowerCase().includes(searchText.toLowerCase())
            });
            setListOfRestraunt(filteredRest);

        }}>Search</button>
      </div>
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