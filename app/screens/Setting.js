import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import List from "../components/List";
import { Avatar, Icon } from "react-native-elements";

const Setting = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
      <View style={styles.about}>
        <Avatar
          rounded
          size="xlarge"
          source={{
            uri: "https://e7.pngegg.com/pngimages/772/811/png-clipart-love-chunibyo-other-delusions-ahoge-anime-konosuba-anime-black-hair-chibi.png",
          }}
        />
        <Text style={[styles.abouttext, { color: colors.text }]}>
          Created By: Dovakiin0
        </Text>
        <View style={styles.media}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/Dovakiin0")}
          >
            <Icon
              style={{ margin: 10 }}
              type="antdesign"
              name="github"
              color={colors.text}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.instagram.com/dovakiin0._/")
            }
          >
            <Icon
              style={{ margin: 10 }}
              type="antdesign"
              name="instagram"
              color={colors.text}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://twitter.com/dovakiin0")}
          >
            <Icon
              style={{ margin: 10 }}
              type="antdesign"
              name="twitter"
              color={colors.text}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subcontainer}>
        <List />
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  subcontainer: {
    width: "100%",
    alignSelf: "center",
  },
  about: {
    alignItems: "center",
  },
  media: {
    flexDirection: "row",
    padding: 15,
    marginRight: 15,
  },
  abouttext: {
    marginTop: 10,
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    position: "absolute",
    alignSelf: "center",
    textTransform: "uppercase",
    top: 10,
  },
});
