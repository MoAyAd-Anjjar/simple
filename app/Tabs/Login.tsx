import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import styles from "../Styles/LoginStyles"; // Import the styles
import { useRouter } from "expo-router"; // Import for navigation

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Hook for navigating

  // Predefined array of users
  const users = [
    { name: "John", email: "john@example.com", password: "12345" },
    { name: "Jane", email: "jane@example.com", password: "67890" },
    { name: "Doe", email: "doe@example.com", password: "password" },
    { name: "1", email: "2", password: "3" },
  ];

  const showData = () => {
    // Check if user exists in the array
    const userFound = users.find(
      (user) =>
        user.name === name &&
        user.email === email &&
        user.password === password
    );

    if (userFound) {
      // Navigate to the home page
      router.push({
        pathname: "/Tabs/Home", // Ensure this route is correctly set up
        params: { userName: userFound.name },
      });
      setPassword("");
      setName("");
      setEmail("");
    } else {
      // Show an error alert
      Alert.alert("Invalid Input", "User not found. Please check your credentials.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <View style={styles.ImageContainer}>
          <Image
            source={require("../Images/Login-Icon.png")} // Ensure the path is correct
            style={styles.icon}
          />
        </View>

        <View style={styles.form}>
          <Text style={styles.labelInput}>Username:</Text>
          <TextInput
            placeholder="Enter your name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.labelInput}>Email:</Text>
          <TextInput
            placeholder="Enter your email"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.labelInput}>Password:</Text>
          <TextInput
            placeholder="Enter your password"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={showData}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
