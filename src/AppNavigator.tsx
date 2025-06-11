import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import FormScreen from "./screens/FormScreen";
import LoginScreen from "./screens/LoginScreen";
import { CustomDrawerContent } from "./components/CustomDrawerContent"; // <== importa teu menu

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: "#0a1967" },
          headerTintColor: "#fff",
          drawerActiveTintColor: "#0a1967",
          drawerLabelStyle: { fontSize: 16 },
        }}
      >
        {/* Telas visíveis no menu */}
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Form" component={FormScreen} options={{ title: "Form" }}  />

        {/* Tela de Login não aparece no menu, só pra redirecionamento */}
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{ drawerItemStyle: { display: "none" }, headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
