import { Image, View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "@expo/vector-icons/Ionicons"

import HomeStack from "./HomeStack"
import BookStack from "./BookStack"
import ProfileStack from "./ProfileStack"

import useTheme from "../hooks/useTheme"

const Tab = createBottomTabNavigator()

const Tabs = () => {
  const { colors } = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { borderTopWidth: 0, margin: 5 },
        tabBarActiveTintColor: colors.main,
        tabBarLabelStyle: { fontSize: 14 },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" size={27} color={color} />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="BookStack"
        options={{
          tabBarLabel: "Book",
          tabBarLabelStyle: { color: "white", fontSize: 14 },
          tabBarIcon: ({ color }) => (
            <View
              style={{
                borderRadius: 100,
                backgroundColor: colors.main,
                padding: 20,
                position: "absolute",
                transform: [],
              }}
            >
              <Ionicons name="ios-airplane" size={30} color={"white"} />
            </View>
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
                height: 30,
                width: 30,
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
  )
}

export default Tabs
