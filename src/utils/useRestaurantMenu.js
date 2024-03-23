import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [ resInfo, setResInfo ] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, [])

  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.608637&lng=77.359795&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    setResInfo(json.data);
  }
  
  return resInfo;
}

export default useRestaurantMenu;