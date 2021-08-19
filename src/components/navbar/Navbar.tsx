import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Box, Link, Flex, Text, useColorModeValue } from "@chakra-ui/react";

import ColorModeSwitcher from "../ColorModeSwitcher";
import MenuItem from "./MenuItem";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const SwitchColor = useColorModeValue("#404040", "white");

  return (
    <Box zIndex={1} top={0} color={SwitchColor}>
      <Flex
        align="center"
        justify="space-between"
        pt={6}
        px={{ base: "5%", xl: "10%" }}
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
            <MenuItem href="#home">Home</MenuItem>

            <MenuItem href="#skills">Skills</MenuItem>

            <MenuItem href="#projects">Projects</MenuItem>

            <MenuItem href="#contact">Contact</MenuItem>
            <ColorModeSwitcher />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
