import { Divider, Box, Heading, useColorModeValue } from "@chakra-ui/react";

interface SectionDividerProps {
  sectionName: string;
  id: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  sectionName,
  id,
}) => {
  const SwitchColor = useColorModeValue("#404040", "white");

  return (
    <Box my={20} textAlign="center" id={id}>
      <Heading mb={4} color={SwitchColor}>
        {sectionName}
      </Heading>
      <Divider color={SwitchColor} />
    </Box>
  );
};
