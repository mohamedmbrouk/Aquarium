import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Main from "./Components/Main";
import SignIn from "./Components/Users/SignIn";
import SignUp from "./Components/Users/SignUp";
import Home from "./Components/Home";
import Models from "./Components/Users/Models";
import Game from "./Components/Users/Game";
import Ocean from "./Components/Users/Ocean";
import Kelp from "./Components/Users/Kelp";
import News from "./Components/Users/News";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function TabFun() {
  return (
    <NetworkStatus>
      <Tab.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          ...TransitionPresets.ScaleFromCenterAndroid,
          tabBarStyle: styles.tabBarStyle,
          headerShown: false,
          tabBarActiveTintColor: "#FFA8C5",
          tabBarInactiveTintColor: "#FFFFFF",
          tabBarLabelPosition: "below-icon",
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "700",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => (
              <Image style={styles.TabIcon} source={HomeIcon} />
            ),
          }}
        />
        <Tab.Screen
          name="MoMS"
          component={MomsCommunityItem}
          options={{
            tabBarLabel: "Moms",
            tabBarIcon: () => (
              <Image style={styles.TabIcon} source={CommunityIcon} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: () => (
              <Image style={styles.TabIcon} source={ProfileIcon} />
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: () => (
              <Image style={styles.TabIcon} source={SettingIcon} />
            ),
          }}
        />
      </Tab.Navigator>
    </NetworkStatus>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Models"
          component={Models}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ocean"
          component={Ocean}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Kelp"
          component={Kelp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    width: "97%",
    height: 58,
    borderRadius: 30,
    marginBottom: 20,
    position: "absolute",
    marginLeft: 8,
    paddingTop: 8,
  },

  TabIcon: {
    width: 32,
    height: 32,
  },
  mapHeader: {
    backgroundColor: "red",
  },
});
