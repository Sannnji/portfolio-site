import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const Introduction = () => {
  return (
    <Flex textAlign="center" mt={16} justifyContent="center">
      <Box width="75%">
        <Heading>Hello world, I'm James!</Heading>
        <Text>
          I dropped out of college in 2019 to pursue a developer career on my
          own, as I was never a fan of the tradition education system. More
          importantly it didn't seem like a skill I couldn't learn on my own.
          Not only that, but It also seemed like a financially smart idea. So,
          after fighting through a ton of external criticism, imposter syndrome
          and COVID-19. I hereby bring you James' Portfolio!!
        </Text>
      </Box>
    </Flex>
  );
};
