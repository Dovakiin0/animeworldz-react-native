import React, { useEffect, useState, useRef } from "react";
import { useKeepAwake } from "expo-keep-awake";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import axios from "axios";
import { useTheme } from "@react-navigation/native";
import Spinner from "../components/Spinner";
import { WebView } from "react-native-webview";
import { Icon } from "react-native-elements";
import { WifiContext } from "../context/AnimeContext";

const Episode = ({ route, navigation }) => {
  useKeepAwake();
  const { colors } = useTheme();
  const { slug, episode, count } = route.params;
  const [ep, setEp] = useState(episode);
  const [animeEpisode, setAnimeEpisode] = useState({});
  const { wifiMode } = useContext(WifiContext);

  const getEpisode = () => {
    axios
      .post("https://animeworldz.herokuapp.com/api/v1/anime/episode", {
        slug,
        ep,
      })
      .then((res) => {
        setAnimeEpisode(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (wifiMode) getEpisode();
  }, [ep]);

  const handleNext = () => {
    setEp((prev) => Math.min(count, prev + 1));
  };

  const handlePrev = () => {
    setEp((prev) => Math.max(0, prev - 1));
  };

  return Object.entries(animeEpisode).length !== 0 ? (
    <View style={styles.container}>
      <View style={styles.vidWrapper}>
        <WebView
          javaScriptEnabled
          allowsFullscreenVideo={true}
          source={{
            html: `
            <iframe
            width="100%"
            height="100%"
            src=${animeEpisode.links[0].link}"
            frameborder="0" allow="autoplay; encrypted-media; fullscreen"
            sandbox="allow-same-origin allow-scripts allow-top-navigation"
            ></iframe>
          `,
          }}
          scalesPageToFit={true}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={[{ color: colors.text }, styles.title]}>
          {animeEpisode.name} |
        </Text>
        <Text style={[{ color: colors.text }, styles.subTitle]}>
          Episode: {animeEpisode.episode}
        </Text>
      </View>
      <View style={styles.nextprev}>
        <TouchableOpacity
          onPress={handleNext}
          disabled={ep == count ? true : false}
        >
          <View style={styles.next}>
            <Icon type="antdesign" name="arrowright" color="white" size={35} />
            <Text style={styles.text}>
              Next: Episode {parseInt(animeEpisode.episode) + 1}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePrev}
          disabled={parseInt(ep) === 1 ? true : false}
        >
          <View style={styles.prev}>
            <Icon type="antdesign" name="arrowleft" color="white" size={35} />
            <Text style={styles.text}>
              Previous: Episode {parseInt(animeEpisode.episode) - 1}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={styles.spinner}>
      <Spinner />
    </View>
  );
};

export default Episode;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "orange",
    marginRight: 15,
  },
  subTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  spinner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  vidWrapper: {
    width: "100%",
    height: 240,
    marginBottom: 15,
  },
  nextprev: {
    marginTop: 50,
    justifyContent: "center",
  },
  next: {
    display: "flex",
    width: "90%",
    height: 50,
    alignSelf: "flex-end",
    backgroundColor: "orange",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    flexDirection: "row-reverse",
  },
  prev: {
    display: "flex",
    width: "90%",
    height: 50,
    backgroundColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    color: "white",
    padding: 5,
  },
});
