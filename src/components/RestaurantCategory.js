import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [ showItems, setShowItems ] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  }
  return (
    <div>
      <div className="accordion width-6/12 mx-[200px] my-4 bg-gray-50 shadow-lg p-4">
        {/** Accordion Header */}
        <div className="acc-header flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
          <span>🔽</span>
        </div>
        {/** Accordion Body */}
        { showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  )
}

export default RestaurantCategory;