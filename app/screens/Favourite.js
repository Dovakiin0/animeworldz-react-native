import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import EpisodeList from "../components/EpisodeList";

const Favourite = () => {
  return (
    <View style={styles.container}>
      <Text>Favourite</Text>
      <EpisodeList />
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({});
