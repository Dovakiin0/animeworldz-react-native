import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import List from "../components/List";

const Setting = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
      <View style={styles.subcontainer}>
        <List />
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  subcontainer: {
    width: "100%",
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    position: "absolute",
    alignSelf: "center",
    textTransform: "uppercase",
    top: 10,
  },
});
