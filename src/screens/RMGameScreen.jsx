import { useEffect, useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";


export default function RMGameScreen() {
  const [personagem, setPersonagem] = useState(null);
    const [personagens, setPersonagens] = useState([]);
    const [ totalPersonagens, setTotalPersonagens ] = useState(0);    

  // Vamos criar um jogo de Quiz baseado na API do Rick and Morty
  // Vamos criar um componente que vai ser responsavel por renderizador as perguntas

    useEffect(() => {
        retornaTotalDePersonagens();
    }, [])

  function buscaPersonagemAleatorio() {
    fetch("https://rickandmortyapi.com/api/character/" + retornoIndiceAleatorio())
      .then((response) => response.json())
      .then((Json) => {
        setPersonagem(Json);
        })
    }

    function retornaTotalDePersonagens() {
        fetch("https://rickandmortyapi.com/api/character/")
        .then((response) => response.json())
        .then((Json) => {
            setTotalPersonagens(Json.info.count);
        })
        };
        
        function retornoIndiceAleatorio() {
            return Math.floor(Math.random() * totalPersonagens);
        }

        function checkIfPersonagemEstaVivo(){
            if(personagem?.status === "Alive"){
                alert("Você acertou!");
            } else {
                alert("Você errou!");
            }
        }
  
  return ( <View style={styles.container}>
 <Image source={{uri: personagem?.image}} />
 <Text>Personagem: {personagem?.name}</Text>
    <View>
    <Button onePress={() => checkIfPersonagemEstaVivo()}>Sim</Button>
    <Button onePress={() => checkIfPersonagemEstaVivo()}>Não</Button>
    </View>
    <Button onePress={() => buscaPersonagemAleatorio()}>Próximo</Button>
    </View>
    )

  
}