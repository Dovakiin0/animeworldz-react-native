import React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

const List = ({ boolean, func, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "orange" }}
        thumbColor={boolean ? "#fff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={func}
        value={boolean}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#4d4d4d",
    padding: 10,
    margin: 15,
    borderRadius: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    position: "absolute",
    top: 25,
    left: 20,
    color: "#FFF",
  },
});
