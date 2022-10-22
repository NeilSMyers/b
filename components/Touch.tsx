import { Pressable } from "react-native"

import type { PressableProps, StyleProp, ViewStyle } from "react-native"

interface Props {
  children: any
  onPress: () => void
  props?: PressableProps
  style?: StyleProp<ViewStyle>
}

const Touch: React.FC<Props> = ({ children, onPress, style, ...props }) => {
  return (
    <Pressable
      onPress={onPress}
      {...props}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        style,
      ]}
    >
      {children}
    </Pressable>
  )
}

export default Touch
