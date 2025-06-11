import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import ItemForm from "../components/ItemForm";

export default function FormScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const item = (route.params as any)?.item;

  return (
    <ItemForm
      defaultValues={item}
      onFinish={() => navigation.goBack()}
    />
  );
}
