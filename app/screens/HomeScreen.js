import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
import Cards from "../components/Cards";
import axios from "axios";
import { PopularContext, WifiContext } from "../context/AnimeContext";
import Spinner from "../components/Spinner";

const HomeScreen = () => {
  const { colors } = useTheme();
  const [recent, setrecent] = useState([]);
  const { wifiMode } = useContext(WifiContext);
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
    if (wifiMode) getRecent();
  }, []);

  return (
    <View style={styles.container}>
      {recent.length !== 0 && popular.length !== 0 ? (
        <ScrollView>
          <Text style={[styles.title, { color: colors.text }]}>
            Recent Release
          </Text>
          <ScrollView style={styles.cardContainer} horizontal={true}>
            {recent.map((anime, i) => (
              <Cards
                key={i}
                title={anime.name}
                img={anime.img}
                extra={anime.recent_episode}
                href={anime.href}
              />
            ))}
          </ScrollView>
          <Text style={[styles.title, { color: colors.text }]}>
            Popular Anime
          </Text>
          <ScrollView style={styles.cardContainer} horizontal={true}>
            {popular.map((anime, i) => (
              <Cards
                key={i}
                title={anime.name}
                img={anime.img}
                extra={anime.release}
                href={anime.link}
              />
            ))}
          </ScrollView>
        </ScrollView>
      ) : (
        <View style={styles.spinner}>
          <Spinner />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {},
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
