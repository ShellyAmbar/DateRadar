import {Text} from 'react-native';
import React from 'react';
import Styles from './text-body-text1.styles';

const TextBodyText1 = ({...props}) => {
  return <Text style={[Styles.BodyText1, props.style]} {...props} />;
};

export default TextBodyText1;
