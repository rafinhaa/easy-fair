import { NavigatorScreenParams } from "@react-navigation/native"
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack"

import Users from "@/screens/Users"

import * as UserRoutes from "./user.routes"

type AppRoutesParamList = {
  Users: undefined
  User: UserRoutes.UserRoutesNavigatorScreenParams
}

const { Navigator, Screen } = createStackNavigator<AppRoutesParamList>()

type Props = StackScreenProps<AppRoutesParamList>

type AppRoutesScreenNavigationProp = Props["navigation"]

type AppRoutesScreenRouteProp = Props["route"]

type AppRoutesNavigatorScreenParams = NavigatorScreenParams<AppRoutesParamList>

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Users" component={Users} />

      <Screen name="User" component={UserRoutes.UserRoutes} />
    </Navigator>
  )
}

export type {
  AppRoutesParamList,
  AppRoutesScreenNavigationProp,
  AppRoutesScreenRouteProp,
  AppRoutesNavigatorScreenParams,
}
