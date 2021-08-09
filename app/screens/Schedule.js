import React, { useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
import { ScheduleContext } from "../context/AnimeContext";
import Cards from "../components/Cards";
import Spinner from "../components/Spinner";

const Schedule = () => {
  const { colors } = useTheme();
  const { schedule } = useContext(ScheduleContext);

  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      {Object.entries(schedule).length !== 0 ? (
        <View>
          <Text style={[styles.title, { color: colors.text }]}>Schedule</Text>
          <ScrollView>
            <Text style={[styles.subtitle, { color: colors.text }]}>
              Monday
            </Text>
            <ScrollView style={styles.cardContainer} horizontal={true}>
              {schedule.monday.map((anime, i) => (
                <Cards
                  key={i}
                  title={anime.title}
                  img={anime.img}
                  extra={`Airing: ${new Date(
                    anime.airing_time
                  ).toLocaleTimeString()}`}
                />
              ))}
            </ScrollView>
            <Text style={[styles.subtitle, { color: colors.text }]}>
              Tuesday
            </Text>
            <ScrollView style={styles.cardContainer} horizontal={true}>
              {schedule.tuesday.map((anime, i) => (
                <Cards
                  key={i}
                  title={anime.title}
                  img={anime.img}
                  extra={`Airing: ${new Date(
                    anime.airing_time
                  ).toLocaleTimeString()}`}
                />
              ))}
            </ScrollView>
            <Text style={[styles.subtitle, { color: colors.text }]}>
              Wednesday
            </Text>
            <ScrollView style={styles.cardContainer} horizontal={true}>
              {schedule.wednesday.map((anime, i) => (
                <Cards
                  key={i}
                  title={anime.title}
                  img={anime.img}
                  extra={`Airing: ${new Date(
                    anime.airing_time
                  ).toLocaleTimeString()}`}
                />
              ))}
            </ScrollView>
            <Text style={[styles.subtitle, { color: colors.text }]}>
              Thursday
            </Text>
            <ScrollView style={styles.cardContainer} horizontal={true}>
              {schedule.thursday.map((anime, i) => (
                <Cards
                  key={i}
                  title={anime.title}
                  img={anime.img}
                  extra={`Airing: ${new Date(
                    anime.airing_time
                  ).toLocaleTimeString()}`}
                />
              ))}
            </ScrollView>
            <Text style={[styles.subtitle, { color: colors.text }]}>
              Friday
            </Text>
            <ScrollView style={styles.cardContainer} horizontal={true}>
              {schedule.friday.map((anime, i) => (
                <Cards
                  key={i}
                  title={anime.title}
                  img={anime.img}
                  extra={`Airing: ${new Date(
                    anime.airing_time
                  ).toLocaleTimeString()}`}
                />
              ))}
            </ScrollView>
            <Text style={[styles.subtitle, { color: colors.text }]}>
              Saturday
            </Text>
            <ScrollView style={styles.cardContainer} horizontal={true}>
              {schedule.saturday.map((anime, i) => (
                <Cards
                  key={i}
                  title={anime.title}
                  img={anime.img}
                  extra={`Airing: ${new Date(
                    anime.airing_time
                  ).toLocaleTimeString()}`}
                />
              ))}
            </ScrollView>
            <Text style={[styles.subtitle, { color: colors.text }]}>
              Sunday
            </Text>
            <ScrollView style={styles.cardContainer} horizontal={true}>
              {schedule.sunday.map((anime, i) => (
                <Cards
                  key={i}
                  title={anime.title}
                  img={anime.img}
                  extra={`Airing: ${new Date(
                    anime.airing_time
                  ).toLocaleTimeString()}`}
                />
              ))}
            </ScrollView>
          </ScrollView>
        </View>
      ) : (
        <View style={styles.spinner}>
          <Spinner />
        </View>
      )}
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    alignSelf: "flex-start",
  },
  subtitle: {
    fontSize: 16,
    padding: 10,
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
