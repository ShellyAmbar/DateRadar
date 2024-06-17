import React, {useEffect, useRef} from "react";
import {Box} from "../../components/controllers/box/box";
import LottieView from "lottie-react-native";
import Styles from "./splash-screen.styles";
import {useFonts} from "expo-font";
import {useDispatch, useSelector} from "react-redux";
import {getUserFetch} from "@traveloffline/features/user/userSlice";

const SplashScreen = (props: any) => {
  const animation = useRef(null);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserFetch());
  }, [dispatch]);

  console.log("user ", user);

  const [isFontsLoaded] = useFonts({
    "Segoe UI": require("@traveloffline/assets/fonts/Segoe-UI.ttf"),
    Inter: require("@traveloffline/assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("@traveloffline/assets/fonts/Inter-SemiBold.ttf"),
  });

  useEffect(() => {
    if (user && isFontsLoaded) {
      const timeout = setTimeout(() => {
        props.navigation.navigate("Main");
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [isFontsLoaded, user]);

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
