
import { CDN_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const RestauranrCart = (props) => {
  //   console.log(props);

  const { resData } = props;
      // console.log(resData);
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    slaString,
    cloudinaryImageId,
  } = resData?.info;
  const {loggedInUser} = useContext(UserContext);
  return (
    <div className=" m-4 p-4 w-[250px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-300"
    data-testid="restCard">
      <img
        alt="res-logo"
        className="rounded-lg h-[150px] w-[250px]"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h5>{cuisines.join(" , ").slice(0, 15)}</h5>
      <h5>{costForTwo}</h5>
      <h5>{avgRating} Star</h5>
      <h5>{slaString} </h5>
      <h5>User Name :- {loggedInUser}</h5> 
    </div>
  );
};

export const WithPromatedLable = (RestauranrCart) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestauranrCart {...props} />
      </div>
    );
  };
};
export default RestauranrCart;
