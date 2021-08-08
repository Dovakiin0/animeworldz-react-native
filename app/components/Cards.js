import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const Cards = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      {/* Image */}
      <View>
        <Image
          style={styles.coverImg}
          source={{
            uri: "https://picsum.photos/200/300",
          }}
          resizeMode="cover"
        />
      </View>
      {/* title */}
      <View>
        <Text style={{ color: colors.text }}>Title</Text>
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
  coverImg: {
    width: 150,
    height: 200,
  },
});
