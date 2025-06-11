import { Box, Button, ButtonText, HStack, Image, Text, VStack } from "@gluestack-ui/themed";
import React from "react";

export default function ItemCard({ item, onEdit, onDelete }: any) {
  return (
    <Box borderWidth={1} borderRadius={12} p={4} mb={3}>
      {item.photo && (
        <Image
          source={{ uri: item.photo }}
          alt="Foto"
          style={{ width: "100%", height: 160, borderRadius: 12 }}
        />
      )}
      <VStack space="xs" mt={2}>
        <Text size="md" bold>{item.title}</Text>
        <Text size="sm">{item.description}</Text>
        <HStack space="md" mt={2}>
          <Button variant="outline" size="sm" onPress={onEdit}><ButtonText>Editar</ButtonText></Button>
          <Button variant="solid" size="sm" action="negative" onPress={onDelete}><ButtonText>Excluir</ButtonText></Button>
        </HStack>
      </VStack>
    </Box>
  );
}
