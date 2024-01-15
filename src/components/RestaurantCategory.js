import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItem , setShowIndex}) => {
  //   console.log(data);
//   const [showItem, setShowItem] = useState(false);

  handleClick = () => {
    setShowIndex()
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-50 my-4 shadow-lg mx-auto p-4 ">
        <div
          className="justify-between flex cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-bold">
            {data.title || data.name || data.type} -({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList key={data.title} items={data.itemCards} />}
      </div>
      <div className=""></div>
    </div>
  );
};

export default RestaurantCategory;
