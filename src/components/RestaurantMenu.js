import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [ resInfo, setResInfo ] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, [])

  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.608637&lng=77.359795&restaurantId=403547&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  }

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[ 0 ]?.card?.card?.info;

  // const { cardsArray } = resInfo?.cards[ 2 ]?.groupedCard?.cardGroupMap?.REGULAR?.cards;


  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - { costForTwoMessage }</p>
      <h2></h2>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  )
}

export default RestaurantMenu;