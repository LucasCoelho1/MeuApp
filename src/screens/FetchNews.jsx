import { useState } from "react";
import { useEffect } from "react";
import { Image, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../utils/styles";

export default function FetchNews() {
  const [data, setData] = useState([]);

  function fetchNewsData() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json()) // transforma a informação em JSON
      .then((json) => setData(json)) // mostra o resultado no console em JSON
      .catch((error) => console.error(error)); // mostra o erro no console
  }

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: "30px", fontWeight: "bold", margin: "10px" }}>
          API Rick and Morty
        </Text>
        {data.results?.map((item) => (
          <Text style={{ fontSize: "20px", fontFamily:"Georgia"}} key={item.id}>
            <View style={styles.Fetchnews}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 300, border: "2px solid white", height: 300 }}
              />
              <View style={{ alignItems: "center", marginTop: 20 }}>
                {item.name}
              </View>
              <View style={{ alignItems: "center" }}>{item.status}</View>
              <View style={{ alignItems: "center" }}>{item.species}</View>
              <View style={{ alignItems: "center" }}>{item.gender}</View>
            </View>
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}
