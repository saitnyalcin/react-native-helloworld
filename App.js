import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setname] = useState("steve");
  const [age, setage] = useState("30");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter your name..."
        onChangeText={(name) => setname(name)}
      />
      <Text>Name: {name}</Text>

      <TextInput
        keyboardType="numeric"
        style={styles.inputStyle}
        placeholder="Enter your age..."
        onChangeText={(age) => setage(age)}
      />
      <Text>Age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
