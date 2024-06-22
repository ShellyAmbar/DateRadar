import React, {useEffect, useRef} from "react";

const useAuthScreen = ({navigation}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef?.current?.playAsync();
  }, []);

  return {videoRef};
};

export default useAuthScreen;
