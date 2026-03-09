import { useState, useEffect } from "react";

const useOnline = () => {

   const [isOnline, setIsOnline] = useState(true);

   const handleonline = () => setIsOnline(true);
   const handleoffline = () => setIsOnline(false);


   useEffect(() => {

    window.addEventListener("online", handleonline);
    window.addEventListener("offline", handleoffline);

    //cleanup function to remove event listeners when component unmounts
    return () => {
        window.removeEventListener('online', handleonline);
        window.removeEventListener('offline', handleoffline);
    }

   },[])

   return isOnline;

}

export default useOnline;