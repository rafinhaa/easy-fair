import { NavigatorScreenParams } from "@react-navigation/native"
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack"
import { useMMKVNumber } from "react-native-mmkv"

import Users from "@/screens/Users"
import { storageKeys } from "@/storage/storage-keys"

import * as HomeRoutes from "./home.routes"

type AppRoutesParamList = {
  Users: undefined
  Signed: HomeRoutes.HomeRoutesNavigatorScreenParams
}

const { Navigator, Screen } = createStackNavigator<AppRoutesParamList>()

type Props = StackScreenProps<AppRoutesParamList>

type AppRoutesScreenNavigationProp = Props["navigation"]

type AppRoutesScreenRouteProp<RouteName extends keyof AppRoutesParamList> =
  StackScreenProps<AppRoutesParamList, RouteName>["route"]

type AppRoutesNavigatorScreenParams = NavigatorScreenParams<AppRoutesParamList>

export const AppRoutes = () => {
  const [userId] = useMMKVNumber(storageKeys.USER_ID)

  const initialRouteName: keyof AppRoutesParamList = userId ? "Signed" : "Users"

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialRouteName}
    >
      <Screen name="Users" component={Users} />

      <Screen
        name="Signed"
        component={HomeRoutes.HomeRoutes}
        initialParams={{
          screen: "User",
          params: {
            screen: "Home",
            params: {
              userId,
            },
          },
        }}
      />
    </Navigator>
  )
}

export type {
  AppRoutesParamList,
  AppRoutesScreenNavigationProp,
  AppRoutesScreenRouteProp,
  AppRoutesNavigatorScreenParams,
}
