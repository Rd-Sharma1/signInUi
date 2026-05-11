import { FontAwesome } from "@expo/vector-icons";
// import { Button } from "@react-navigation/elements";
import React, { useState } from "react";
import { Pressable, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInHeader from "../../components/SignInHeader";
import SignInInput from "../../components/SignInInput";

const socialData = [
  {
    id: "1",
    icon: "facebook",
  },
  {
    id: "2",
    icon: "google",
  },
  {
    id: "3",
    icon: "instagram",
  },
] as const;

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 12,
        justifyContent: "space-evenly",
        // backgroundColor: "#333",
      }}
    >
      <StatusBar barStyle="dark-content" />
      <SignInHeader />

      <View style={{ padding: 12 }}>
        <SignInInput
          value={email}
          setValue={setEmail}
          inputLabel="Email Address"
          placeholder="elementary221b@gmail.com"
          iconName="envelope"
        />
        <SignInInput
          value={pass}
          setValue={setPass}
          inputLabel="Password"
          placeholder="Enter you password"
          iconName="lock"
          prefixIcon="eye-slash"
          showText={true}
        />

        <Pressable
          style={{
            borderRadius: 20,
            backgroundColor: "#67e639ff",
            borderColor: "#2fc040c4",
            borderWidth: 1,
            marginVertical: 24,
            padding: 16,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", marginRight: 8 }}>Sign In</Text>
          <FontAwesome name="arrow-right" size={20} color="#fff" />
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 24,
        }}
      >
        <View>
          {socialData.map((item) => (
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                borderWidth: 1,
                borderColor: "#ddd",
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 8,
                backgroundColor: "#fff",
              }}
            >
              <FontAwesome name={item.icon} size={24} />
            </View>
          ))}
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text>Don't have an account?</Text>
            <Text style={{ color: "#12ef43" }}>Sign up</Text>
          </View>
          <Text style={{ color: "#12ef43" }}>Forgot your password</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
