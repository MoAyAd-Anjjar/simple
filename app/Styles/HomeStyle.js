import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  modal: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    paddingVertical: 20,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10, // For Android shadow
    zIndex: 10, // Ensure it is above main content
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A90E2",
    textAlign: "center",
  },
  mainContent: {
    justifyContent: "center",
    alignItems: "center",
  },

  mainText: {
    fontSize: 18,
    color: "#333",
  },
  HomeImage: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  HomeImageContainer: {
    display: "flex",
    margin: 5,
    backgroundColor: "#ffffffd2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    position: "relative", // Ensure the container allows for absolute positioning inside
  },
  HomeBuyButtonContainer: {
    position: "absolute", // Absolute positioning for the button
    bottom: 10, // Position it near the top
    right: 10, // Position it to the right side
  },
  HomeBuyButton: {
    backgroundColor: "#ffffffca",
    borderRadius: 10,
    padding: 10,
    color: "#f79c08",
    boxShadow:"-1px 1px 1px 1px #ff7700fb",
    fontWeight: "bold",
  },
  IconHeader: {
    width: 30,
    height: 30,
  },
  HeaderContainer: {
    display: "flex",
    padding: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    elevation: 10, // For Android shadow

  }
  , HeaderInfo: {

    paddingLeft: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  LeftHeaderInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  InputTextHome: {
    width: "50%",
    height: 40,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 10,

  }

})
