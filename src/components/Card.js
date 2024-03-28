import { CDN_URL } from "../utils/constants";

// Restaurant Card 
const Card = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString, sla } = resData?.info;
  return (
    <div className="res-card m-4 p-4 w-[250px] h-[480px] bg-gray-100 rounded-lg hover:bg-gray-300">
      <img
        className="res-logo rounded-lg h-60"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{ name }</h3>
      <h4>{ cuisines.join(", ") }</h4>
      <h4>{ avgRatingString } stars</h4>
      <h4>{ sla.slaString }</h4>
    </div>
  )
}

// Higher Order Components.
// input will be Card and output from Higher order component(withVegLabel) is VegCard

export const withVegLabel = (Card) => {
  return (props) => {
    return (
      <div>
        <label>Veg✅</label>
        <Card {...props} />
      </div>
    )
  }
}

export default Card;