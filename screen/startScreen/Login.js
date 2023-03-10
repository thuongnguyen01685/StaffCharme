import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import SvgProfile from "../../assets/svg/SvgProfile";
import SvgPassword from "../../assets/svg/SvgPassword";

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [phone, setPhone] = useState();
  const [pass, setPass] = useState();
  const [showLoading, setShowLoading] = useState(false);
  const [statusPhone, setStatusPhone] = useState(true);
  const [statusPass, setStatusPass] = useState(true);
  const [token, setToken] = useState();
  const [showPass, setShowPass] = useState(false);

  const [y, sety] = useState(0);

  const handleLogin = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <KeyboardAwareScrollView
      extraScrollHeight={Platform.OS === "ios" ? 120 : 120}
      extraHeight={120}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      resetScrollToCoords={{ x: 0, y: y }}
      onScroll={(e) => {
        sety(e.nativeEvent.contentOffset.y);
      }}
      scrollEnabled={true}
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Image
            source={require("../../assets/logo-good-charme.png")}
            style={styles.img}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.form}>
          <View style={{ marginVertical: 20 }}>
            <Text
              style={{
                fontSize: 26,
                marginBottom: 10,
                fontFamily: "LexendDeca_300Light",
              }}>
              Chào mừng bạn,
            </Text>
            <Text
              style={{
                fontSize: 26,
                color: "#DF9E68",
                marginBottom: 35,
                fontFamily: "LexendDeca_300Light",
              }}>
              Đăng nhập
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <View style={styles.textInput}>
              <SvgProfile />
              <Text
                style={{
                  color: "#AFAFAF",
                  fontFamily: "LexendDeca_500Medium",
                }}></Text>
              <TextInput
                placeholder="Tên tài khoản"
                placeholderTextColor="#AFAFAF"
                onChangeText={(numberPhone) => {
                  setPhone(numberPhone);
                }}
                style={styles.input}
              />
            </View>
            {statusPhone === true ? null : (
              <Text style={styles.textError}>Tên tài khoản</Text>
            )}
            <View style={[styles.textInput]}>
              <SvgPassword />
              <TextInput
                placeholder="Nhập mật khẩu"
                placeholderTextColor="#AFAFAF"
                style={styles.input}
                onChangeText={(pass) => {
                  setPass(pass);
                }}
                secureTextEntry={!showPass}
              />
              {showPass ? (
                <TouchableOpacity onPress={() => setShowPass(false)}>
                  <Feather name="eye" size={20} color="#E9A569" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setShowPass(true)}>
                  <Feather name="eye-off" size={20} color="#E9A569" />
                </TouchableOpacity>
              )}
            </View>
            {statusPass === true ? null : (
              <Text style={styles.textError}>Hãy nhập mật khẩu của bạn.</Text>
            )}

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "100%",
                marginTop: 6,
                marginBottom: 31,
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  color: "#DF9E68",
                  fontSize: 14,
                  fontFamily: "LexendDeca_500Medium",
                }}>
                Quên mật khẩu?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 22,
                  fontFamily: "LexendDeca_500Medium",
                }}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  form: {
    width: "95%",
    //justifyContent: "center",
    //alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  textInput: {
    backgroundColor: "#F4F4F4",
    borderRadius: 30,
    height: 60,
    marginBottom: 15,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  button: {
    width: "100%",
    marginBottom: 29,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#E9A569",
    height: 56,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.0,
    elevation: 2,
  },
  img: {
    width: 190,
    height: 150,
    marginTop: 40,
  },
  textError: {
    color: "red",
    marginBottom: 15,
    fontFamily: "LexendDeca_500Medium",
  },
  input: {
    marginLeft: 15,
    width: "80%",
    fontFamily: "LexendDeca_500Medium",
  },
});
