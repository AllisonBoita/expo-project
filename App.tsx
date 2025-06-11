import 'react-native-gesture-handler';
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import AppNavigator from "./src/AppNavigator";



export default function App() {
  return (
    <GluestackUIProvider config={config} colorMode="system">

      <AppNavigator />
    </GluestackUIProvider>
  );
}
