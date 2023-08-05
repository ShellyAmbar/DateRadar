import {View, Text} from 'react-native';
import React from 'react';
import Styles from './text-h1.styles';

const TextH1 = ({...props}) => {
  return <Text {...props} style={[Styles.h1, props.style]} />;
};

export default TextH1;
