import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const Introduction = () => {
  return (
    <Flex textAlign="center" mt={16} justifyContent="center">
      <Box width="75%">
        <Heading mb={4}>Quick About Me</Heading>
        <Text fontWeight="semibold">
          Due to COVID-19 and wanting to pursue a career in tech independently,
          I dropped out of community college back in 2020. Since then, I've
          built many projects, completed a WozU .NET bootcamp, a full stack MERN
          bootcamp offered by NuCamp, and spent time exploring various
          languages.
        </Text>
        <br />
        <Text fontWeight="semibold">
          When I'm not coding, you can find me gaming / streaming, drawing,
          cooking, finding ways to improve myself, and watching the Harry Potter
          series for the millionth time!
        </Text>
      </Box>
    </Flex>
  );
};
