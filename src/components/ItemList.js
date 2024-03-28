import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="acc-body">
      {items.map((item) => {
        return (
          <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 flex justify-between">
            <div className="first-section w-9/12">
              <div className="flex flex-col">
                <span className="">{item?.card?.info?.name}</span>
                <span className="">{"₹ " + (item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice || 0.00)}</span>
              </div>
              <p className="text-xs">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="second-section w-3/12">
             <div className="absolute">
                <button className="p-2 bg-white text-green-600 shadow-lg mx-16 my-28 rounded-lg">Add +</button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} className="w-full rounded-lg" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ItemList;