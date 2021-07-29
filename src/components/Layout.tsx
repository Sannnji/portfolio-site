import { Box } from "@chakra-ui/react";

const Layout: React.FC = ({ children }) => {
  return (
    <Box mx={{ base: "5%", xl: "13%" }} overflow="hidden">
      {children}
    </Box>
  );
};

export default Layout;
