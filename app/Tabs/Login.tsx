import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import styles from "../Styles/LoginStyles"; // Import the styles
import { useRouter } from "expo-router"; // Import for navigation
import useUser from "../Hook/userHook";

export interface Iuser{
  username: string,
  email: string,
  password: string,
  user_id?:number
}

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {getUsers}=useUser()
  const [password, setPassword] = useState("");
  const router = useRouter(); // Hook for navigating

  // Predefined array of users

  


  const showData = async () => {
    if (!name || !email || !password) {
      Alert.alert("Validation Error", "Please fill in all the fields.");
      return;
    }
  
    try {
      const getuser: Iuser = await getUsers(name, email, password);
   
      
      if (getuser.username) {
        router.push({
          pathname: "/Tabs/Home", // Ensure this route is correctly set up
          params: { userName: getuser.username },
        });
        setPassword("");
        setName("");
        setEmail("");
      } else {
        // Show an error alert
        Alert.alert("Invalid Input", "User not found. Please check your credentials.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "There was an issue fetching the users. Please try again.");
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
