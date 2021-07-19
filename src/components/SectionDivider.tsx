import { Divider, Box, Heading, useColorModeValue } from "@chakra-ui/react";

interface SectionDividerProps {
  sectionName: String;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  sectionName,
}) => {
  const SwitchColor = useColorModeValue("#404040", "white");
  
  return (
    <Box my={12} textAlign="center">
      <Heading mb={4} color={SwitchColor}>
        {sectionName}
      </Heading>
      <Divider color={SwitchColor}/>
    </Box>
  );
};
