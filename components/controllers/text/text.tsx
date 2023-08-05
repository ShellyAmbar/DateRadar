import {Text as RNText} from 'react-native';
import React from 'react';
import Styles from './text.styles';
import TextProps from './interfaces';

const Text = ({...props}: TextProps) => {
  return <RNText allowFontScaling={false} style={Styles.text} {...props} />;
};

export default Text;
