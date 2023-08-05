import React, {forwardRef} from "react";
import {
  Pressable,
  ScrollView,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from "react-native";

import {boxProps} from "./interfaces";

export const Box = forwardRef((props: boxProps, ref: any): JSX.Element => {
  const BoxView = props.scroll ? (
    <ScrollView
      {...props}
      ref={ref}
      contentContainerStyle={[
        props.contentContainerStyle && props.contentContainerStyle,
      ]}
      horizontal={props.horizontal}
      showsVerticalScrollIndicator={props.showsVerticalScrollIndicator ?? true}
      showsHorizontalScrollIndicator={
        props.showsHorizontalScrollIndicator ?? true
      }
    >
      {props.children}
    </ScrollView>
  ) : (
    <View {...props} ref={props.ref} style={props?.style && props?.style}>
      {props.children}
    </View>
  );

  return props.withoutFeedback ? (
    <Pressable
      {...props}
      ref={props.ref}
      style={props?.style && props?.style}
      onPress={props.onPress}
    >
      {props.children}
    </Pressable>
  ) : props.onPress ? (
    <TouchableOpacity
      {...props}
      ref={props.ref}
      style={props?.style && props?.style}
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  ) : (
    BoxView
  );
});
