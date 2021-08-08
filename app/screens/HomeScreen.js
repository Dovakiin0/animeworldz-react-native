import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Cards from "../components/Cards";

const HomeScreen = () => {
  const { colors } = useTheme();
  const [recent, setrecent] = useState([]);

  const getRecent = async () => {};

  useEffect(() => {
    getRecent();
  }, []);

  return (
    <View>
      <Text style={[styles.title, { color: colors.text }]}>Recent Release</Text>
      <View style={styles.cardContainer}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </View>

      <Text style={[styles.title, { color: colors.text }]}>Popular Anime</Text>
      <View style={styles.cardContainer}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    overflow: "scroll",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
});
