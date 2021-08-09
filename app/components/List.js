import React, { useContext } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { useTheme } from "@react-navigation/native";
import { DarkContext } from "../context/AnimeContext";

const List = () => {
  const { colors } = useTheme();
  const { darkMode, setDarkMode } = useContext(DarkContext);
  const toggleSwitch = () => setDarkMode((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={[{ color: colors.text }, styles.title]}>Dark Mode</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#fc033d" }}
        thumbColor={darkMode ? "#fff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={darkMode}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#4d4d4d",
    opacity: 0.5,
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
  },
});
