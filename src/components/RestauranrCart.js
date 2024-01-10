import { CDN_URL, STYLE_CARD } from "../utils/constants";

const RestauranrCart = (props) => {
//   console.log(props);
  const { resData } = props;
  const { name,cuisines, costForTwo, avgRating, slaString , cloudinaryImageId} = resData?.info;
  return (
    <div className="rest-card" style={STYLE_CARD}>
      <img alt="res-logo" className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(" , ")}</h5>
      <h5>{costForTwo}</h5>
      <h5>{avgRating}</h5>
      <h5>{slaString}</h5>
    </div>
  );
};
export default RestauranrCart;
