import { createStackNavigator } from "react-navigation-stack";
import Dashboard from "../screens/IndexScreen";

export default createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: () => ({
        title: "Dashboard"
      })
    }
  },
  {
    initialRouteName: "Dashboard"
  }
);
