import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  Heading,
  Input,
  Icon,
  HStack,
  VStack,
  WarningOutlineIcon,
  Image,
  Switch,
  useColorMode,
  Text,
} from "native-base";

export default function SignIn() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center height="full" _dark={{ bg: "black" }} _light={{ bg: "white" }}>
      <Image
        source={{ uri: "https://github.com/rocketseat.png" }}
        size={150}
        alt="Foto do usuário"
        resizeMode="contain"
      />
      <VStack width="full" p={5}>
        <Box width="full">
          <Heading
            color="coolGray.700"
            _dark={{ color: "white" }}
            _light={{ color: "white" }}
          >
            Entrar
          </Heading>

          <FormControl isInvalid isRequired>
            <FormControl.Label>E-mail</FormControl.Label>
            <Input
              placeholder="seu@email.com.br"
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml={2}
                  color="muted.400"
                />
              }
            />
            <FormControl.HelperText>
              Você precisa digitar o e-mail cadastrado
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Digite o email corretamente
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              placeholder="Sua senha"
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="lock" />}
                  size={5}
                  ml={2}
                  color="muted.400"
                />
              }
            />
            <FormControl.HelperText>
              Você precisa digitar sua senha
            </FormControl.HelperText>
            <FormControl.ErrorMessage>
              Digite a senha corretamente
            </FormControl.ErrorMessage>
          </FormControl>
          <Button mt="7" colorScheme="purple">
            Entrar
          </Button>
        </Box>

        <HStack mt={4}>
          <Checkbox value="agree">
            Concordo com a politica de segurança
          </Checkbox>
        </HStack>

        <HStack mt={5}>
          <Text>Dark</Text>
          <Switch
            isChecked={colorMode === "light"}
            onToggle={toggleColorMode}
            aria-label={
              colorMode === "light"
                ? "troque para o tema escuro"
                : "toque para o tema claro"
            }
          />
          <Text>Light</Text>
        </HStack>
      </VStack>
    </Center>
  );
}
