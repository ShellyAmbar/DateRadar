import {View, Text} from 'react-native';
import React from 'react';
import Styles from './text-h4.styles';

const TextH4 = ({...props}) => {
  return <Text {...props} style={[Styles.h4, props.style]} />;
};

export default TextH4;
