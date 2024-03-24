import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_IMG_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[ 0 ]?.card?.card?.info;

  const cardsArray = resInfo?.cards[ 2 ]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="menu">
      <h1 className="px-4 m-1 font-bold">{name}</h1>
      <p className="px-4 m-1">{cuisines.join(", ")} - { costForTwoMessage }</p>
      <h2 className="p-4 m-4">Menu...</h2>
      {cardsArray.map((eachCard, index) => {
        if (eachCard.card.card[ '@type' ].includes('ItemCategory') && !eachCard.card.card[ '@type' ].includes('NestedItemCategory')) {
          // Destructuring to make it easy to read.
          const { title, itemCards } = eachCard.card.card;
          return (
           <div className="item-category" key={index}>
              <h1 className="p-4 m-4 font-bold">{title}</h1>
            <ul>
              {itemCards.map((item) => (
                <li key={item.card.info.id} className="item-details flex justify-between border-b border-solid border-black">
                  <div className="flex flex-col">
                    <span className="title px-24 mx-24 font-bold">{item.card.info.name}</span>
                    <span className="cost px-24 mx-24">{"Rs." + (item.card.info.price / 100 || item.card.info.defaultPrice / 100)}</span>
                    <span className="rating px-24 mx-24">{(item.card.info.ratings.aggregatedRating.rating || 0.00) + "*"}</span>
                    <span className="description px-24 mx-24 my-4 pb-4">{item.card.info.description}</span>
                  </div>
                  <div>
                    <img className="img p-4 mb-8 w-[200px] h-40 rounded-3xl" src={ MENU_IMG_URL + item.card.info.imageId}></img>
                  </div>
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
              <h1 className="p-4 m-4 font-bold">{"**Nested**" + title}</h1>
               {categories.map((eachCategory, i) => 
                 <div className="item-nested-category" key={i}>
                    <h2 className="p-4 m-4 font-semibold">{"**" + eachCategory['title'] + "**"}</h2>
                    <ul>
                     {eachCategory[ 'itemCards' ].map((iCards) =>
                       (
                       <li key={iCards.card.info.id} className="item-details flex justify-between border-b border-solid border-black">
                         <div className="flex flex-col">
                            <span className="title px-24 mx-24 font-bold">{iCards.card.info.name}</span>
                            <span className="cost px-24 mx-24">{ "Rs." + (iCards.card.info.price / 100 || iCards.card.info.defaultPrice / 100)}</span>
                            <span className="rating px-24 mx-24">{(iCards.card.info.ratings?.aggregatedRating?.rating || 0.00) + "*"}</span>
                            <span className="description px-24 mx-24 my-4 pb-4">{iCards.card.info.description}</span>
                         </div>
                         <div>
                           <img className="img p-4 mb-8 w-[200px] h-40 rounded-3xl" src={ MENU_IMG_URL + iCards.card.info.imageId}></img>
                         </div>
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