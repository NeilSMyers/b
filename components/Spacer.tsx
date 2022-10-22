import { View } from "react-native"

import useTheme from "../hooks/useTheme"

type Props = {
  size?: string
}

const Spacer: React.FC<Props> = ({ size = "s" }) => {
  const { spaces } = useTheme()

  return <View style={{ height: spaces[size], width: spaces[size] }} />
}

export default Spacer
