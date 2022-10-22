import { View } from "react-native"

import useTheme from "../hooks/useTheme"

type Props = {
  background?: string
  children: any
}

const Screen: React.FC<Props> = ({ background, children }) => {
  const { colors } = useTheme()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: background || colors.background,
      }}
    >
      {children}
    </View>
  )
}

export default Screen
