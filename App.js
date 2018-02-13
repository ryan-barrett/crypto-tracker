import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-native";

import { Store } from "./src/components";
import { Header } from "./src/components";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <CryptoContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
