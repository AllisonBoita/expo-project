import { Button, ButtonText, Text, VStack } from "@gluestack-ui/themed";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import ItemCard from "../components/ItemCard";
import { getItems, removeItem } from "../storage/items";

export default function HomeScreen({ navigation }: any) {
  const [items, setItems] = useState([]);
  const isFocused = useIsFocused();

  const load = async () => setItems(await getItems());

  useEffect(() => {
    if (isFocused) load();
  }, [isFocused]);

  const handleDelete = async (id: string) => {
    Alert.alert("Excluir", "Tem certeza?", [
      { text: "Cancelar" },
      {
        text: "Excluir",
        onPress: async () => {
          await removeItem(id);
          load();
        },
        style: "destructive",
      },
    ]);
  };

  return (
    <VStack space="md" p={4} flex={1}>
      <Button onPress={() => navigation.navigate("Form")}><ButtonText>Novo Item</ButtonText></Button>
      <FlatList
        data={items}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <ItemCard
            item={item}
            onEdit={() => navigation.navigate("Form", { item })}
            onDelete={() => handleDelete(item.id)}
          />
        )}
        ListEmptyComponent={<Text>Nenhum item</Text>}
      />
    </VStack>
  );
}
