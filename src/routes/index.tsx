import { NavigationContainer } from "@react-navigation/native"

import { AppRoutes } from "./app.routes"

export {
  UserRoutesNavigatorScreenParams,
  UserRoutesParamList,
  UserRoutesScreenNavigationProp,
  UserRoutesScreenRouteProp,
} from "./user.routes"

export {
  AppRoutesParamList,
  AppRoutesScreenNavigationProp,
  AppRoutesScreenRouteProp,
  AppRoutesNavigatorScreenParams,
} from "./app.routes"

export {
  HomeRoutesParamList,
  HomeRoutesScreenNavigationProp,
  HomeRoutesScreenRouteProp,
  HomeRoutesNavigatorScreenParams,
} from "./home.routes"

export const Routes = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}
