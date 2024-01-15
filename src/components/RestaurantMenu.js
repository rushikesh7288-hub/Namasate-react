// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantmenu";
import RestaturantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex , setShowIndex] = useState(0)
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
  const resInfo = useRestaurantMenu();

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
  console.log(resInfo);

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  // console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>
      {categories.map((category,index) => (
        <RestaturantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItem = {index === showIndex ? true : false}
          setShowIndex={ () => setShowIndex(index)}

        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
