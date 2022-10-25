import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeStack from "./HomeStack";
import BookStack from "./BookStack";
import ProfileStack from "./ProfileStack";

import useTheme from "../hooks/useTheme";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: colors.secondary,
        },
        tabBarActiveTintColor: colors.background,
        tabBarInactiveTintColor: colors.main,
        tabBarLabelStyle: { fontSize: 14, fontFamily: "reg" },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        options={{
          tabBarLabel: "Travel",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "ios-airplane" : "ios-airplane-outline"}
              size={27}
              color={color}
              style={{ transform: [{ rotate: "-45deg" }], left: 2 }}
            />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="BookStack"
        options={{
          tabBarLabel: "Book",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "barcode" : "barcode-outline"}
              size={27}
              color={color}
            />
          ),
        }}
        component={BookStack}
      />
      <Tab.Screen
        name="ProfileStack"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/prof.jpg")}
              style={{
                height: 27,
                width: 27,
                borderRadius: 20,
                borderWidth: 2,
                borderColor: color,
              }}
            />
          ),
        }}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
