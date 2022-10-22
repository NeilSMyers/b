import { Text as T } from "react-native"

import type { TextProps } from "react-native"

import useTheme from "../hooks/useTheme"

type Props = {
  size?: string
  color?: string
  bold?: boolean
  style?: any
  children: any
  props?: TextProps
}

const Text: React.FC<Props> = ({
  size = "s",
  color = "",
  bold = false,
  style = {},
  ...props
}) => {
  const { colors, fonts } = useTheme()

  return (
    <T
      {...props}
      style={[
        {
          color: color || colors.text,
          fontSize: fonts[size],
          fontWeight: bold ? "bold" : "normal",
        },
        style,
      ]}
    >
      {props.children}
    </T>
  )
}

export default Text
