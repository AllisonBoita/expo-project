import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ItemForm from "../components/ItemForm";

export default function FormScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const item = (route.params as any)?.item;

  return (
    <SafeAreaView style={styles.container}>
      <ItemForm
        defaultValues={item}
        onFinish={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
