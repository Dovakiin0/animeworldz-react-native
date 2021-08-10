import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

const EpisodeList = ({ ep, slug, title, count }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Episode", {
      episode: ep,
      slug,
      title,
      count,
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Watch Episode {ep} of {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeList;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: 50,
    borderColor: "orange",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    padding: 15,
    marginBottom: 10,
  },
  text: {
    color: "orange",
  },
});
