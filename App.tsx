import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import React from "react";
import AppNavigator from "./src/AppNavigator";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <AppNavigator />
    </GluestackUIProvider>
  );
}
