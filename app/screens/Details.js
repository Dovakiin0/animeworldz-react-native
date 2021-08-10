import { useTheme } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import EpisodeList from "../components/EpisodeList";
import Spinner from "../components/Spinner";

const Details = ({ route, navigation }) => {
  const { colors } = useTheme();
  const [animeDetails, setAnimeDetails] = useState({});
  const { uri, link } = route.params;

  const getAnimeDetails = () => {
    axios
      .post("https://animeworldz.herokuapp.com/api/v1/anime", {
        uri: uri ? uri : link,
      })
      .then((res) => {
        setAnimeDetails(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnimeDetails();
  }, []);

  return Object.entries(animeDetails).length !== 0 ? (
    <View style={styles.container}>
      <View style={styles.coverContainer}>
        <Image style={styles.cover} source={{ uri: animeDetails.img }} />
      </View>
      <Text style={[{ color: colors.text }, styles.title]}>
        {animeDetails.title}
      </Text>
      <Text style={[{ color: colors.text }, styles.othername]}>
        {animeDetails.other_name}
      </Text>
      <ScrollView>
        <View style={styles.summary}>
          <Text style={[{ color: colors.text }]}>
            {animeDetails.plot_summary}
          </Text>
        </View>
        <Text style={[{ color: colors.text }]}>
          Released: {animeDetails.released}
        </Text>
        <Text style={[{ color: colors.text }]}>
          Status: {animeDetails.status}
        </Text>
        <Text style={[{ color: colors.text }]}>Type: {animeDetails.type}</Text>
        <Text style={[{ color: colors.text }]}>
          Episode Count: {animeDetails.episode_count}
        </Text>

        <View style={styles.episodeContainer}>
          <Text
            style={[{ color: colors.text }, styles.title, styles.episodeTitle]}
          >
            Episodes
          </Text>
          <View style={styles.episodeList}>
            {[...Array(parseInt(animeDetails.episode_count))].map((e, i) => (
              <EpisodeList
                key={i}
                title={animeDetails.title}
                slug={animeDetails.slug}
                ep={i + 1}
                count={animeDetails.episode_count}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  ) : (
    <View style={styles.spinner}>
      <Spinner />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 5,
  },
  spinner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  coverContainer: {
    marginBottom: 10,
  },
  cover: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  othername: {
    fontSize: 15,
  },
  summary: {
    marginTop: 10,
    marginBottom: 10,
  },
  episodeContainer: {
    marginTop: 15,
  },
  episodeTitle: {
    marginBottom: 15,
  },
});
