import { StyleSheet} from "react-native"
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f9fa',
      paddingHorizontal: 16,
      paddingTop: 20,
    },
    cartList: {
      marginBottom: 20,
    },
    cartItem: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      marginBottom: 16,
      padding: 12,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
    },
    productImage: {
      width: 70,
      height: 70,
      borderRadius: 8,
      marginRight: 12,
    },
    details: {
      flex: 1,
      justifyContent: 'center',
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#343a40',
    },
    productPrice: {
      fontSize: 14,
      color: '#6c757d',
      marginVertical: 4,
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    quantityButton: {
      backgroundColor: '#e9ecef',
      borderRadius: 4,
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginHorizontal: 8,
    },
    buttonText: {
      fontSize: 16,
      color: '#495057',
    },
    quantityText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#495057',
    },
    footer: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
    },
    totalText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 12,
      color: '#343a40',
    },
    checkoutButton: {
      backgroundColor: '#ff9900',
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    checkoutButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });