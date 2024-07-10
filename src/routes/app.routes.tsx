import { NavigatorScreenParams } from "@react-navigation/native"
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack"
import { useMMKVNumber } from "react-native-mmkv"

import Users from "@/screens/Users"
import { storageKeys } from "@/storage/storage-keys"

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
  const [userId] = useMMKVNumber(storageKeys.USER_ID)

  const initialRouteName: keyof AppRoutesParamList = userId ? "User" : "Users"

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialRouteName}
    >
      <Screen name="Users" component={Users} />

      {userId && (
        <Screen
          name="User"
          component={UserRoutes.UserRoutes}
          initialParams={{ screen: "Home", params: { userId } }}
        />
      )}
    </Navigator>
  )
}

export type {
  AppRoutesParamList,
  AppRoutesScreenNavigationProp,
  AppRoutesScreenRouteProp,
  AppRoutesNavigatorScreenParams,
}
