import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { SearchBar } from "react-native-elements";
import { DarkContext } from "../context/AnimeContext";
import axios from "axios";
import Spinner from "../components/Spinner";
import Cards from "../components/Cards";

const Search = () => {
  const { colors } = useTheme();
  const [searchString, setSearchString] = useState("");
  const { darkMode } = useContext(DarkContext);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (val) => {
    setSearchString(val);
  };

  const getSearchAnime = () => {
    if (searchString) {
      axios
        .get(`https://animeworldz.herokuapp.com/api/v1/anime/${searchString}`, {
          onDownloadProgress: setLoading(true),
        })
        .then((response) => {
          setSearchResult(response.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      setSearchResult([]);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => getSearchAnime(), 1000);
    return () => clearTimeout(timer);
  }, [searchString]);

  /*
    "img": "https://gogocdn.net/images/anime/N/naruto.jpg",
    "link": "/category/naruto",
    "released": "2002",
    "title": "Naruto",
  */

  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.os === "ios" ? "padding" : "height"}
          style={styles.keyboardWrapper}
        >
          <SearchBar
            round={true}
            lightTheme={darkMode ? false : true}
            containerStyle={{
              borderRadius: 10,
              backgroundColor: colors.background,
            }}
            inputStyle={{ color: colors.text, borderRadius: 10 }}
            style={styles.searchBar}
            placeholder="Search Anime.."
            onPr
            onChangeText={handleChange}
            value={searchString}
          />
        </KeyboardAvoidingView>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          {loading ? (
            <View style={styles.spinner}>
              <Spinner />
            </View>
          ) : (
            <ScrollView>
              <View style={styles.searchList}>
                {searchResult.length > 0 &&
                  searchResult.map((anime, i) => (
                    <Cards
                      key={i}
                      title={anime.title}
                      img={anime.img}
                      extra={`Released: ${anime.released}`}
                      href={anime.link}
                    />
                  ))}
              </View>
            </ScrollView>
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  searchBar: {
    flex: 1,
  },
  spinner: {
    flex: 1,
    alignItems: "center",
  },
  searchList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
