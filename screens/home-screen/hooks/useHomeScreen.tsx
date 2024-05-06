import React, {useState} from "react";

const useHomeScreen = () => {
  const [isShowPlaces, setIsShowPlaces] = useState(true);

  return {
    isShowPlaces,
    setIsShowPlaces,
  };
};

export default useHomeScreen;
