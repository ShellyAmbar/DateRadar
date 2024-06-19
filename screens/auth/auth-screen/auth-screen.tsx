import {Box} from "@traveloffline/components/controllers/box/box";
import React from "react";
import {Video, ResizeMode} from "expo-av";
import Styles from "./auth-screen.styles";
import TextFactory from "@traveloffline/components/factories/text-factory/text-factory";
import Button from "@traveloffline/components/controllers/button/button";
import useAuthScreen from "./hooks/useAuthScreen";
import Spacer from "@traveloffline/components/controllers/spacer/spacer";
import {TouchableOpacity} from "react-native";

export default function AuthScreen(props) {
  const {videoRef} = useAuthScreen({navigation: props.navigation});

  return (
    <Box style={Styles.container}>
      <Video
        ref={videoRef}
        style={Styles.video}
        source={require("@traveloffline/assets/videos/video.mp4")}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isLooping
      />
      <TextFactory style={Styles.title}>{"Welcome to Hive."}</TextFactory>
      <Box style={Styles.absoluteButtons}>
        <Button
          buttonStyle={Styles.buttonStyle}
          lableStyle={Styles.text}
          label="Login"
          disabled={false}
          onPress={() => {
            props.navigation.navigate("Phone", {isLoggin: true});
          }}
        />
        <Spacer size={20} />
        <Box style={Styles.centerHorizontal}>
          <TextFactory style={Styles.text}>
            {"Don't have an account?"}
          </TextFactory>
          <Spacer size={12} isVertical={false} />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Phone", {isLoggin: false});
            }}
          >
            <TextFactory style={Styles.bottomBorderTextBtn}>
              {"Sign Up now!"}
            </TextFactory>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
}
