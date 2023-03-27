import { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../utils/styles";

export default function FetchNews() {
    function FetchNewsData() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => console.error(error));

    }
    useEffect(() => {
        FetchNewsData();
        }, []);

        return (
            <View style={styles.container}>
                <Text>Essa é a tela de noticias</Text>
            </View>
        );
    }
