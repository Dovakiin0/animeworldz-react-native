import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { ScheduleContext } from "../context/AnimeContext";
import Cards from "../components/Cards";

const Schedule = () => {
  const { colors } = useTheme();
  const { schedule } = useContext(ScheduleContext);

  return (
    <View>
      <Text style={[styles.title, { color: colors.text }]}>Schedule</Text>
      <ScrollView>
        <Text style={[styles.subtitle, { color: colors.text }]}>Monday</Text>
        <ScrollView style={styles.cardContainer} horizontal={true}>
          {Object.entries(schedule).length !== 0 ? (
            schedule.monday.map((anime, i) => (
              <Cards
                key={i}
                title={anime.title}
                img={anime.img}
                extra={`Airing: ${new Date(
                  anime.airing_time
                ).toLocaleTimeString()}`}
              />
            ))
          ) : (
            <ActivityIndicator size="large" />
          )}
        </ScrollView>
        <Text style={[styles.subtitle, { color: colors.text }]}>Tuesday</Text>
        <ScrollView style={styles.cardContainer} horizontal={true}>
          {Object.entries(schedule).length !== 0 ? (
            schedule.tuesday.map((anime, i) => (
              <Cards
                key={i}
                title={anime.title}
                img={anime.img}
                extra={`Airing: ${new Date(
                  anime.airing_time
                ).toLocaleTimeString()}`}
              />
            ))
          ) : (
            <ActivityIndicator size="large" />
          )}
        </ScrollView>
        <Text style={[styles.subtitle, { color: colors.text }]}>Wednesday</Text>
        <ScrollView style={styles.cardContainer} horizontal={true}>
          {Object.entries(schedule).length !== 0 ? (
            schedule.wednesday.map((anime, i) => (
              <Cards
                key={i}
                title={anime.title}
                img={anime.img}
                extra={`Airing: ${new Date(
                  anime.airing_time
                ).toLocaleTimeString()}`}
              />
            ))
          ) : (
            <ActivityIndicator size="large" />
          )}
        </ScrollView>
        <Text style={[styles.subtitle, { color: colors.text }]}>Thursday</Text>
        <ScrollView style={styles.cardContainer} horizontal={true}>
          {Object.entries(schedule).length !== 0 ? (
            schedule.thursday.map((anime, i) => (
              <Cards
                key={i}
                title={anime.title}
                img={anime.img}
                extra={`Airing: ${new Date(
                  anime.airing_time
                ).toLocaleTimeString()}`}
              />
            ))
          ) : (
            <ActivityIndicator size="large" />
          )}
        </ScrollView>
        <Text style={[styles.subtitle, { color: colors.text }]}>Friday</Text>
        <ScrollView style={styles.cardContainer} horizontal={true}>
          {Object.entries(schedule).length !== 0 ? (
            schedule.friday.map((anime, i) => (
              <Cards
                key={i}
                title={anime.title}
                img={anime.img}
                extra={`Airing: ${new Date(
                  anime.airing_time
                ).toLocaleTimeString()}`}
              />
            ))
          ) : (
            <ActivityIndicator size="large" />
          )}
        </ScrollView>
        <Text style={[styles.subtitle, { color: colors.text }]}>Saturday</Text>
        <ScrollView style={styles.cardContainer} horizontal={true}>
          {Object.entries(schedule).length !== 0 ? (
            schedule.saturday.map((anime, i) => (
              <Cards
                key={i}
                title={anime.title}
                img={anime.img}
                extra={`Airing: ${new Date(
                  anime.airing_time
                ).toLocaleTimeString()}`}
              />
            ))
          ) : (
            <ActivityIndicator size="large" />
          )}
        </ScrollView>
        <Text style={[styles.subtitle, { color: colors.text }]}>Sunday</Text>
        <ScrollView style={styles.cardContainer} horizontal={true}>
          {Object.entries(schedule).length !== 0 ? (
            schedule.sunday.map((anime, i) => (
              <Cards
                key={i}
                title={anime.title}
                img={anime.img}
                extra={`Airing: ${new Date(
                  anime.airing_time
                ).toLocaleTimeString()}`}
              />
            ))
          ) : (
            <ActivityIndicator size="large" />
          )}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  subtitle: {
    fontSize: 16,
    padding: 10,
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
