import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, {useState, useEffect} from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const ApiRawg = () => {
  const url = "https://api.rawg.io/api/games";
  const key = "7320353049404ffdaab57f1cba2972a4"
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  fetch(`${url}?key=${key}`)
    .then((response) => response.json())
    .then((data) => {
      setGames(data.results);
      setLoading(false);
    })
    .catch((error) => console.log(error));
  return { games, loading };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
});
