import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import styles from "../utils/styles";

export default function RickMorty() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((dataJson) => setData(dataJson.results))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ScrollView>

      {data.map((item) => (
        <Card key={item.name}>
          <Card.Title>{item.name}</Card.Title>
          <Card.Content>
            <Title>{item.species}</Title>
            <Paragraph>{item.status}</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: item.image }} />
        </Card>
      ))}
    </ScrollView>
  );
}
