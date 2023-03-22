import { useState } from "react";
import { View } from "react-native";
import { Button, Paragraph, TextInput } from "react-native-paper";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from "../utils/styles";

export default function RegisterScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // função para registrar o usuário no banco de dados do firebase
  function handleRegister() {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Usuário criado com sucesso!");
        navigation.navigate("LoginScreen")
      })
      .catch((error) => {
        console.log("Erro ao criar o usuário: ", error);
        const errorCode = error.code; //auth/weak-password
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
      <View style={styles.box}>
        <Paragraph> Realize o seu cadastro {nome}</Paragraph>
        <TextInput
          label={"Email"}
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
        />
        <TextInput
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
          mode="outlined"
        />
        <Button onPress={handleRegister}>Registrar</Button>
      </View>
    </View>
  );
}
