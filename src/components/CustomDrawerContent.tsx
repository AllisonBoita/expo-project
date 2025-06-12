import { Box, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from "../types/navigation";

export function CustomDrawerContent(props: any) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <VStack px="$4" mt="$4">
        <Pressable
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "Login" }],
            });
          }}
        >
          <Box
            py="$3"
            px="$4"
            borderRadius="$lg"
            bg="$red600"
          >
            <Text color="$white" fontWeight="bold" textAlign="center">
              Sair
            </Text>
          </Box>
        </Pressable>
      </VStack>
    </DrawerContentScrollView>
  );
}
