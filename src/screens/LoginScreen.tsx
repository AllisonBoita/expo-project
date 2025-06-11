import {
  Box,
  VStack,
  Input,
  InputField,
  Button,
  ButtonText,
  Text,
  useToast,
  Toast,
} from "@gluestack-ui/themed";
import React, { useState } from "react";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    if (!email || !senha) {
      toast.show({
        placement: "top",
        render: () => {
          return (
            <Toast bgColor="$red600" p="$3" borderRadius="$md">
              <Text color="$white">Preencha todos os campos</Text>
            </Toast>
          );
        },
      });
      return;
    }

    // mock de login (validação fake)
    if (email === "admin" && senha === "123") {
      navigation.reset({
  index: 0,
  routes: [{ name: "Home" }],
}); // troca de tela (sem voltar ao login)
    } else {
      toast.show({
        placement: "top",
        render: () => (
          <Toast bgColor="$red600" p="$3" borderRadius="$md">
            <Text color="$white">E-mail ou senha inválidos</Text>
          </Toast>
        ),
      });
    }
  };

  return (
    <Box flex={1} bg="$coolGray100" _dark={{ bg: "$coolGray900" }} justifyContent="center" px="$6">
      <VStack space="lg">
        <Text fontSize="$2xl" fontWeight="bold" color="$blue700" _dark={{ color: "$blue300" }}>
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

        <Button bg="$blue600" _dark={{ bg: "$blue400" }} borderRadius="$xl" onPress={handleLogin}>
          <ButtonText color="$white" fontWeight="bold">Entrar</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
