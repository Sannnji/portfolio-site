import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

interface SkillCardProps {
  favicon: string;
  skillName: string;
  text1: string;
  iKnow: string;
  text2: string;
  iKnowlil: string; 
  text3: string;

}

const SkillCard: React.FC<SkillCardProps> = ({
  skillName,
  favicon,
  text1,
  iKnow,
  text2,
  iKnowlil,
  text3
}) => {
  const SwitchColor = useColorModeValue("primary", "primary");

  return (
    <Box
      p={12}
      bg={SwitchColor}
      color="#404040"
      borderRadius="lg"
      textAlign="center"
      mx="15px"
      my="15px"
      width={{base: "auto", md: "50%"}}
      maxW={{base: "auto", md: "525px"}}
      boxShadow="dark-lg"
    >
      <Text as="i" fontSize="48px" color="#4FD1C5" className={favicon} />
      <Heading mt={4} mb={6}>{skillName}</Heading>
      <Text>{text1}</Text>
      <Heading mt={6} mb={6} color="#4FD1C5">{iKnow}</Heading>
      <Text>{text2}</Text>
      <Heading mt={6} mb={6} color="#4FD1C5">{iKnowlil}</Heading>
      <Text>{text3}</Text>
    </Box>
  );
};

export default SkillCard;
