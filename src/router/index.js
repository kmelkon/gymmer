import { createAppContainer, createSwitchNavigator } from "react-navigation";
import App from "./App";
// import Auth from "./Auth";

export default createAppContainer(
  createSwitchNavigator(
    {
      App
    },
    {
      initialRouteName: "App"
    }
  )
);
