import {
  Box,
  Button,
  ButtonText,
  Image,
  Input,
  InputField,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import uuid from "react-native-uuid";
import { addItem, updateItem } from "../storage/items";

export default function ItemForm({ defaultValues, onFinish }: any) {
  const [title, setTitle] = useState(defaultValues?.title || "");
  const [description, setDescription] = useState(defaultValues?.description || "");
  const [photo, setPhoto] = useState(defaultValues?.photo || "");

  useEffect(() => {
    if (!defaultValues) {
      setTitle("");
      setDescription("");
      setPhoto("");
    }
  }, [defaultValues]);

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.6,
    });
    if (!result.canceled && result.assets?.[0].uri) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    if (!title.trim()) return alert("Preencha o título!");
    const item = {
      id: defaultValues?.id || uuid.v4(),
      title,
      description,
      photo,
    };

    if (defaultValues) {
      await updateItem(item);
    } else {
      await addItem(item);
    }

    onFinish();
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView bg="$white">
        <VStack space="lg" p="$5" mt="$4">
          <Box>
            <Text size="sm" color="$coolGray500" mb="$1">Título</Text>
            <Input>
              <InputField
                placeholder="Digite o título"
                value={title}
                onChangeText={setTitle}
              />
            </Input>
          </Box>

          <Box>
            <Text size="sm" color="$coolGray500" mb="$1">Descrição</Text>
            <Input>
              <InputField
                placeholder="Digite a descrição"
                value={description}
                onChangeText={setDescription}
              />
            </Input>
          </Box>

          {photo && (
            <Image
              source={{ uri: photo }}
              alt="Foto"
              style={{
                width: "100%",
                height: 180,
                borderRadius: 12,
              }}
            />
          )}

          <Button bgColor="$blue600" borderRadius="$xl" onPress={pickImage}>
            <ButtonText color="$white">Tirar Foto</ButtonText>
          </Button>

          <Button
            bgColor={defaultValues ? "$amber600" : "$green600"}
            borderRadius="$xl"
            onPress={handleSubmit}
          >
            <ButtonText color="$white">
              {defaultValues ? "Atualizar" : "Registrar"}
            </ButtonText>
          </Button>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
