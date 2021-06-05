import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Box, Link, Flex, Heading } from "@chakra-ui/react";

import ColorModeSwitcher from "./ColorModeSwitcher";
import MenuItem from "./MenuItem";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box zIndex={1} position="sticky" top={0}>
      <Flex align="center" justify="space-between" py="1%" px="7%" wrap="wrap">
        <Link>
          <Heading size="lg" fontFamily="Pacifico, cursive">James</Heading>
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
            <MenuItem>
              <Link>Home</Link>
            </MenuItem>

            <MenuItem>
              <Link>Skills</Link>
            </MenuItem>

            <MenuItem>
              <Link>Work</Link>
            </MenuItem>

            <MenuItem>
              <Link>Contact</Link>
            </MenuItem>
            <ColorModeSwitcher />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
