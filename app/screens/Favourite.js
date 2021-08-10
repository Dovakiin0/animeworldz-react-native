import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useTheme } from "@react-navigation/native";

const Favourite = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[{ color: colors.text }, styles.title]}>Favourite</Text>
      <Text style={[{ color: colors.text }, styles.title]}>COMING SOON!</Text>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
