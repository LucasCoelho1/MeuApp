import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import LolScreen from "./screens/LolScreen";
import SkinScreen from "./screens/SkinScreen";

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
                <Stack.Screen 
                name="LolScreen"
                 component={LolScreen}
                options={{
                    title:"Tela Lolo",
                }} 
                />
                <Stack.Screen 
                name="SkinScreen"
                 component={SkinScreen}
                options={{
                    title:"Tela Skins",
                }} 
                />
                <Stack.Screen 
                name="LoginScreen"
                 component={LoginScreen}
                options={{
                    title:"Tela de login",
                }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}