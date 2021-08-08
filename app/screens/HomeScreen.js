import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Cards from "../components/Cards";
import axios from "axios";

const HomeScreen = () => {
  const { colors } = useTheme();
  const [recent, setrecent] = useState([]);

  const getRecent = async () => {
    axios
      .get("http://localhost:3030/api/v1/anime/recent/1")
      .then((res) => {
        setrecent(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRecent();
  }, []);

  return (
    <View>
      <Text style={[styles.title, { color: colors.text }]}>Recent Release</Text>
      <View style={styles.cardContainer}>
        {recent.length !== 0
          ? recent.map((anime, i) => (
              <Cards
                title={anime.name}
                img={anime.img}
                extra={anime.recent_episode}
              />
            ))
          : ""}
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
