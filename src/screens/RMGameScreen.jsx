import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Button, Text, Modal, Portal } from "react-native-paper";
import { styles } from "../utils/styles";

export default function RMGameScreen() {
  const [personagem, setPersonagem] = useState(null);
  const [personagens, setPersonagens] = useState([]);
  const [totalPersonagens, setTotalPersonagens] = useState(1);
  const [score, setScore] = useState(0);
  const [usedCharacters, setUsedCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => {
        setTotalPersonagens(json.info.count);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://rickandmortyapi.com/api/character/" + returnRandomNumber()
    )
      .then((response) => response.json())
      .then((json) => {
        setPersonagem(json);
      });
  }, [totalPersonagens]);

  function handlePersonagemVivoOuMorto(resposta) {
    const isAlive = personagem.status === "Alive";
    const newScore = resposta === isAlive ? score + 1 : score;
    setScore(newScore);

    const newUsedCharacters = [...usedCharacters, personagem.id];
    setUsedCharacters(newUsedCharacters);

    setPersonagem(null);
  }

  function returnRandomNumber() {
    const randomNumber = Math.floor(Math.random() * totalPersonagens) + 1;
    if (usedCharacters.includes(randomNumber)) {
      return returnRandomNumber();
    }
    return randomNumber;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rick and Morty Game</Text>
      <Text style={styles.subtitle}>Você sabe se o personagem está vivo?</Text>
      {personagem && (
        <View>
          <Image
            source={{ uri: personagem.image }}
            style={{ width: 200, height: 200, marginBottom: 20 }}
          />
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            O/A personagem {personagem.name} está vivo?
          </Text>
          <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 20 }}>
            <Button
              mode="contained"
              onPress={() => handlePersonagemVivoOuMorto(true)}
              style={{marginRight: 10}}
            >
              SIM
            </Button>
            <Button
              mode="contained"
              onPress={() => handlePersonagemVivoOuMorto(false)}
            >
              NÃO
            </Button>
          </View>
        </View>
      )}
        <Portal>
        <Modal visible={!personagem} onDismiss={() => setPersonagem({})}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Resultado</Text>
            <Text style={styles.modalText}>Você acertou {score} de {usedCharacters.length} personagens</Text>
            <Text style={styles.modalText}>Você errou {score} de {usedCharacters.length} personagens</Text>
            <br></br><br></br>
            <Button marginBottom="100" mode="contained" onPress={() => setPersonagem({})}>Jogar Novamente</Button>
          </View>
        </Modal>
        </Portal>
    </View>
  );
}
