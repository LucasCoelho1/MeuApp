import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="HomeScreen"
                 component={HomeScreen}
                 options={{
                    title:"Tela Inicial",
                }} 
                />
                <Stack.Screen 
                name="AboutScreen"
                 component={AboutScreen}
                options={{
                    title:"Tela Inicial",
                }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}