import { createAppContainer, createStackNavigator } from "react-navigation";
import React, { Component } from "react";
import { Text } from "react-native";
import Home from "./Home";
import Add from "./Add";
import Edit from "./Edit";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";

const Navigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: "Home",
      headerRight: (
        <Menu>
          <MenuTrigger text="Select action" />
          <MenuOptions>
            <MenuOption onSelect={() => alert(`Save`)} text="Save" />
            <MenuOption onSelect={() => alert(`Delete`)}>
              <Text style={{ color: "red" }}>Delete</Text>
            </MenuOption>
            <MenuOption
              onSelect={() => alert(`Not called`)}
              disabled={true}
              text="Disabled"
            />
          </MenuOptions>
        </Menu>
      )
    }
  },
  Add: {
    screen: Add
    // navigationOptions: {
    //   drawerLabel: "Add"
    // }
  },
  Edit: {
    screen: Edit
    // navigationOptions: {
    //   drawerLabel: "Edit"
    // }
  }
});

export default (NavContainer = createAppContainer(Navigator));
