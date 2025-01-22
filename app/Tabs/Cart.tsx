import React, { useState } from 'react';
import CartStyle from "../Styles/CartStyel"
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
type CartItem = {
  id: string;
  name: string;
  price: number;
  image: any; // Replace `any` with the appropriate type if using specific image imports
  quantity: number;
};
export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Wireless Headphones', price: 120, image: require('../Images/WirelessHeadphones.png'), quantity: 1 },
    { id: '2', name: 'Smartwatch', price: 80, image: require('../Images/Iphone.png'), quantity: 1 },
    { id: '3', name: 'Gaming Mouse', price: 40, image: require('../Images/Iphone.png'), quantity: 1 },
    { id: '4', name: 'Gaming Mouse', price: 40, image: require('../Images/Iphone.png'), quantity: 1 },
    { id: '5', name: 'Gaming Mouse', price: 40, image: require('../Images/Iphone.png'), quantity: 1 },
    { id: '6', name: 'Gaming Mouse', price: 40, image: require('../Images/Iphone.png'), quantity: 1 },
    { id: '7', name: 'Gaming Mouse', price: 40, image: require('../Images/Iphone.png'), quantity: 1 }
  ]);

  const handleIncrease = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const renderCartItem = ({ item }: { item: CartItem } ) => (
    <View style={CartStyle.cartItem}>
      <Image source={item.image} style={CartStyle.productImage} />
      <View style={CartStyle.details}>
        <Text style={CartStyle.productName}>{item.name}</Text>
        <Text style={CartStyle.productPrice}>${item.price.toFixed(2)}</Text>
        <View style={CartStyle.quantityContainer}>
          <TouchableOpacity onPress={() => handleDecrease(item.id)} style={CartStyle.quantityButton}>
            <Text style={CartStyle.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={CartStyle.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleIncrease(item.id)} style={CartStyle.quantityButton}>
            <Text style={CartStyle.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={CartStyle.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
        style={CartStyle.cartList}
        showsVerticalScrollIndicator={false}
      />
      <View style={CartStyle.footer}>
        <Text style={CartStyle.totalText}>Total: ${totalPrice.toFixed(2)}</Text>
        <TouchableOpacity style={CartStyle.checkoutButton}>
          <Text style={CartStyle.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


