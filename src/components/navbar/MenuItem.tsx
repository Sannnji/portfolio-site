import { Link } from "@chakra-ui/react";

interface MenuItemProps {
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, children }) => {
  return <Link href={href} mx={{ base: 0, md: 2 }} my={{base: 1, md: 0}}>{children}</Link>;
};

export default MenuItem;
