import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "./Logo";

const SignInHeader = () => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        maxHeight: "40%",
      }}
    >
      <Logo />
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
          }}
        >
          Sign In
        </Text>
        <Text
          style={{
            color: "#777",
            margin: 8,
          }}
        >
          Let's experience of the joy of telecare AI
        </Text>
      </View>
    </View>
  );
};

export default SignInHeader;

const styles = StyleSheet.create({});
