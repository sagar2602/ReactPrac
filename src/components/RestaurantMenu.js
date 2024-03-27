import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_IMG_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;
  const cardsDetails = resInfo?.cards;

  const cardsArray = resInfo?.cards[ 4 ]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="menu">
      {cardsDetails.map((eachC, i) => {
        if (eachC?.card?.card[ '@type' ].includes('swiggy.presentation.food.v2.Restaurant')) {
          const { id,name,cuisines,areaName,sla,avgRatingString,totalRatingsString,feeDetails,costForTwoMessage,gridElements } = eachC?.card?.card['info']
          return (
            <div className="widget-card mx-[200px]">
              <span className="font-bold text-xl">{name}</span>
              <div className="w-card flex justify-between">
                <div className="w-left-card flex flex-col">
                  <span className="">{name}</span>
                  <span className="">{cuisines.join(', ')}</span>
                  <span className="">{areaName + ', ' + sla.lastMileTravelString}</span>
                </div>
                <div className="w-right-card flex flex-col">
                  <span className="">{'*' + avgRatingString}</span>
                  <span className="">{totalRatingsString}</span>
                </div>
              </div>
              <span className="delievery">{"bike-symbol " + feeDetails.message}</span>
              <div className="offer-details">
                <div className="flex w-1/2 justify-between">
                  <span className="pp">{"progress-bar " + sla.slaString}</span>
                  <span className="pp1">{"Rs. " + costForTwoMessage}</span>
                </div>
              </div>
            <div className=""><h2 className="font-bold">Menu...</h2></div>
            </div>
          )
        }
        if (eachC?.card?.card[ '@type' ].includes('swiggy.gandalf.widgets.v2.GridWidget') && eachC?.card?.card?.gridElements.infoWithStyle[ '@type' ].includes('swiggy.presentation.food.v2.OfferInfoWithStyle')) {
          const { offers } = eachC?.card?.card?.gridElements.infoWithStyle;
          return (<div className="mx-[200px] flex">{
            offers.map((eachOffer, io) => {
              return (
                <div className="border border-solid border-black w-1/3 rounded-lg mr-2 p-4">
                  <div className="flex">
                    <img className="rounded-lg mr-2" src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/" + (((eachOffer.info.offerLogo === "offers/generic") || (eachOffer.info.offerLogo === "offers/save-big") || (eachOffer.info.offerLogo === "offers/deal-of-day")) ? "Store_Assets/Icons/OfferIconCart" : eachOffer.info.logoBottom) }></img>
                    <span className={"text-green-500" }>{eachOffer.info.header}</span>
                  </div>
                  <div className="flex">
                    <span className="mr-2">{eachOffer.info.couponCode}</span>
                    <span className="mr-2">{ "|" }</span>
                    <span>{ eachOffer.info.description }</span>
                  </div>
                </div>
              )
            })
          }</div>)
        }
      })}
      {cardsArray.map((eachCard, index) => {
        if (eachCard.card.card[ '@type' ].includes('ItemCategory') && !eachCard.card.card[ '@type' ].includes('NestedItemCategory')) {
          // Destructuring to make it easy to read.
          const { title, itemCards } = eachCard.card.card;
          return (
           <div className="item-category" key={index}>
              <h1 className="p-4 m-4 font-bold">{title}</h1>
            <ul>
              {itemCards.map((item) => (
                <li key={item.card.info.id} className="item-details flex justify-between border-b border-solid border-black mx-[200px]">
                  <div className="flex flex-col w-full pb-4 pt-4">
                    <span className="title font-bold">{item.card.info.name}</span>
                    <span className="cost">{"Rs." + (item.card.info.price / 100 || item.card.info.defaultPrice / 100)}</span>
                    <span className="rating">{(item.card.info.ratings.aggregatedRating.rating || 0.00) + "*"}</span>
                    <span className="description my-4">{item.card.info.description}</span>
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
              <h1 className="mx-[200px] font-bold">{title + "?"}</h1>
               {categories.map((eachCategory, i) => 
                 <div className="item-nested-category" key={i}>
                   <div className="inline-block mx-[200px]">
                     <h2 className="font-semibold">
                       {eachCategory[ 'title' ] + " >"}
                       <span className="border-b border-solid border-black inline-block w-[10px]"></span>
                     </h2>
                   </div>
                   {/* <h2 className="inline-block mx-[200px] font-semibold border-b border-solid border-black pb-4">{eachCategory[ 'title' ] + " >"}</h2> */}
                   {/* <div className="inline-block mx-[200px]">
                     <h2 className="font-semibold">{"hjhjhjhjh"}<span className="border-b border-solid border-black inline-block w-[10px]"></span> &gt;</h2>
                   </div> */}
                    <ul>
                     {eachCategory[ 'itemCards' ].map((iCards) =>
                       (
                       <li key={iCards.card.info.id} className="item-details flex justify-between border-b border-solid border-black mx-[200px]">
                         <div className="flex flex-col w-full pb-4 pt-4">
                            <span className="title font-bold">{iCards.card.info.name}</span>
                            <span className="cost">{ "Rs." + (iCards.card.info.price / 100 || iCards.card.info.defaultPrice / 100)}</span>
                            <span className="rating">{(iCards.card.info.ratings?.aggregatedRating?.rating || 0.00) + "*"}</span>
                            <span className="description my-4">{iCards.card.info.description}</span>
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