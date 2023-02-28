import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Vai pra Detalhes"
          onPress={() => navigation.navigate("Details")}
        ></Button>
      </View>
    );
  }

