import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  //   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold ">{item.card.info.name}</span>
              <span className="font-bold">
                {" "}
                - ₹ {item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute justify-between ">
              <button className="p-2  bg-red-600 mx-14 mt-[74px] text-white  rounded-lg">Add+</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-40 h-[109px]"></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
