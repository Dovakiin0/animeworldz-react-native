import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import Cards from "../components/Cards";
import axios from "axios";
import { PopularContext } from "../context/AnimeContext";

const HomeScreen = () => {
  const { colors } = useTheme();
  const [recent, setrecent] = useState([]);
  const { popular } = useContext(PopularContext);

  const getRecent = async () => {
    axios
      .get("https://animeworldz.herokuapp.com/api/v1/anime/recent/1")
      .then((res) => {
        setrecent(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRecent();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Recent Release</Text>
      <ScrollView style={styles.cardContainer} horizontal={true}>
        {recent.length !== 0 ? (
          recent.map((anime, i) => (
            <Cards
              key={i}
              title={anime.name}
              img={anime.img}
              extra={anime.recent_episode}
            />
          ))
        ) : (
          <ActivityIndicator size="large" />
        )}
      </ScrollView>

      <Text style={[styles.title, { color: colors.text }]}>Popular Anime</Text>
      <ScrollView style={styles.cardContainer} horizontal={true}>
        {popular.length !== 0 ? (
          popular.map((anime, i) => (
            <Cards
              key={i}
              title={anime.name}
              img={anime.img}
              extra={anime.release}
            />
          ))
        ) : (
          <ActivityIndicator size="large" />
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    // flexDirection: "row",
    // overflow: "scroll",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
});
