import { createStackNavigator } from "@react-navigation/stack"

import Home from "../screens/Home"

import useTheme from "../hooks/useTheme"

const Stack = createStackNavigator()

const HomeStack = () => {
  const { colors } = useTheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: colors.backgroundThree },
        headerTitleStyle: { color: colors.textTwo },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default HomeStack
