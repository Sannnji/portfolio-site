import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Box, Link, Flex, Text } from "@chakra-ui/react";

import ColorModeSwitcher from "../ColorModeSwitcher";
import MenuItem from "./MenuItem";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box zIndex={1} top={0}>
      <Flex
        align="center"
        justify="space-between"
        py="2%"
        px={{ base: "5%", xl: "13%" }}
        wrap="wrap"
      >
        <Link>
          <Text fontSize="xl" fontFamily="Pacifico, cursive">
            James
          </Text>
        </Link>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <FaBars />
        </Box>

        <Box
          display={{ base: show ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <MenuItem>Home</MenuItem>

            <MenuItem>Skills</MenuItem>

            <MenuItem>Work</MenuItem>

            <MenuItem>Contact</MenuItem>
            <ColorModeSwitcher />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
