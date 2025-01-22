import React, { useEffect, useRef, useState } from "react";
import { Animated, View, Text, StyleSheet, Image, TouchableWithoutFeedback, TextInput, TouchableOpacity, Alert, Pressable } from "react-native";
import { router, useLocalSearchParams, useRouter } from "expo-router"; // Correct hook
import styles from "../Styles/HomeStyle"
import { useNavigation } from "@react-navigation/native";



export default function Home() {
  const { userName } = useLocalSearchParams(); // Extract parameters passed via router.push
  const slideAnimation = useRef(new Animated.Value(-100)).current; // Start position above the screen
  const [showModal, setShowModal] = useState(true); // Control modal visibility
  const router = useRouter(); // Hook for navigating
  useEffect(() => {
    if (showModal) {
      // Animate the modal to slide down
      Animated.timing(slideAnimation, {
        toValue: 0, // Target position at the top
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
  }, [showModal]);

  const closeModal = () => {
    // Animate the modal to slide back up
    Animated.timing(slideAnimation, {
      toValue: -100, // Slide back up
      duration: 500,
      useNativeDriver: true,
    }).start(() => setShowModal(false)); // Hide modal after animation
  };

  const handlePressCart=() => {
    router.push("/Tabs/Cart") // Navigate to the Cart screen
  }

  const handlePresslogout = () => {
    Alert.alert(
      "Logout",
     "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            // Navigate after the user confirms logout
            router.push({
              pathname: "/"
            }) // Replace 'Home' with your desired screen
          },
        }

      ]
    );
  };


  return (
    <View style={styles.container}>
      {/* Modal at the top */}
      {showModal && (
        <Animated.View
          style={[
            styles.modal,
            { transform: [{ translateY: slideAnimation }] }, // Apply slide animation
          ]}
        >
          <TouchableWithoutFeedback onPress={closeModal}>
            <View>
              <Text style={styles.welcomeText}>
                Welcome, {userName || "Guest"}!
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
      )}

      {/* Main Content */}
      <View style={styles.mainContent}>
        <View style={styles.HeaderContainer}>
          <View style={styles.LeftHeaderInfo}>
            <TouchableOpacity onPress={handlePresslogout}>
              <Image
                source={require("../Images/logout.png")}
                style={styles.IconHeader}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePressCart}>
            <Image 
              source={require("../Images/shopping-cart.png")} // Ensure the path is correct
              style={styles.IconHeader}
            />
            </TouchableOpacity>
        
          </View>
          <TextInput style={styles.InputTextHome} placeholder="Search" accessibilityRole="search"></TextInput>
          <View style={styles.HeaderInfo}>
            <Text >{userName}</Text>
            <Image
              source={require("../Images/user.png")} // Ensure the path is correct
              style={styles.IconHeader}
            />
          </View>
        </View>
      </View>
      <View style={styles.HomeImageContainer}>
      <Image
        source={require("../Images/pc-case.png")} // Ensure the path is correct
        style={styles.HomeImage}
      />
      <TouchableOpacity onPress={closeModal} style={styles.HomeBuyButtonContainer}>
        <Text style={styles.HomeBuyButton}>Buy it Now</Text>
      </TouchableOpacity>
    </View>

    </View>
  );
}


