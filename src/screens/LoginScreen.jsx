import { signInWithEmailAndPassword} from "firebase/auth";
import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { auth } from "../config/firebase";
import styles from "../utils/styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Usuário logado com sucesso!");
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        console.log("Erro ao logar o usuário: ", error);
        const errorCode = error.code; 
        auth/weak-password;
        //mensagem de erro
        if (errorCode === "auth/weak-password") {
          console.log("Senha muito fraca");
        }

        if (errorCode === "auth/invalid-email") {
          console.log("Email ja cadastrado");
        }
      });
    //codigo erro
  }

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
        onPress={handleLogin}
      >
        Login
      </Button>
    </View>
  );
}
