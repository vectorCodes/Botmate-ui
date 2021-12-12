import React from "react";
import { Box, Text, Center, HStack } from "@chakra-ui/react";
import { SiSpeedtest } from "react-icons/si";
import { FiDatabase } from "react-icons/fi";
import { BiPlug, BiLineChart } from "react-icons/bi";
import { RiCodeView } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
function Nextcontent() {
  return (
    <Box bg="#112031">
      <Box m="0 auto" w="6xl" py={36}>
        <Center fontWeight="bold" fontSize="xl" textColor="gray.300">
          <Text>FEATURES</Text>
        </Center>
        <Center fontWeight="bold" fontSize="5xl" textColor="white" pl={4}>
          <Text>Go beyond the limits, build what you could not.</Text>
        </Center>
        <Center
          fontWeight="bold"
          fontSize="2xl"
          textColor="gray.300"
          pl={4}
          mt={4}
        >
          <Text>
            Our platform is built on top of the most advanced technologies in
            the industry.
          </Text>
        </Center>
        <Center>
          <HStack mt={20} spacing={4}>
            <Box h="200px" w="380px" rounded="20" bg="blackAlpha.800">
              <Box p={12}>
                <Box textColor="purple.400" fontSize="3xl">
                  <SiSpeedtest />
                </Box>
                <Box textColor=" white" fontWeight="bold" fontSize="3xl" mt={2}>
                  <Text>Built for speed</Text>
                </Box>
                <Box textColor="gray.400" fontWeight="semibold">
                  <Text>Synchronized in real-time across all users.</Text>
                </Box>
              </Box>
            </Box>
            <Box h="200px" w="380px" rounded="20" bg="blackAlpha.800">
              <Box p={12}>
                <Box textColor="purple.400" fontSize="3xl">
                  <FiDatabase />
                </Box>
                <Box textColor=" white" fontWeight="bold" fontSize="3xl" mt={2}>
                  <Text> cloud based</Text>
                </Box>
                <Box textColor="gray.400" fontWeight="semibold">
                  <Text>
                    You bots are hosted on our 24/7 online cloud infrastructure.
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box h="200px" w="380px" rounded="20" bg="blackAlpha.800">
              <Box p={12}>
                <Box textColor="purple.400" fontSize="3xl">
                  <BiPlug />
                </Box>
                <Box textColor=" white" fontWeight="bold" fontSize="3xl" mt={2}>
                  <Text>Plugins</Text>
                </Box>
                <Box textColor="gray.400" fontWeight="semibold">
                  <Text>
                    Install and use plugins to extend the functionality of your
                    bot.
                  </Text>
                </Box>
              </Box>
            </Box>
          </HStack>
        </Center>
        <Center>
          <HStack mt={20} spacing={4} mt={4}>
            <Box h="200px" w="380px" rounded="20" bg="blackAlpha.800">
              <Box p={12}>
                <Box textColor="purple.400" fontSize="3xl">
                  <BiLineChart />
                </Box>
                <Box textColor=" white" fontWeight="bold" fontSize="3xl" mt={2}>
                  <Text>Analytics</Text>
                </Box>
                <Box textColor="gray.400" fontWeight="semibold">
                  <Text>
                    Track your bot's performance, and see how it's doing.
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box h="200px" w="380px" rounded="20" bg="blackAlpha.800">
              <Box p={12}>
                <Box textColor="purple.400" fontSize="3xl">
                  <RiCodeView />
                </Box>
                <Box textColor=" white" fontWeight="bold" fontSize="3xl" mt={2}>
                  <Text>BMS</Text>
                </Box>
                <Box textColor="gray.400" fontWeight="semibold">
                  <Text>
                    Take your bot even further with custom BotMate Script.
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box h="200px" w="380px" rounded="20" bg="blackAlpha.800">
              <Box p={12}>
                <Box textColor="purple.400" fontSize="3xl">
                  <FaGithub />
                </Box>
                <Box textColor=" white" fontWeight="bold" fontSize="2xl" mt={2}>
                  <Text>GitHub Integration</Text>
                </Box>
                <Box textColor="gray.400" fontWeight="semibold">
                  <Text>Integrate your bot with GitHub for live updates.</Text>
                </Box>
              </Box>
            </Box>
          </HStack>
        </Center>
      </Box>
    </Box>
  );
}

export default Nextcontent;
