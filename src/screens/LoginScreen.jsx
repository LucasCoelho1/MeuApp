import * as React from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import styles from "../utils/styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
        <br></br>
      <View style={styles.bottomDistance}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      </View>
      <View style={styles.bottomDistance}>
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      </View>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        Login
      </Button>
    </View>
  );
}