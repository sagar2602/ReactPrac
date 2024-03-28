import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_IMG_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;
  const cardsDetails = resInfo?.cards;

  const { itemCards } = resInfo?.cards[ 4 ]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

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
      <ul>
      {
        itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name + " - Rs." + (item.card.info.price / 100 || 0.00)}
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default RestaurantMenu;