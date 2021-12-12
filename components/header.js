import React from "react";
import {
  Box,
  Text,
  HStack,
  Button,
  ButtonGroup,
  Image,
  chakra,
  Center,
} from "@chakra-ui/react";

function header() {
  return (
    <Box bg="blackAlpha.900" h="100vh">
      <HStack justifyContent="space-evenly" pt={4} ml={12}>
        <Image
          boxSize="30px"
          src="https://botmate.app/logo.png"
          alt="botmate"
        />

        <HStack
          textColor="gray.400"
          spacing={4}
          fontSize="md"
          fontWeight="semibold"
          cursor="pointer"
        >
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Contact</Text>
          <Text>Support</Text>
        </HStack>
        <ButtonGroup colorScheme="purple" fontSize="md">
          <Button>Login</Button>
          <Button
            variant="ghost"
            textColor="white"
            _hover={{
              bg: "black",
              textColor: "white",
            }}
          >
            Sign up
          </Button>
        </ButtonGroup>
      </HStack>
      <Box
        m="0 auto"
        maxW="5xl"
        textAlign="center"
        py={32}
        fontWeight="bold"
        pb={4}
      >
        <Text textColor="white" fontSize="7xl">
          Modern <chakra.span textColor="#516BEB">Telegram </chakra.span>
          Bot platform
        </Text>
      </Box>
      <Box m="0 auto" py={2} maxW="3xl">
        <Text textColor="gray.500" textAlign="center" fontSize="2xl">
          BotMate helps you build Telegram bots with ease and speed. It comes
          with tons of plugins which can you can install in your bots.
        </Text>
      </Box>
      <Box py={12}>
        <Center>
          <Button colorScheme="purple" w="150px" fontWeight="semibold">
            Get in
          </Button>
        </Center>
      </Box>
    </Box>
  );
}

export default header;
