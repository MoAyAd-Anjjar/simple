import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "../Styles/HomeStyle";
import React, { useEffect, useState } from 'react';
import useProduct from '../Hook/productHook';
import { CircleSpinner } from "react-spinners-kit";

export interface IProduct {
  productname: string;
  productprice: number;
  productdescrpiton: string;
  productimage: string;
  product_id: number;
  product_category: string;
}

function HomeProduct() {
  const imageMap: { [key: string]: any } = {
    'New iPhone 16 Pro': require('../Images/Iphone.png'),
    // add more images here
  };

  const { GetProductRandom } = useProduct();
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [getProductRandom, setProductListRandom] = useState<IProduct[]>([]);

  // Fetch products on initial render
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const getdata = await GetProductRandom();
        setProductListRandom(getdata);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching is complete
      }
    };
    fetchProduct();
  }, []);

  // Fetch random products on button click
  const getRandomItems = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const getdata = await GetProductRandom();
      setProductListRandom(getdata);
    } catch (error) {
      console.error('Error fetching random products:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching is complete
    }
  };

  return (
    <View>
      <Text style={{ margin: 1, fontSize: 18 }}>Product List:</Text>

      {/* Random Product Button */}
      <TouchableOpacity onPress={getRandomItems} style={styles.RandomButton}>
        <Text style={{ margin: 1, fontSize: 12, color: "white" }}>{" Random\n Product"}</Text>
        <Image style={styles.RandomImage} source={require("../Images/random.png")} />
      </TouchableOpacity>

      {/* Product List */}
      <View style={styles.ProductList}>
        {loading ? (
         <Text>loadasdaing</Text>
        ) : (
          getProductRandom.length > 0 &&
          getProductRandom.map((product, index) => (
            <View key={index} style={styles.ProductContainer}>
              {/* Use fallback image if no image found for product */}
              <Image
                style={styles.ProductImage}
                source={require('../Images/WirelessHeadphones.png')} // Default image fallback
              />
              <View style={styles.ProductInfo}>
                <View style={styles.ProductInfoTop}>
                  <Text style={{ margin: 1, fontSize: 20, fontWeight: "bold" }}>
                    {product.productprice}$
                  </Text>
                  <TouchableOpacity style={styles.ProductInfoCart}>
                    <Text style={{ color: "white", fontStyle: "italic" }}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
                <Text style={{ margin: 1, fontSize: 12, fontWeight: "bold", paddingLeft: 5 }}>
                  {product.productname}
                </Text>
              </View>
            </View>
          ))
        )}
      </View>
    </View>
  );
}

export default HomeProduct;
