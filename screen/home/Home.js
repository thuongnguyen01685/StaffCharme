//import liraries
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { Component, useState } from "react";
import { Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import SvgC from "../../assets/svg/SvgC";
import SvgNotification from "../../assets/svg/SvgNotification";
import { dataFakeHome } from "../../utils/dataFake";
import BackFail from "./BackFail";

// create a component
const { width, height } = Dimensions.get("screen");
const Home = () => {
  const navigation = useNavigation();
  const [backFail, setBackFail] = useState(true);

  useFocusEffect(() => {
    setBackFail(true);
    return () => setBackFail(false);
  });
  return (
    <View style={styles.container}>
      {backFail && <BackFail />}
      <View style={styles.header}>
        <Image
          source={require("../../assets/logo-good-charme.png")}
          style={styles.img}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.bell}>
          <SvgNotification />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View>
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
            Thuong Nguyen
          </Text>
        </View>
        <View>
          <ScrollView>
            <View style={styles.partManager}>
              {dataFakeHome.map((item, index) => (
                <TouchableOpacity
                  style={styles.itemCard}
                  key={index}
                  onPress={() => navigation.navigate(`${item.link}`)}>
                  <Image source={item.image} style={styles.imgIcon} />
                  <Text style={styles.textTitle}>{item.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.footter}>
        <Text style={styles.textLogo}>Good Charme</Text>
        <SvgC />
        <Text style={styles.domain}>goodcharme.vn</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  header: {},
  bell: {
    position: "absolute",
    zIndex: 1,
    right: 20,
  },
  img: {
    width: 190,
    height: 150,
    alignSelf: "center",
  },
  body: {
    paddingHorizontal: 20,
  },
  partManager: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    height: width * 0.25,
    width: width * 0.25,
    flexDirection: "column",
    justifyContent: "center",
  },
  textTitle: {
    fontFamily: "LexendDeca_300Light",
    fontSize: 12,
    textAlign: "center",
    top: 5,
  },
  imgIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    alignSelf: "center",
  },
  footter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9A569",
    height: 45,
  },
  textLogo: {
    fontFamily: "LexendDeca_400Regular",
    fontSize: 14,
    color: "#fff",
    right: 2,
  },
  domain: {
    fontFamily: "LexendDeca_300Light",
    fontSize: 12,
    color: "#fff",
    left: 2,
  },
});

//make this component available to the app
export default Home;
