import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const EpisodeList = ({ ep, slug, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>
          Watch {ep} of {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EpisodeList;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: 50,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
  },
  text: {
    color: "green",
  },
});
