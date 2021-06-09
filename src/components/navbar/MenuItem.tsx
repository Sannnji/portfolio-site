import { Link } from "@chakra-ui/react";

const MenuItem: React.FC = ({ children }) => {
  return <Link mx={{ base: 0, md: 2 }}>{children}</Link>;
};

export default MenuItem;
