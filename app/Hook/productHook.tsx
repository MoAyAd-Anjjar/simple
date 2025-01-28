import { encode as btoa } from 'base-64'; // For encoding SQL queries to Base64
import axios from "axios";
import { Iuser } from '../Tabs/Login'; // Ensure Iuser is correctly imported

const useProduct = () => {
    // Function to get a single user
    const GetProductRandom = async () => {
        try {
            const response = await axios.get(`http://192.168.1.108:5050/Product/GetProductsRandom`);
            
            if (response.data) {
                return response.data; // Return the user data object
            } else {
                return []; // If no data is found, return null
            }
        } catch (error: any) {
            console.error('Error fetching Product data:', error.message);
            return []; // Return null in case of an error
        }
    };
    const getProduct = async (Category:any) => {
        try {
            const response = await axios.get(`http://192.168.1.108:5050/Product/GetProducts?Category=${Category}`);
            
            if (response.data) {
                return response.data; // Return the user data object
            } else {
                return []; // If no data is found, return null
            }
        } catch (error: any) {
            console.error('Error fetching Product data:', error.message);
            return []; // Return null in case of an error
        }
    };

    return { GetProductRandom,getProduct };
};

export default useProduct;
