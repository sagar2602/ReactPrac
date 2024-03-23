import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
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
                  <span className="cost">{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                  <span className="rating">{item.card.info.ratings.aggregatedRating.rating}</span>
                </li>
              ))}
            </ul>
            </div>
          )
        }
        else if (eachCard.card.card[ '@type' ].includes('NestedItemCategory')) {
          const { title, categories } = eachCard.card.card;
          return (
            <div className="item-nested-category" key={index}>
              <h1>{"**Nested**" + title}</h1>
               {categories.map((eachCategory, i) => 
                 <div className="item-nested-category" key={i}>
                    <h2>{"**" + eachCategory['title'] + "**"}</h2>
                    <ul>
                     {eachCategory[ 'itemCards' ].map((iCards) =>
                       (
                        <li key={iCards.card.info.id } className="item-details">
                          <span className="title">{iCards.card.info.name}</span>
                          <span className="cost">{iCards.card.info.price / 100 || iCards.card.info.defaultPrice / 100}</span>
                          <span className="rating">{iCards.card.info.ratings?.aggregatedRating?.rating || 0.00 }</span>
                        </li>
                      )) }
                    </ul>
                  </div>
                )}
            </div>
          )
        }
  })}
    </div>
  )
}

export default RestaurantMenu;