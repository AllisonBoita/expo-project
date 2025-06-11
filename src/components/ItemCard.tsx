import { Box, Button, ButtonText, HStack, Image, Text, VStack } from "@gluestack-ui/themed";
import React from "react";

export default function ItemCard({ item, onEdit, onDelete }: any) {
  return (
    <Box
      bg="$white"
      borderRadius="$xl"
        borderWidth={1}

  borderColor="$lightGray"
      p="$4"
      mb="$4"
      shadowColor="#000"
      shadowOffset={{ width: 0, height: 1 }}
      shadowOpacity={0.3}
      shadowRadius={3}
      elevation={3}
    >
      {item.photo && (
        <Image
          source={{ uri: item.photo }}
          alt="Foto"
          style={{
            width: "100%",
            height: 160,
            borderRadius: 12,
            marginBottom: 12,
          }}
        />
      )}

      <VStack space="sm">
        <Text size="lg" fontWeight="bold" color="$blue900">
          {item.title}
        </Text>

        <Text size="sm" color="$coolGray600">
          {item.description}
        </Text>

        <HStack space="md" mt="$3">
          <Button
            variant="outline"
            borderColor="$blue600"
            onPress={onEdit}
            borderRadius="$lg"
            size="sm"
          >
            <ButtonText color="$blue600">Editar</ButtonText>
          </Button>

          <Button
            action="negative"
            bg="$red600"
            borderRadius="$lg"
            size="sm"
            onPress={onDelete}
          >
            <ButtonText color="$white">Excluir</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
