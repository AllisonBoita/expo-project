import {
  Box,
  Button,
  ButtonText,
  Input,
  InputField,
  Text,
  Toast,
  useToast,
  VStack,
} from "@gluestack-ui/themed";
import React, { useState } from "react";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const toast = useToast();

  const showToast = (msg: string) =>
    toast.show({
      placement: "top",
      render: () => (
        <Toast bgColor="$red600" p="$3" borderRadius="$md">
          <Text color="$white">{msg}</Text>
        </Toast>
      ),
    });

  const handleLogin = () => {
    if (!email || !senha) {
      return showToast("Preencha todos os campos");
    }

    if (email === "admin" && senha === "123") {
      navigation.reset({
        index: 0,
        routes: [{ name: "Main" }],
      });
    } else {
      showToast("E-mail ou senha inválidos");
    }
  };

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      bg="$coolGray100"
      px="$6"
    >
      <VStack width="100%" maxWidth={400} space="lg">
        <Text
          fontSize="$2xl"
          fontWeight="bold"
          color="$blue700"
          textAlign="center"
        >
          Bem-vindo de volta
        </Text>

        <Input>
          <InputField
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </Input>

        <Input>
          <InputField
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
        </Input>

        <Button
          bg="$blue600"
          borderRadius="$xl"
          onPress={handleLogin}
          isDisabled={!email || !senha}
        >
          <ButtonText color="$white" fontWeight="bold">Entrar</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
