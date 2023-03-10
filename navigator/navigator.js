//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Login from "../screen/startScreen/Login";
import Home from "../screen/home/Home";
import OrderApp from "../screen/orders/OrderApp";
import OrderDetail from "../screen/orders/orderDetail/OrderDetail";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const StartScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="loading"
        component={LoadingScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false, gestureEnabled: false }}
      />

      <Stack.Screen
        name="OrderApp"
        component={OrderApp}
        options={{
          headerShown: true,
          headerTitle: (props) => {
            return (
              <Text
                style={{
                  fontFamily: "LexendDeca_600SemiBold",
                  fontSize: 18,
                }}>
                Đơn hàng App
              </Text>
            );
          },
          headerTitleAlign: "center",
          headerShadowVisible: true,
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: {
              width: 1,
              height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.0,
            elevation: 1.5,
          },
        }}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Navigator;
