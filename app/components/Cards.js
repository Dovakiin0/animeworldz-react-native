import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";

const Cards = ({ img, title, extra }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      {/* Image */}
      <TouchableOpacity>
        <View style={styles.imgWrapper}>
          <Image
            style={styles.coverImg}
            source={{
              uri: img,
            }}
            resizeMode="cover"
          />
          <View style={styles.extra}>
            <Text style={styles.extraText}>{extra}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* title */}
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    width: 200,
  },
  imgWrapper: {
    justifyContent: "center",
  },
  coverImg: {
    width: 200,
    height: 250,
    borderRadius: 5,
  },
  title: {
    fontWeight: 15,
    marginTop: 10,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  titleWrpper: {},
  extra: {
    backgroundColor: "#aa647b",
    width: 200,
    height: 25,
    position: "absolute",
    bottom: 0,
    overflow: "hidden",
    borderRadius: 5,
    justifyContent: "center",
  },
  extraText: {
    fontWeight: "bold",
    color: "#FFF",
  },
});
