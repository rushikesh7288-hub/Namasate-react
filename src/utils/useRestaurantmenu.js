import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";
import { useParams } from "react-router-dom";
//Custom Hooks
const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};
export default useRestaurantMenu;
