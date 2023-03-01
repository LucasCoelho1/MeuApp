import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>Essa é a About Screen</Text>
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
