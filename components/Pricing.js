import React from "react";
import {
  Box,
  Text,
  Center,
  SimpleGrid,
  chakra,
  HStack,
  Button,
} from "@chakra-ui/react";
import { TiTick } from "react-icons/ti";

const benefits = [
  {
    title: "10,000 messages per month",
    icon: <TiTick />,
  },
  {
    title: "5 second timeout",
    icon: <TiTick />,
  },
  {
    title: "1000 HTTP requests per day",
    icon: <TiTick />,
  },
  {
    title: "500+ group members",
    icon: <TiTick />,
  },
  {
    title: "3 months of analytics",
    icon: <TiTick />,
  },
  {
    title: "Unlimited bots",
    icon: <TiTick />,
  },
];

const benefits2 = [
  {
    title: "Unlimited messages per month",
    icon: <TiTick />,
  },
  {
    title: "20 seconds timeout",
    icon: <TiTick />,
  },
  {
    title: "10,000 HTTP requests per day",
    icon: <TiTick />,
  },
  {
    title: "5000+ group members",
    icon: <TiTick />,
  },
  {
    title: "6 months of analytics",
    icon: <TiTick />,
  },
  {
    title: "Unlimited bots",
    icon: <TiTick />,
  },
];

function Pricing() {
  return (
    <Box bg="#112031">
      <Center>
        <Text textColor="gray.400" fontSize="2xl" fontWeight="semibold" mt={40}>
          Pricing
        </Text>
      </Center>
      <Center>
        <Text textColor="white" fontSize="5xl" fontWeight="bold">
          The right price for you, whoever you are
        </Text>
      </Center>
      <Center>
        <Text textColor="gray.500" fontSize="lg" fontWeight="semibold">
          We have made our pricing so much cheaper that literally anyone can get
          started.
        </Text>
      </Center>

      <Box m="0 auto" maxW="7xl" mt={6}>
        <SimpleGrid columns={2}>
          <Box p={12} bg="blackAlpha.800" w="600px" rounded="10">
            <Box>
              <Center
                textColor="purple.600"
                h="30px"
                w="70px"
                bg="#112031"
                rounded="12"
                fontSize="md"
              >
                <Text mt={1}>Basic</Text>
              </Center>
            </Box>
            <Box mt={4}>
              <Text textColor="white" fontSize="6xl">
                $0.99 {""}
                <chakra.span textColor="gray.500" fontSize="4xl">
                  /mo
                </chakra.span>
              </Text>
            </Box>
            <Box>
              <Text textColor="gray.400">
                Nulla eu ullamco esse dolor occaecat dolore non voluptate irure
                ex commodo. Irure cillum velit elit elit in non eiusmod aute.
              </Text>
            </Box>

            {benefits.map((benefit) => {
              return (
                <HStack spacing={2} mt={6}>
                  <Box textColor="purple.500" fontSize="4xl">
                    {benefit.icon}
                  </Box>
                  <Text textColor="gray.400" py={1} fontSize="1xl">
                    {benefit.title}
                  </Text>
                </HStack>
              );
            })}
            <Button
              colorScheme="gray"
              w="500px"
              textColor="gray.400"
              fontWeight="bold"
              fontSize="2xl"
              mt={5}
            >
              Get started
            </Button>
          </Box>
          <Box p={10} bg="blackAlpha.800" w="600px" rounded="10">
            <Box>
              <Center
                textColor="purple.600"
                h="30px"
                w="85px"
                bg="#112031"
                rounded="12"
                fontSize="md"
              >
                <Text mt={1}>Standard</Text>
              </Center>
            </Box>
            <Box mt={4}>
              <Text textColor="white" fontSize="6xl">
                $4.99 {""}
                <chakra.span textColor="gray.500" fontSize="4xl">
                  /mo
                </chakra.span>
              </Text>
            </Box>
            <Box>
              <Text textColor="gray.400">
                Aliquip exercitation eu ut labore tempor laborum tempor
                consequat ipsum pariatur aliquip. Ipsum do enim consequat cillum
                aliqua do et minim.
              </Text>
            </Box>
            {benefits2.map((benefit) => {
              return (
                <HStack spacing={2} mt={6}>
                  <Box textColor="purple.500" fontSize="4xl">
                    {benefit.icon}
                  </Box>
                  <Text textColor="gray.400" py={1} fontSize="1xl">
                    {benefit.title}
                  </Text>
                </HStack>
              );
            })}
            <Button
              colorScheme="gray"
              w="500px"
              textColor="gray.400"
              fontWeight="bold"
              fontSize="2xl"
              mt={7}
            >
              Get started
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Pricing;
