import { View, Text } from 'react-native'
import React from 'react'
import {Button as KitButton} from "@ui-kitten/components"
import ButtonProps from './interfaces'
import Styles from "./button.styles"

const Button = ({label, ...props}:ButtonProps) => {
  return (
    <KitButton style={[Styles.button, props.style]} status='control' {...props}>
        {(evaProps)=><Text {...evaProps} style={Styles.text}>{label}</Text>}
    </KitButton>
  )
}

export default Button