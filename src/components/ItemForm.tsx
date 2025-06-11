import { Button, ButtonText, Image, Input, InputField, VStack } from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import uuid from "react-native-uuid";
import { addItem, updateItem } from "../storage/items";

export default function ItemForm({ defaultValues, onFinish }: any) {
  const [title, setTitle] = useState(defaultValues?.title || "");
  const [description, setDescription] = useState(defaultValues?.description || "");
  const [photo, setPhoto] = useState(defaultValues?.photo || "");

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
    if (defaultValues) await updateItem(item);
    else await addItem(item);
    onFinish();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
    <VStack space="md" p={4}>
      <Input>
  <InputField
    placeholder="Título"
    value={title}
    onChangeText={setTitle}
  />
</Input>

<Input mt="$2">
  <InputField
    placeholder="Descrição"
    value={description}
    onChangeText={setDescription}
  />
</Input>
      {photo && <Image source={{ uri: photo }} alt="Foto" style={{ width: "100%", height: 160, borderRadius: 12 }} />}
      <Button onPress={pickImage}>
  <ButtonText>Tirar Foto</ButtonText>
</Button>

<Button onPress={handleSubmit}>
  <ButtonText>{defaultValues ? "Atualizar" : "Registrar"}</ButtonText>
</Button>
    </VStack>
    </SafeAreaView>
  );


}
