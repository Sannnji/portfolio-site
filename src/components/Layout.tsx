import { Box } from "@chakra-ui/react";

const Layout: React.FC = ({ children }) => {
  return <Box mx={{ base: "2%", md: "13%" }}>{children}</Box>;
};

export default Layout;
