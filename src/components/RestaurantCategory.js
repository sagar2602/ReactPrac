import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      <div className="accordion width-6/12 mx-[200px] my-4 bg-gray-50 shadow-lg p-4">
        {/** Accordion Header */}
        <div className="acc-header flex justify-between">
          <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
          <span>🔽</span>
        </div>
        {/** Accordion Body */}
        <ItemList items={data.itemCards} />
      </div>
    </div>
  )
}

export default RestaurantCategory;