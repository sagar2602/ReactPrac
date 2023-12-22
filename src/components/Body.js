import Card from "./Card";
import resObject from "../utils/mockData";

// Body Componenet 
const Body = () => {
  return (
    <div className="body-container">
      <div className="search">

      </div>
      <div className="restaurant-container">
        {
          resObject.map(restaurant => <Card key={restaurant.info.id
          } resData={restaurant} />)
        }
      </div>
    </div>
  )
}

export default Body;