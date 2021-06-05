import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

import { FaMoon, FaSun } from "react-icons/fa";

function ColorModeSwitcher() {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <IconButton
      ml={{ base: 0, md: 2 }}
      aria-label="Color Mode Switcher"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  );
}

export default ColorModeSwitcher;
