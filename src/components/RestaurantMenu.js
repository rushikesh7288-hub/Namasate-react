// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantmenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  // const { resId } = useParams();

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_URL + resId);
  //   const json = await data.json();
  //   // console.log(json.data);
  //   setResInfo(json.data);
  // };
  const resInfo = useRestaurantMenu()

  if (resInfo === null) return <Shimmer />;

  const { name, avgRatingString, cuisines, city, sla } =
    resInfo?.cards[0]?.card?.card?.info;
  console.log(resInfo);

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className="conatiner">
      <div className="details-hotel">
        <h1>Hotel Name:-{name}</h1>
        <h2>{avgRatingString} Rating</h2>
        <h3>{cuisines.join(",")}</h3>
        <h3>Location:-{city} </h3>
        <h3>{sla.minDeliveryTime}min</h3>
      </div>
      <div className="menu">
        <h1>Menu</h1>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -{item.card.info.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
