import { FontAwesome } from "@expo/vector-icons";
// import { Button } from "@react-navigation/elements";
import React, { useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 12,
          marginTop: 2,

          // backgroundColor: "red",
        }}
      >
        <FontAwesome
          style={{
            marginBottom: 12,
          }}
          name="plus"
          color="#12ef43"
          size={48}
        />
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

      <View
        style={{
          padding: 12,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Email Address</Text>
        <TextInput
          style={{
            marginVertical: 16,
            padding: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#777",
          }}
          placeholder="elementary221b@gmail.com"
          placeholderTextColor="#777"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={{ fontWeight: "bold" }}>Password</Text>
        <TextInput
          style={{
            margin: 4,
            padding: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#777",
          }}
          placeholder="Enter your password"
          placeholderTextColor="#777"
          value={pass}
          onChangeText={setPass}
        />

        <Pressable
          style={{
            borderRadius: 20,
            backgroundColor: "#67e639ff",
            borderColor: "#059015ff",
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

      <View>
        <View>
          <FlatList
            data={socialData}
            renderItem={({ item }) => (
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: "#777",
                  borderRadius: 20,
                  padding: 20,
                  margin: 8,
                  minWidth: 56,
                  // backgroundColor: "#ccc",
                }}
              >
                <FontAwesome name={item.icon} size={24} />
              </View>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              flexDirection: "row",
              padding: 12,
              justifyContent: "center",
              margin: 20,
            }}
          />
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
