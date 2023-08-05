import {View, Text} from 'react-native';
import React from 'react';
import Styles from './text-h6.styles';

const TextH6 = ({...props}) => {
  return <Text {...props} style={[Styles.h6, props.style]} />;
};

export default TextH6;
