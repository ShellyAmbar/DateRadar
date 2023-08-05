import {View, Text} from 'react-native';
import React from 'react';
import Styles from './text-h5.styles';

const TextH5 = ({...props}) => {
  return <Text {...props} style={[Styles.h5, props.style]} />;
};

export default TextH5;
