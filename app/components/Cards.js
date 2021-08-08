import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const Cards = ({ img, title, extra }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      {/* Image */}
      <View style={styles.imgWrapper}>
        <Image
          style={styles.coverImg}
          source={{
            uri: img,
          }}
          resizeMode="cover"
        />
        <View style={styles.extra}>
          <Text style={[{ color: colors.text }, styles.extraText]}>
            {extra}
          </Text>
        </View>
      </View>
      {/* title */}
      <View style={styles.titleWrpper}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      </View>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
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
  titleWrpper: {
    flex: 1,
  },
  extra: {
    backgroundColor: "#aa647b",
    width: "100%",
    height: 25,
    position: "absolute",
    bottom: 0,
    overflow: "hidden",
    borderRadius: 5,
    justifyContent: "center",
  },
  extraText: {
    fontWeight: "bold",
  },
});
