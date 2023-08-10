import {Animated} from "react-native";
import React from "react";
import {Box} from "@traveloffline/components/controllers/box/box";
import Close from "@mygenes/assets/images/close-small.svg";
import PopupProps from "./interfaces";
import Styles from "./popup.styles";
import usePopup from "./hooks/usePopup";
import TextFactory from "@traveloffline/components/factories/text-factory";
import {Modal} from "@ui-kitten/components";

const Popup = ({
  isVisible,
  onClickClose,
  title,
  titleStyle,
  durationEnter = 500,
  durationExit = 500,
  children,
}: PopupProps) => {
  const {animatSlideDown, animatSlideUp, slideAnim} = usePopup({
    onClickClose,
    durationEnter,
    durationExit,
  });

  return (
    <Modal
      visible={isVisible}
      backdropStyle={Styles.backdrop}
      onBackdropPress={animatSlideDown}
      shouldUseContainer={false}
    >
      <Animated.View
        onLayout={(event) => {
          animatSlideUp(event.nativeEvent.layout.height);
        }}
        style={[
          Styles.halfCircularRectView,
          {
            transform: [
              {
                translateY: slideAnim,
              },
            ],
          },
        ]}
      >
        <Box style={Styles.container}>
          <Box style={Styles.top}>
            <Box style={Styles.end} />

            {title ? (
              <TextFactory style={[titleStyle, Styles.title]}>
                {title}
              </TextFactory>
            ) : (
              <Box style={Styles.title} />
            )}
            {onClickClose ? (
              <Box
                onPress={() => {
                  animatSlideDown();
                }}
                style={Styles.closeButton}
              >
                <Close />
              </Box>
            ) : (
              <Box style={Styles.closeButton} />
            )}
          </Box>

          <Box style={Styles.content}>{children}</Box>
        </Box>
      </Animated.View>
    </Modal>
  );
};

export default Popup;
