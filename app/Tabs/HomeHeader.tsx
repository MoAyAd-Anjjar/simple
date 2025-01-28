import { ReactNode } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import styles from "../Styles/HomeStyle"
import CategoryElectronic from "../common/Caregory/Category"
import { useLocalSearchParams, useRouter } from 'expo-router';


 const HomeHeader=() =>{
    const { userName } = useLocalSearchParams()
    const router = useRouter();
    const handlePressCart = () => {
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
                            pathname: "../Tabs/Login"
                        }) 
                        console.log("pressed");
                        // Replace 'Home' with your desired screen
                    },
                }

            ]
        )
    }
    return (
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
                    <Text  style={{width: 60, textAlign:"center"}}>{userName||""}</Text>
                    <Image
                        source={require("../Images/user.png")} // Ensure the path is correct
                        style={[{marginLeft:13},styles.IconHeader]}
                    />
                </View>
            </View>
        </View>
    );
}

export default HomeHeader;



  