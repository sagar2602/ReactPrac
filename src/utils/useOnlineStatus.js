import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const[ onlineStatus, setStatus ] = useState(true);
  //check if online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setStatus(false)
    })
    window.addEventListener("online", () => {
      setStatus(true)
    })
  }, [])
  return onlineStatus;
}

export default useOnlineStatus;

