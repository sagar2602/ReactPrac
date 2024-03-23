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
    setResInfo(json.data);
  }

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[ 0 ]?.card?.card?.info;

  const cardsArray = resInfo?.cards[ 2 ]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - { costForTwoMessage }</p>
      <h2>Menu</h2>
      {cardsArray.map((eachCard, index) => {
        if (eachCard.card.card[ '@type' ].includes('ItemCategory') && !eachCard.card.card[ '@type' ].includes('NestedItemCategory')) {
          // Destructuring to make it easy to read.
          const { title, itemCards } = eachCard.card.card;
          return (
           <div className="item-category" key={index}>
              <h1>{title}</h1>
            <ul>
              {itemCards.map((item) => (
                <li key={item.card.info.id } className="item-details">
                  <span className="title">{item.card.info.name}</span>
                  <span className="cost">{item.card.info.price / 100}</span>
                  <span className="rating">{item.card.info.ratings.aggregatedRating.rating}</span>
                </li>
              ))}
            </ul>
            </div>
          )
        }
  })}
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  )
}

export default RestaurantMenu;