import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Pressable, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import styles from "../Styles/HomeStyle";
import  {IHomeScrollData}  from './Home';

 const HomeScroll=({ data }: { data: IHomeScrollData[] }) =>{
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width: SCREEN_WIDTH } = Dimensions.get("window");

  // Function to handle scroll events and set the current index
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.HomeImageContainer}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.HomeImage} />
            <TouchableOpacity style={styles.HomeBuyButtonContainer}>
              <Text style={styles.HomeBuyButton}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
        onScroll={onScroll}
        scrollEventThrottle={16} // Throttle the scroll events to optimize performance
        initialScrollIndex={Math.floor((data.length - 1) / 2)} // Start from the middle
        getItemLayout={(data, index) => ({
          length: SCREEN_WIDTH,
          offset: SCREEN_WIDTH * index,
          index,
        })} // Optimize initial scroll behavior
      />

      <View style={styles.Imgbar}>
        {data.map((item, index) => (
          <Pressable
            key={item.id}
            style={styles.SelectedImageContainer}
            onPress={() => setCurrentIndex(index)}
          >
            <View
              style={[
                styles.SelectedImage,
                currentIndex === index && styles.selectedImage, // Adjust image style when selected
              ]}
            />
          </Pressable>
        ))}
      </View>
    </>
  );
}

export default HomeScroll;