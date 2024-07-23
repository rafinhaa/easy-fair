import { NavigatorScreenParams } from "@react-navigation/native"
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack"
import { useStyles } from "react-native-unistyles"

import { Icon } from "@/components"
import Fair from "@/screens/Fair"

import * as UserRoutes from "./user.routes"

type HomeRoutesParamList = {
  Fair: {
    userId: number
    fairId?: number
  }
  User: UserRoutes.UserRoutesNavigatorScreenParams
}

const { Navigator, Screen } = createStackNavigator<HomeRoutesParamList>()

type Props = StackScreenProps<HomeRoutesParamList>

type HomeRoutesScreenNavigationProp = Props["navigation"]

type HomeRoutesScreenRouteProp<RouteName extends keyof HomeRoutesParamList> =
  StackScreenProps<HomeRoutesParamList, RouteName>["route"]

type HomeRoutesNavigatorScreenParams =
  NavigatorScreenParams<HomeRoutesParamList>

export const HomeRoutes = () => {
  const { theme } = useStyles()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="User" component={UserRoutes.UserRoutes} />

      <Screen
        name="Fair"
        component={Fair}
        options={{
          headerShown: true,
          title: "",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.background,
            shadowOpacity: 0,
          },
          headerLeft: ({ onPress }) => (
            <Icon name="chevron-left" size={32} onPress={onPress} />
          ),
        }}
      />
    </Navigator>
  )
}

export type {
  HomeRoutesParamList,
  HomeRoutesScreenNavigationProp,
  HomeRoutesScreenRouteProp,
  HomeRoutesNavigatorScreenParams,
}
