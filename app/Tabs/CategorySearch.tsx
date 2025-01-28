import { StyleSheet, View, TextInput, Image, Text, TouchableOpacity, FlatList, ActivityIndicator, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import Dropdown from 'react-native-input-select';
import CategoryElectronic from "../common/Caregory/Category";
import HomeStyle from '../Styles/HomeStyle';
import useProduct from '../Hook/productHook';
import { IProduct } from './HomeProduct';

const CategorySearch = () => {
    const { Category } = useLocalSearchParams();
    const [category, setCategory] = useState<string | any>(Category); 
    const { getProduct } = useProduct();
    const [loading, setLoading] = useState(true);
    const [productList, setProductList] = useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true); // Show loading indicator
            try {
                const getdata = await getProduct(category);
                setProductList(getdata);
                setFilteredProducts(getdata); // Initialize filtered list
            } catch (error) {
                console.error('Error fetching products:', error);
                Alert.alert('Error', 'Unable to fetch products. Please try again later.');
            } finally {
                setLoading(false); // Hide loading indicator
            }
        };
        fetchProduct();
    }, [category]);

    // Filter products by search term
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredProducts(productList);
        } else {
            setFilteredProducts(
                productList.filter(product =>
                    product.productname.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm, productList]);

    const renderProduct = ({ item }: { item: IProduct }) => (
        <View style={[HomeStyle.CategoryContainer, { marginBottom: 15 }]}>
            <Image
                style={HomeStyle.ProductImage}
                source={require('../Images/WirelessHeadphones.png')}
            />
            <View style={HomeStyle.ProductInfo}>
                <View style={HomeStyle.ProductInfoTop}>
                    <Text style={{ margin: 1, fontSize: 20, fontWeight: "bold" }}>
                        {item.productprice}$
                    </Text>
                    <TouchableOpacity style={HomeStyle.ProductInfoCart}>
                        <Text style={{ color: "white", fontStyle: "italic" }}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ margin: 1, fontSize: 12, fontWeight: "bold", paddingLeft: 5 }}>
                    {item.productname}
                </Text>
            </View>
        </View>
    );

    return (
        <View style={HomeStyle.SearchContainer}>
            {/* Search Input and Dropdown */}
            <View style={HomeStyle.SearchTop}>
                <TextInput
                    placeholder="Search categories..."
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                    style={HomeStyle.searchInput}
                    accessibilityRole="search"
                />
                <Dropdown
               
                    selectedValue={category}
                    placeholder="Select an option...."
                    options={CategoryElectronic.map(category => ({
                        label: category.name.trim().replace('\n', ''),
                        value: category.name.trim()
                    }))}
                    onValueChange={(value) => setCategory(value)}
                    primaryColor="#3db1ff"
                    dropdownStyle={HomeStyle.dropdown}
                />
            </View>

            {/* Product List */}
            {loading ? (
                <ActivityIndicator size="large" color="#3db1ff" />
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={filteredProducts}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderProduct}
                    contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 10 }}
                    ListEmptyComponent={
                        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 16, color: '#999' }}>
                            No products found.
                        </Text>
                    }
                />
            )}
        </View>
    );
};

export default CategorySearch;
