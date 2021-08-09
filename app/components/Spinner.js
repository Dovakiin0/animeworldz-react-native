import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Spinner = () => {
  return (
    <View>
      <Image source={require("../assets/genkai.gif")} />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({});
