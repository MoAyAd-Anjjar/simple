// styles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",


  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#8b9500",
    textAlign: "center",
    width: "80%",
    padding: 15
  },
  login: {
    width:"80%",
    shadowColor: "#000", // Consistent shadow color
    shadowOffset: { width: 0, height: 2 }, // Adjusted for a subtle shadow
    shadowOpacity: 0.2, // Increased for better visibility
    shadowRadius: 3, // Slightly larger for a softer shadow
    elevation: 4, // Android shadow (higher elevation for more pronounced shadow)
    padding: 15, // Consistent padding
    alignItems: "center", // Horizontal alignment
    justifyContent: "center", // Vertical alignment
    backgroundColor: "#fff", // Ensure a background color is set for shadow effects
    borderRadius: 10, // Optional: rounded corners for a modern look
  },  
  form: {

    width: "100%",
    padding: 10,
    borderRadius: 0,
    backgroundColor: "#white"

  },
  input: {
    
    height: 50,
    borderColor: "#c27a28",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  labelInput: {
    color: "gray",
    fontSize: 14
  }
  ,
  icon: {
    width: 100, // Set the width of the icon
    height: 100,
  

    // Set the height of the icon
  }
  ,
  ImageContainer: {
    width: "80%",
    backgroundColor: "white",
    alignItems: "center",
    borderWidth: 0,
    borderBottomColor: "#ffffff"

  }
  ,
  button: {
    backgroundColor: "#ff7b00",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  header: {
    width: "80%",
    height: 60,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  headerText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
