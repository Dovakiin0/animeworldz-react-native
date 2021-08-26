import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import DB from "../services/db";
import { ScrollView } from "react-native";

const Favourite = () => {
  const { colors } = useTheme();
  const [Favourite, setFavourite] = useState();

  const fetchFavourites = () => {
    DB.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM Favourites`,
        null,
        (tx, { rows: { _array } }) => {
          setFavourite(_array);
        },
        (tx, err) => {
          console.log(err);
        }
      );
    });
  };

  useEffect(() => {
    fetchFavourites();
  }, []);

  console.log(Favourite);

  return (
    <View style={styles.container}>
      <Text style={[{ color: colors.text }, styles.title]}>Favourites</Text>
      <ScrollView></ScrollView>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
