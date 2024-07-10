import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs"
import { NavigatorScreenParams } from "@react-navigation/native"

import { Icon } from "@/components"
import Home from "@/screens/Home"
import Profile from "@/screens/Profile"

import TabBar from "./components/TabBar"

type UserRoutesParamList = {
  Home: {
    userId: number
  }
  Profile: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<UserRoutesParamList>()

type Props = BottomTabScreenProps<UserRoutesParamList>

type UserRoutesScreenNavigationProp = Props["navigation"]

type UserRoutesScreenRouteProp<RouteName extends keyof UserRoutesParamList> =
  BottomTabScreenProps<UserRoutesParamList, RouteName>["route"]

type UserRoutesNavigatorScreenParams =
  NavigatorScreenParams<UserRoutesParamList>

export const UserRoutes = () => {
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

export type {
  UserRoutesParamList,
  UserRoutesScreenNavigationProp,
  UserRoutesScreenRouteProp,
  UserRoutesNavigatorScreenParams,
}
