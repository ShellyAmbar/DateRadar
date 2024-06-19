import React, {useEffect, useRef} from "react";

const useAuthScreen = ({navigation}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      videoRef.current?.playAsync();
    });

    return unsubscribe;
  }, [navigation]);

  return {videoRef};
};

export default useAuthScreen;
