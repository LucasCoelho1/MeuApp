import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import LolScreen from "./screens/LolScreen";
import RegisterScreen from "./screens/RegisterSreen";
import SkinScreen from "./screens/SkinScreen";
import SplashScreen from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <tabs.Navigator>
      <tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Tela inicial",
        }}
      />
      <tabs.Screen
        name="About"
        component={AboutScreen}
        options={{ tabBarLabel: "Tela about" }}
      />
      <tabs.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ tabBarLabel: "Tela do Lol" }}
      />
      <tabs.Screen
        name="Lol"
        component={LolScreen}
        options={{ tabBarLabel: "Tela do Lol" }}
      />
      <tabs.Screen
        name="Skin"
        component={SkinScreen}
        options={{ tabBarLabel: "Tela Skins" }}
      />
    </tabs.Navigator>
  );
}
