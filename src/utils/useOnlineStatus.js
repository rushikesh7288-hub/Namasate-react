import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineSattus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineSattus(true);
    });
    window.addEventListener("offline", () => {
      setOnlineSattus(false);
    });
  });

  return onlineStatus;
};

export default useOnlineStatus;
