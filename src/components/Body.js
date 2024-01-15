import RestauranrCart, { WithPromatedLable } from "./RestauranrCart";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredReastaurant, setFilteredReastaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const RestaturantPromated = WithPromatedLable(RestauranrCart);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&ipage_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(";;;;;;;;",json)
    // console.log(";;;;;;;;",json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants )
    //optional chaining
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredReastaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const { setUserName } = useContext(UserContext);
  //conditional rendering
  //   console.log(listOfRestaurants.length === 0);
  //   if (listOfRestaurants.length === 0) {
  //     return <Shimmer />;
  //   }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks likeyou are offline!! Please check your internet connection</h1>
    );

  return filteredReastaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="Search m-2 p-4 text-center">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // const filteredReastaurant = listOfRestaurants.filter((res) =>
            //   res.info.name.toLowerCase().includes(searchText.toLowerCase())
            // );
            // setFilteredReastaurant(filteredReastaurant);
          }}
        ></input>
        <button
          className="px-4  py-2 m-4 bg-green-100 rounded-lg"
          onClick={() => {
            const filteredReastaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredReastaurant(filteredReastaurant);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn px-4  py-2 m-4 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredReastaurant(filteredList);
          }}
        >
          Top Rated Of Restaturant
        </button>
        <div className="px-4  p-2">
          <label>User Name:- </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
             dark:focus:border-blue-500" 
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="resto-container flex flex-wrap w-10/12 justify-center m-auto">
        {filteredReastaurant.map((resturant, index) => (
          <Link to={"/reastaurat/" + resturant.info.id}>
            {resturant.info.isOpen ? (
              <RestaturantPromated   resData={resturant} />
            ) : (
              <RestauranrCart  resData={resturant}  />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
