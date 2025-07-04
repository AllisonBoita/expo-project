import {
  Box,
  Button,
  ButtonText,
  FlatList,
  HStack,
  Text,
  VStack
} from "@gluestack-ui/themed";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
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
    <Box flex={1} bg="$white">
  <VStack space="lg" p="$4" flex={1}>
    <HStack justifyContent="center" alignItems="center" mb="$2">
  <Text
    fontSize="$xl"
    fontWeight="bold"
    color="$blue600"
  >
    Meus Itens
  </Text>
</HStack>


    <FlatList
      contentContainerStyle={{ gap: 12, paddingBottom: 100 }}
      data={items}
      keyExtractor={(item: any) => item.id}
      renderItem={({ item }: any) => (
        <ItemCard
          item={item}
          onEdit={() => navigation.navigate("Form", { item })}
          onDelete={() => handleDelete(item.id)}
        />
      )}
      ListEmptyComponent={
        <Text
          textAlign="center"
          mt="$8"
          fontSize="$md"
          color="$coolGray500"
        >
          Nenhum item encontrado
        </Text>
      }
    />
  </VStack>

  <Box
    position="absolute"
    bottom={60}
    left={0}
    right={0}
    alignItems="center"
  >
    <Button
      borderRadius="$2xl"
      size="lg"
      bg="$blue600"
      onPress={() => navigation.navigate("Form")}
      width={200}
    >
      <ButtonText color="$white" fontWeight="bold">+ Novo</ButtonText>
    </Button>
  </Box>
</Box>

  );
}
