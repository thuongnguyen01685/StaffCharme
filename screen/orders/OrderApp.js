//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import ListCancel from "./tabView/ListCancel";
import ListComplete from "./tabView/ListComplete";
import ListConFirm from "./tabView/ListConfirm";
import ListNew from "./tabView/ListNew";

// create a component
// create a component
const { width, height } = Dimensions.get("screen");

const renderScene = SceneMap({
  new: ListNew,
  confirm: ListConFirm,
  complete: ListComplete,
  cancel: ListCancel,
});

const OrderApp = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "new", title: "Mới" },
    { key: "confirm", title: "Xác nhận" },
    { key: "complete", title: "Hoàn thành" },
    { key: "cancel", title: "Hủy" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      swipeEnabled={true}
      animationEnabled={true}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          renderLabel={({ route, color, focused }) => {
            return (
              <Text
                style={{
                  color: focused ? "#E9A569" : "#ADADAD",
                  fontSize: 13,
                  fontFamily: "LexendDeca_600SemiBold",
                }}>
                {route.title}
              </Text>
            );
          }}
          indicatorStyle={styles.indicatorStyle}
          style={{ backgroundColor: "#F8FAF4" }}
        />
      )}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  indicatorStyle: {
    backgroundColor: "#E9A569",
    padding: 1,
    marginBottom: -2,
  },
});

//make this component available to the app
export default OrderApp;
