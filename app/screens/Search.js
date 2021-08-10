import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { SearchBar } from "react-native-elements";
import { DarkContext } from "../context/AnimeContext";

const Search = () => {
  const { colors } = useTheme();
  const [searchString, setSearchString] = useState("");
  const { darkMode } = useContext(DarkContext);

  const handleChange = (val) => {
    setSearchString(val);
  };

  return (
    <TouchableWithoutFeedback onPress={() => console.log("PRESSED")}>
      <View>
        <KeyboardAvoidingView
          behavior={Platform.os === "ios" ? "padding" : "height"}
          style={styles.keyboardWrapper}
        >
          <SearchBar
            lightTheme={darkMode ? false : true}
            containerStyle={{ borderRadius: 10 }}
            inputStyle={{ color: colors.text, borderRadius: 10 }}
            style={styles.searchBar}
            placeholder="Search Anime.."
            onChangeText={handleChange}
            value={searchString}
          />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBar: {},
});
