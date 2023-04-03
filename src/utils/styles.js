import { Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("window").width;
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    widthFull:{
      width: width,
    },
    containerFullWidth: {
      flex: 1,
      width: width,
    },
    bottomDistance: {
      marginBottom: 20,
    },
    Fetchnews:{
      flex: 1,
      backgroundColor: "#3B353D",
      alignItems: "left",
      justifyContent: "left",
      color: "white", 
      border: "3px solid #DBD2D0",
      borderRadius: 10,
      padding: 10,
    }
  });
  
export default styles;