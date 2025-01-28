import { encode as btoa } from 'base-64'; // For encoding SQL queries to Base64
import axios from "axios";
import { Iuser } from '../Tabs/Login'; // Ensure Iuser is correctly imported

const useUser = () => {
    // Function to get a single user
    const getUsers = async (username: string, email: string, password: string): Promise<any> => {
        try {
            const response = await axios.get(`http://192.168.1.108:5050/User/GetUser?username=${username}&email=${email}&password=${password}`);
            
            if (response.data) {
                return response.data; // Return the user data object
            } else {
                return []; // If no data is found, return null
            }
        } catch (error: any) {
            console.error('Error fetching user data:', error.message);
            return []; // Return null in case of an error
        }
    };

    return { getUsers };
};

export default useUser;
