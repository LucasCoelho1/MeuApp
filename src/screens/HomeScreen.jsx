import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Essa é a Home Screen</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("AboutScreen");
        }}
      >
        Conheça o sobre
      </Button>
    </View>
  );
}
