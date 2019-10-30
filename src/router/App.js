import { createBottomTabNavigator } from "react-navigation-tabs";
import DashboardStack from "./DashboardStack";

export default createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardStack,
      navigationOptions: {
        tabBarLabel: "Dashboard"
      }
    }
  },
  {
    initialRouteName: "Dashboard"
  }
);
