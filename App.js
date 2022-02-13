import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [people, setpeople] = useState([
    { name: "joseph", key: "1" },
    { name: "david", key: "2" },
    { name: "abraham", key: "3" },
    { name: "aaron", key: "4" },
    { name: "isaac", key: "5" },
    { name: "samuel", key: "6" },
    { name: "jacob", key: "7" },
    { name: "steve", key: "8" },
    { name: "john", key: "9" },
  ]);

  return (
    <View style={styles.container}>
      {people.map((item) => (
        <ScrollView>
          <View key={item.key}>
            <Text style={styles.item}>
              <span>📕</span> {item.name.toUpperCase()}
            </Text>
          </View>
        </ScrollView>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  item: {
    padding: 10,
    backgroundColor: "green",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
