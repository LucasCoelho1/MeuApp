import { View } from "react-native";
import { Paragraph, TextInput } from "react-native-paper";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <Paragraph> Realize o seu cadastro</Paragraph>
        <TextInput label={"Email"} placeholder="Digite seu email" />
        <TextInput placeholder="Digite sua senha" secureTextEntry={true} />
      </View>
    </View>
  );
}
