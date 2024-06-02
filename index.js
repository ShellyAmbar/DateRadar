import {AppRegistry} from "react-native";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./app/store";

AppRegistry.registerComponent("App", () => <App />);
