import Touch from "./Touch"
import Text from "./Text"

import useTheme from "../hooks/useTheme"

interface Props {
  title: string
  onPress: () => void
  type?: "default" | "outlined" | "text"
}

const Button: React.FC<Props> = ({ title, onPress, type = "default" }) => {
  const { colors } = useTheme()

  const types = {
    //
    default: {
      background: {
        backgroundColor: colors.backgroundThree,
        borderColor: colors.backgroundThree,
      },
      text: {
        color: colors.textTwo,
        fontWeight: "bold",
        fontSize: 16,
      },
    },
    //
    outlined: {
      background: {
        backgroundColor: colors.background,
        borderColor: colors.backgroundThree,
      },
      text: {
        color: colors.backgroundThree,
        fontWeight: "normal",
      },
    },
    //
    text: {
      background: {
        backgroundColor: "transparent",
        borderColor: "transparent",
      },
      text: {
        color: colors.textThree,
        fontWeight: "normal",
      },
    },
  }

  return (
    <Touch
      onPress={onPress}
      style={[
        {
          height: 50,
          padding: 10,
          borderWidth: 2,
          borderRadius: 10,
          marginHorizontal: 15,
          marginVertical: 10,
          justifyContent: "center",
          alignItems: "center",
        },
        types[type].background,
      ]}
    >
      <Text style={types[type].text}>{title}</Text>
    </Touch>
  )
}

export default Button
