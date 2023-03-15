import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function LolScreen() {
  return (
    <View style={styles.container}>
      <Text>Essa é a Lol Screen</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        Volte para o Home
      </Button>
    </View>
  );
}