import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import  HomeHeader  from "./HomeHeader";
import  HomeScroll  from "./HomeScroll";
import HomeProduct from "./HomeProduct";
import HomeCategory  from "./HomeCategory";
import styles from "../Styles/HomeStyle";

export interface IHomeScrollData {
  id: string;
  image: any;
  title: string;
}

export default function Home() {
  const HomeScrollData: IHomeScrollData[] = [
    { id: "1", image: require("../Images/pc-case.png"), title: "Buy it Now" },
    { id: "2", image: require("../Images/iphone-home.png"), title: "Buy it Now" },
    { id: "3", image: require("../Images/Iphone.png"), title: "Buy it Now" },
    { id: "4", image: require("../Images/smartwatch.png"), title: "Buy it Now" },
    { id: "5", image: require("../Images/headphone.png"), title: "Buy it Now" },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.container}
      data={[]}
      keyExtractor={(item, index) => index.toString()} // Since there's no `data`, use a dummy keyExtractor
      ListHeaderComponent={
        <>
          <HomeHeader />
          <HomeScroll data={HomeScrollData} />
          <HomeCategory />
        </>
      }
      renderItem={null} // No items to render, so we pass `null`
      ListFooterComponent={<HomeProduct />}
    />
  );
}

