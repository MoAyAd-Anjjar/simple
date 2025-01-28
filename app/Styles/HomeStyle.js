import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fbff",
  },
  itemContainer: {
    alignItems: "center",
    marginVertical: 10,

  },

  mainContent: {
    justifyContent: "center",
    alignItems: "center",

  },

  mainText: {
    fontSize: 18,
    color: "#333",
  },
  HomeImageContainer: {
    flexGrow: 0,
    direction: "ltr"
  },
  itemContainer: {
    width: 350, // Match the width of the FlatList viewport for paging
    height: 200,
    backgroundColor: "#e8c3c3",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop: 5,
  },
  HomeImage: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
  HomeBuyButtonContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#ffffffca",
    padding: 8,
    borderRadius: 10,
    elevation: 3, // Adds shadow on Android
  },
  HomeBuyButton: {
    color: "#f79c08",
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
    elevation: 10,
    position: "sticky"


  }
  , HeaderInfo: {
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

  },
  Imgbar: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
  SelectedImageContainer: {
    marginHorizontal: 4,
  },
  SelectedImage: {
    width: 7,
    height: 7,
    backgroundColor: "#f79c08",
    borderRadius: 10,
    opacity: 0.7, // Make unselected images less prominent
  },

  selectedImage: {
    height: 10,
    width: 20,

  }, CategoryContainer: {
    display: "flex",


  }, CategoryImageStyle: {
    width: "auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    resizeMode: "cover",



  },
  CategoryImageContainer: {
    width: 83,
    height: 90,
    backgroundColor: "#ec910979",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginHorizontal: 3,
    marginVertical: 3,
  }
  , CategoryImage: {
    width: 40,
    height: 40,
  }, RandomButton: {
    borderWidth: 0,
    borderRadius: 3,
    padding: 1,
    margin: 5,
    backgroundColor: "#c72643bb",
    width: 110,

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 0, // Adds shadow on Android
  }
  , RandomImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 2
  },
  ProductList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",

  },
  ProductImage: {
    width: "auto",
    backgroundColor: "#50aaddb8",
    height: 130,
    resizeMode: "contain",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,


  },
  ProductContainer: {
    width: "45%",
    margin: 3,// Adds shadow on Android
    borderRadius: 9,


  }
  , ProductInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#f8f4f4",
    padding: 5,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,


  }, ProductInfoTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 1,
    flexDirection: "row", width: "100%",

  }
  , ProductInfoCart: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#ff9100",
    marginVertical: 5,
  }
  ,
  SearchContainer: {
   width:"100%", 
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
      backgroundColor:"#e5e6e5"
  },
  searchInput: {
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
  
    borderColor: "#2c2121",
    borderWidth: 1,
  },
  SearchTop: {
    display: "flex",
    width: "100%",
    marginBottom: 5
  

  },
  Searchonfouce:{
    marginLeft: 10,
    backgroundColor: "#f9fbff",
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
  }
  ,
  dropdown: {

    borderColor: '#aa5e5e',


  }

})
