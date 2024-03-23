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
  
  // const { itemCards } = resInfo?.cards[ 2 ]?.groupedCard?.cardGroupMap?.REGULAR?.cards[ 1 ]?.card?.card;
  // console.log(itemCards);

  const cardsArray = resInfo?.cards[ 2 ]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // console.log(cardsArray);


  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - { costForTwoMessage }</p>
      <h2>Menu</h2>
      {cardsArray.map((eachCard) => {
        // console.log(eachCard.card.card[ '@type' ].includes('ItemCategory'));
        // console.log(eachCard);
        // console.log('============');
        // console.log(eachCard.card.card['itemCards']);
        if (eachCard.card.card[ '@type' ].includes('ItemCategory') && !eachCard.card.card[ '@type' ].includes('NestedItemCategory')) {
          return (
           <div className="item-category">
              <h1>{eachCard.card.card[ 'title' ]}</h1>
                          {/* const {itemCards} = eachCard.card.card; */}
            <ul>
              {eachCard.card.card['itemCards'].map((item) => (
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