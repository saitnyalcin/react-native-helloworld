import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { Image, SafeAreaView } from "react-native-web";

export default function App() {
  const name = "steve";
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.title}>Hello, welcome to the react native</Text>
      <Welcome personName="steve" />
      <Welcome personName="david" />
      <Welcome personName="john" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Welcome = ({ personName }) => {
  return <div>{personName}</div>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
    textAlign: "center",
    fontSize: "50px",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
