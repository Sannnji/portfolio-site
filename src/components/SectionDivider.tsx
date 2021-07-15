import { Divider, Box, Heading } from "@chakra-ui/react";

interface SectionDividerProps {
  sectionName: String;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  sectionName,
}) => {
  return (
    <Box mt={8}>
      <Heading mb={2}>{sectionName}</Heading>
      <Divider />
    </Box>
  );
};
