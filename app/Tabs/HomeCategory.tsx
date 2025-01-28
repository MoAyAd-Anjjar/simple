import { ReactNode } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import styles from "../Styles/HomeStyle";
import CategoryElectronic from "../common/Caregory/Category";
import { router } from 'expo-router';

export default function HomeCategory() {
  return (
    <SafeAreaView style={styles.CategoryContainer}>
      <Text style={{ fontSize: 19 }}>Category:</Text>
      <View style={styles.CategoryImageStyle}>
        {CategoryElectronic.map((category, index) => (
          <TouchableOpacity
            onPress={() => router.push(`/Tabs/CategorySearch?Category=${category.name}`)} 
            style={styles.CategoryImageContainer} 
            key={index}
          >
            <Image style={styles.CategoryImage} source={category.image} />
            <Text style={{ textAlign: "center" }}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}
