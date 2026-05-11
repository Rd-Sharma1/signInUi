import React from "react";
import { StyleSheet, View } from "react-native";

const Logo = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.vertical, styles.box]} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          // backgroundColor: "#333",
        }}
      >
        <View style={[styles.horizotal, styles.box]} />
        <View style={[styles.horizotal, styles.box]} />
      </View>
      <View style={[styles.vertical, styles.box]} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    maxHeight: "20%",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    marginBlock: 12,
    // backgroundColor: "#ccc",
    // flexDirection: "row",
  },
  vertical: {
    height: "100%",
  },
  horizotal: {
    width: "100%",
  },
  box: {
    backgroundColor: "#67e639ff",
    borderWidth: 0.5,
    borderColor: "#2fc040c4",
    padding: 8,
    borderRadius: 10,
    width: 22,
    height: 22,
  },
});
