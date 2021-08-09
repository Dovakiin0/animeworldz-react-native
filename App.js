import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/HomeScreen";
import Schedule from "./app/screens/Schedule";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favourite from "./app/screens/Favourite";
import Setting from "./app/screens/Setting";
import { Icon } from "react-native-elements";
import {
  PopularContext,
  ScheduleContext,
  DarkContext,
} from "./app/context/AnimeContext";
import axios from "axios";
import Search from "./app/screens/Search";
import Details from "./app/screens/Details";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const [popular, setPopular] = useState([]);
  const [schedule, setSchedule] = useState({});
  const [darkMode, setDarkMode] = useState(true);

  const Theme = darkMode ? DarkTheme : DefaultTheme;

  const getPopular = () => {
    axios
      .get("https://animeworldz.herokuapp.com/api/v1/anime/popular/1")
      .then((res) => {
        setPopular(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getSchedule = () => {
    axios
      .post("https://animeworldz.herokuapp.com/api/v1/schedule", { day: "" })
      .then((res) => {
        setSchedule(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPopular();
    getSchedule();
  }, []);

  return (
    <DarkContext.Provider value={{ darkMode, setDarkMode }}>
      <PopularContext.Provider value={{ popular }}>
        <ScheduleContext.Provider value={{ schedule }}>
          <NavigationContainer theme={Theme}>
            <Stack.Navigator>
              <Stack.Screen name="Home" options={{ headerShown: false }}>
                {(props) => <Home {...props} Tab={Tab} darkMode={darkMode} />}
              </Stack.Screen>
              <Stack.Screen
                name="Details"
                component={Details}
                option={{ headerShown: false }}
              />
            </Stack.Navigator>
            <StatusBar style={darkMode ? "light" : "dark"} />
          </NavigationContainer>
        </ScheduleContext.Provider>
      </PopularContext.Provider>
    </DarkContext.Provider>
  );
}

function Home({ Tab, darkMode }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomScreen"
        component={HomeScreen}
        options={{
          title: "ANIMEWORLD-Z",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon color={color} type="octicon" name="home" />
          ),
          tabBarActiveTintColor: darkMode ? "#fff" : "#000",
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: "ANIMEWORLD-Z",
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <Icon color={color} type="material" name="search" />
          ),
          tabBarActiveTintColor: darkMode ? "#fff" : "#000",
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          title: "ANIMEWORLD-Z",
          tabBarLabel: "Favourite",
          tabBarIcon: ({ color }) => (
            <Icon color={color} type="octicon" name="heart" />
          ),
          tabBarActiveTintColor: darkMode ? "#fff" : "#000",
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          title: "ANIMEWORLD-Z",
          tabBarLabel: "Schedule",
          tabBarIcon: ({ color }) => (
            <Icon color={color} type="material" name="schedule" />
          ),
          tabBarActiveTintColor: darkMode ? "#fff" : "#000",
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          title: "ANIMEWORLD-Z",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Icon color={color} type="material" name="settings" />
          ),
          tabBarActiveTintColor: darkMode ? "#fff" : "#000",
        }}
      />
    </Tab.Navigator>
  );
}
