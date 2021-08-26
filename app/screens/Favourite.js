import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { ScrollView } from "react-native";
import Cards from "../components/Cards";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spinner from "../components/Spinner";

const Favourite = () => {
  const { colors } = useTheme();
  const [favourite, setFavourite] = useState([]);

  const fetchFavourites = async () => {
    let arr = [];
    let keys = await AsyncStorage.getAllKeys();
    keys.map(async (key) => {
      await AsyncStorage.getItem(key, (err, res) => {
        arr.push(JSON.parse(res));
      });
    });
    setFavourite(arr);
  };

  useEffect(() => {
    fetchFavourites();
  }, []);

  return favourite.length !== 0 ? (
    <View style={styles.container}>
      <Text style={[{ color: colors.text }, styles.title]}>Favourites</Text>
      <ScrollView>
        <View style={styles.List}>
          {favourite.map((fav, i) => (
            <Cards
              key={i}
              title={fav.title}
              img={fav.img}
              extra={`Released: ${fav.released}`}
              href={fav.link}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  ) : (
    <View style={styles.spinner}>
      <Spinner />
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  spinner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  List: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
