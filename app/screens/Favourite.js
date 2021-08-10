import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import EpisodeList from "../components/EpisodeList";
import Spinner from "../components/Spinner";

const Favourite = () => {
  return (
    <View style={styles.container}>
      <Text>Favourite</Text>
      <EpisodeList />
      <Spinner />
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({});
