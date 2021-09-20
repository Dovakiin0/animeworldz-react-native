import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";

const Cards = ({ img, title, extra, href }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const handleClick = () => {
    navigation.navigate("Details", {
      uri: href,
      title,
      link: `/category/${title.replace(/\s/g, "-").toLowerCase()}`,
    });
  };

  return (
    <View style={styles.container}>
      {/* Image */}
      <TouchableOpacity onPress={handleClick}>
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
    padding: 5,
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
    backgroundColor: "orange",
    // opacity: 0.8,
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
    paddingLeft: 10,
  },
});


