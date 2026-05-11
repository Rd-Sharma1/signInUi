import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface propType {
  value: string;
  setValue: (text: string) => void;
  inputLabel: string;
  placeholder: string;
  iconName: keyof typeof FontAwesome.glyphMap;
  prefixIcon?: keyof typeof FontAwesome.glyphMap;
  showText?: boolean;
}
const SignInInput = ({
  value,
  setValue,
  inputLabel,
  placeholder,
  iconName,
  prefixIcon,
  showText = false,
}: propType) => (
  <>
    <Text style={{ fontWeight: "bold" }}>{inputLabel}</Text>
    <View style={styles.InputStyle}>
      <FontAwesome name={iconName} size={20} color="#333" />

      <TextInput
        style={styles.TextFieldStyle}
        placeholder={placeholder}
        placeholderTextColor="#777"
        value={value}
        onChangeText={setValue}
        // {showText === true ? secureTextEntry : null}
        // {showText && secureTextEntry}
        secureTextEntry={showText}
      />
      {prefixIcon && <FontAwesome name={prefixIcon} size={20} />}
    </View>
  </>
);

export default SignInInput;

const styles = StyleSheet.create({
  InputStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginVertical: 16,
  },
  TextFieldStyle: {
    flex: 1,
    padding: 12,
    marginLeft: 8,
  },
});
