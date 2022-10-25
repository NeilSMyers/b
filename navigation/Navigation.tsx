import { NavigationContainer } from "@react-navigation/native"

import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

import Tabs from "./Tabs"

import Screen from "../components/Screen"
import Text from "../components/Text"

const OnTop = () => {
  return <Screen><Text>I'm on Top Now!</Text></Screen>
}

const AppNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
      <Stack.Screen name="Drawer" component={DrawerNav}/>
      <Stack.Screen name="OnTopYo" component={OnTop} />
    </Stack.Navigator>
  )
}

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="App" component={AppNav} options={{headerShown: false}} />
      <Drawer.Screen name="Top" component={OnTop}/>
    </Drawer.Navigator> 
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <DrawerNav/>
    </NavigationContainer>
  )
}

export default Navigation
