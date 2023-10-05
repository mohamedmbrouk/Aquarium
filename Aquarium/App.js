import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import SignIn from "./Components/Users/SignIn";
import SignUp from "./Components/Users/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

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
    <NetworkStatus>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="First"
          screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            ...TransitionPresets.ScaleFromCenterAndroid,
          }}
        >
        </Stack.Navigator>
      </NavigationContainer>
    </NetworkStatus>
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
