import React, {useEffect, useRef} from "react";
import {Box} from "../../components/controllers/box/box";
import LottieView from "lottie-react-native";
import Styles from "./splash-screen.styles";
import {useFonts} from "expo-font";
const SplashScreen = (props: any) => {
  const animation = useRef(null);

  const [isFontsLoaded] = useFonts({
    "Segoe UI": require("@traveloffline/assets/fonts/Segoe-UI.ttf"),
    Inter: require("@traveloffline/assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("@traveloffline/assets/fonts/Inter-SemiBold.ttf"),
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      props.navigation.navigate("Main");
    }, 1500);
    return () => clearTimeout(timeout);
  }, [isFontsLoaded]);

  useEffect(() => {}, []);

  return (
    <Box style={Styles.container}>
      <LottieView
        autoPlay
        ref={animation}
        style={Styles.lottie}
        source={require("@traveloffline/assets/lotties/naon.json")}
        loop
      />
    </Box>
  );
};

export default SplashScreen;
