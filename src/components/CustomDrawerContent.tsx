import { useNavigation } from "@react-navigation/native";
import { DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import { VStack, Box, Text, Pressable } from "@gluestack-ui/themed";

export function CustomDrawerContent(props: any) {
  const navigation = useNavigation();
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
            _dark={{ bg: "$red500" }}
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
