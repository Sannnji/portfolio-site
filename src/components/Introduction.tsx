import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const Introduction = () => {
  return (
    <Flex textAlign="center" mt={16} justifyContent="center">
      <Box width="75%">
        <Heading mb={4}>Quick About Me</Heading>
        <Text fontWeight="semibold">
          Due to how the accessibility of education and information has changed
          and grown. I dropped out of college in the winter of 2019 to pursue my
          developer career independently. Since then, I've completed a udemy
          course on full stack web development, a full stack web mobile bootcamp
          offered by NuCamp, and spent time exploring Java, Flutter and Python.
        </Text>
        <br />
        <Text fontWeight="semibold">
          When I'm not coding, you can find me gaming / streaming, drawing,
          cooking, finding ways to improve myself, and watching the Harry Potter
          series for the millionth time
        </Text>
      </Box>
    </Flex>
  );
};
