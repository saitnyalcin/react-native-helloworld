import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, SafeAreaView } from "react-native-web";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        The title and onPress handler are required. It is recommended to set
        accessibilityLabel to help make your app usable by everyone.
      </Text>
      <Button onPress={onPressLearnMore} title="Learn More" color="#841584" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const onPressLearnMore = () => console.log("onPress clicked..");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
});
