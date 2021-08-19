import { Box } from "@chakra-ui/react";

const Layout: React.FC = ({ children }) => {
  return <Box mx={{ base: "5%", xl: "10%" }}>{children}</Box>;
};

export default Layout;
