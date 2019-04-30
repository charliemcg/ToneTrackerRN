import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/reducer";
import NavContainer from "./components/NavContainer";
import { Platform, StatusBar, View, Text } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
// import OptionsMenu from "react-native-options-menu";
// import overflow from "./images/overflow.png";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";

const store = createStore(reducer);

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View
    style={{
      height: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
    }}
  >
    <StatusBar translucent backgroundColor="pink" {...props} />
  </View>
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyStatusBar />
        <MenuProvider>
          <NavContainer />
        </MenuProvider>
      </Provider>
    );
  }
}

export default App;
