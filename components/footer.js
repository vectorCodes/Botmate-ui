import React from "react";
import { Box, Text, Image, HStack, VStack } from "@chakra-ui/react";
function Footer() {
  return (
    <Box bg="blackAlpha.900" w="full">
      <Box py={10} px={24}>
        <HStack justifyContent="space-evenly">
          <VStack spacing={5}>
            <Image
              boxSize="50px"
              src="https://botmate.app/logo.png"
              alt="botmate"
            />

            <Text textColor="gray.400">Botmate</Text>
          </VStack>
          <HStack spacing={6} textColor="gray.400">
            <Box>
              <Text>Help</Text>
            </Box>
            <Box>
              <Text>Privacy</Text>
            </Box>
            <Box>
              <Text>Terms of Service</Text>
            </Box>
            <Box>
              <Text>Cntact</Text>
            </Box>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
}

export default Footer;
