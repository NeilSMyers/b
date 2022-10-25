import { createStackNavigator } from "@react-navigation/stack";

import Book from "../screens/Book";

import useTheme from "../hooks/useTheme";

const Stack = createStackNavigator();

const BookStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: colors.backgroundTwo },
        headerTitleStyle: { color: colors.textTwo, fontFamily: "reg" },
      }}
    >
      <Stack.Screen name="Book" component={Book} />
    </Stack.Navigator>
  );
};

export default BookStack;
