import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";

import useTheme from "../hooks/useTheme";

const Stack = createStackNavigator();

const HomeStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: colors.backgroundTwo },
        headerTitleStyle: { color: colors.textTwo, fontFamily: "reg" },
      }}
    >
      <Stack.Screen name="Travel" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
