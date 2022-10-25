import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../screens/Profile";

import useTheme from "../hooks/useTheme";

const Stack = createStackNavigator();

const ProfileStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: colors.backgroundTwo },
        headerTitleStyle: { color: colors.textTwo, fontFamily: "reg" },
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
