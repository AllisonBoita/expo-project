import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent } from "./components/CustomDrawerContent";
import FormScreen from "./screens/FormScreen";
import HomeScreen from "./screens/HomeScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: "#0a1967" },
        headerTintColor: "#fff",
        drawerActiveTintColor: "#0a1967",
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Form" component={FormScreen} />
    </Drawer.Navigator>
  );
}
