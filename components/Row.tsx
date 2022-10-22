import { View } from "react-native"

type Props = {
  space?: "between" | "around" | "evenly"
  children: any
  style?: any
}

const Row: React.FC<Props> = ({ space, children, style }) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: `space-${space}` || undefined,
          alignItems: "center",
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

export default Row
