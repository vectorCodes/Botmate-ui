import React from "react";
import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Image,
  Divider,
} from "@chakra-ui/react";
function Thirdcontent() {
  return (
    <Box bg="blackAlpha.900">
      <Box p={28}>
        <SimpleGrid columns={2} px={20} spacing={40}>
          <Box maxW="xl">
            <Text
              fontSize="7xl"
              fontWeight="bold"
              textColor="white"
              lineHeight="1.1"
            >
              Interface,
              <div />
              streamlined.
            </Text>
            <Text textColor="white" fontWeight="semibold" fontSize="2xl" mt={6}>
              Robust. Fast to navigate. Easy to use. Accessiable to everyone.
            </Text>
            <Text textColor="white" fontWeight="semibold" fontSize="2xl" mt={4}>
              Appearance. Change the theme of the dashboard to feel and look
              better.
            </Text>
          </Box>

          <Box
            bgGradient="linear(to-b , orange.400, yellow.400)"
            position="relative"
            rounded="15"
          >
            <Image
              src="https://blog.trello.com/hubfs/DashboardFinal.png"
              alt=""
              h="full"
              position="absolute"
              left="-4"
              bottom="-4"
              rounded="15"
            />
          </Box>
        </SimpleGrid>
        <Divider my={12} color="gray.700" />
        <SimpleGrid columns={2} px={20} spacing={28} mt={16}>
          <Box
            bgGradient="linear(to-l ,green.500, blackAlpha.900)"
            position="relative"
            rounded="15"
          >
            <Image
              src="https://blog.trello.com/hubfs/DashboardFinal.png"
              alt=""
              h="full"
              position="absolute"
              left="-4"
              bottom="-4"
              rounded="15"
            />
          </Box>
          <Box maxW="xl">
            <Text
              fontSize="7xl"
              fontWeight="bold"
              textColor="white"
              lineHeight="1.1"
            >
              Analytics,
              <div />
              tracked.
            </Text>
            <Text textColor="white" fontWeight="semibold" fontSize="2xl" mt={6}>
              Commands. Track each commands usage.
            </Text>
            <Text textColor="white" fontWeight="semibold" fontSize="2xl" mt={4}>
              Messages. Count how much msgs your bots get every day.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Thirdcontent;
