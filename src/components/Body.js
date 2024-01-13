import RestauranrCart from "./RestauranrCart";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredReastaurant, setFilteredReastaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

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
      <div className="Search">
        <input
          className="search-input"
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
          className="serch-btn"
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
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredReastaurant(filteredList);
          }}
        >
          Top Rated Of Restaturant
        </button>
      </div>
      <div className="resto-container">
        {filteredReastaurant.map((resturant, index) => (
          <Link to={"/reastaurat/" + resturant.info.id}>
            <RestauranrCart resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
