import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Icon } from "@/components"
import Home from "@/screens/Home"
import Profile from "@/screens/Profile"

import TabBar from "./components/TabBar"

const { Navigator, Screen } = createBottomTabNavigator()

export type AppRoutesParamList = {
  Home: undefined
}

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (props) => (
            <Icon
              name="home"
              variant={props.focused ? "primary" : "secondary"}
              size="xl"
            />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (props) => (
            <Icon
              name="account"
              variant={props.focused ? "primary" : "secondary"}
              size="xl"
            />
          ),
        }}
      />
    </Navigator>
  )
}
