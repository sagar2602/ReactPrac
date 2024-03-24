import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Body Componenet 
const Body = () => {
  // Local State variable - superpoerful variable
  const [ listOfRests, setListOfRestraunt ] = useState([]);
  const [ filteredRestaurant, setFileteredRestraunt ] = useState([]);
  const [ searchText, setInput ] = useState("");

  // Whever the state variable gets updated, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.608637&lng=77.359795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    // Convert data to JSON
    const jsonData = await data.json();
    const resList = jsonData?.data?.cards[ 4 ]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // Optional Chaining
    setListOfRestraunt(resList);
    setFileteredRestraunt(resList);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are Offline!. Please check your internet connection</h1>

  return (listOfRests.length === 0) ? <Shimmer/> : (
    <div className="body-container">
      <div className="filter flex">
      <div className="search p-4 m-4"> 
          <input className="border border-solid border-black" type="text" value={searchText} onChange={(e) => {
            setInput(e.target.value);
        }}>
        </input>
          <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={() => {
            // Filter the restaurant cards and update the UI
            // search text
            const filteredRest = listOfRests.filter((res) => {
              return res.info.name.toLowerCase().includes(searchText.toLowerCase())
            });
            setFileteredRestraunt(filteredRest);

        }}>Search</button>
      </div>
        <div className="p-4 m-4 flex items-center">
          <button
          className="filter-btn px-4 py-1 bg-gray-100 m-4 rounded-lg"
          onClick={() => {
            const topRatedList = listOfRests.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestraunt(topRatedList);
          }}
        > Top Rated </button>
      </div>
      </div>
      <div className="restaurant-container flex flex-wrap">
      {
        filteredRestaurant.map(restaurant => (<Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><Card resData={restaurant} /></Link>))
      }
      </div>
    </div>
  )
}

export default Body;