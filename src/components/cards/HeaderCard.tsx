import { Box, Image, Flex } from "@chakra-ui/react";
import { motion, animate } from "framer-motion";

import IntroText from "../framer/IntroText";

import "./HeaderCard.css";
import cityScape from "../../images/cityScape.png";
import rochLogo from "../../images/rochLogo.png";

function HeaderCard() {
  return (
    <Box className="test" pt={8} borderRadius="lg" boxShadow="dark-lg">

        <Flex mb={4} mx={4} textAlign="left" align="center" justify="center">
          {/* <motion.img
          src={rochLogo}
          width="85px"
          style={{ marginRight: 25 }}
          animate={{ y: 10 }}
          transition={{ repeat: Infinity, duration: 2 }}
        /> */}
          <Image mr={10} width={{ base: "85px", md: "150px" }} src={rochLogo} />
          <IntroText />
        </Flex>
        <Flex>
          <Image src={cityScape} borderBottomLeftRadius="md" width="50%" />
          <Image src={cityScape} borderBottomRightRadius="md" width="50%" />
        </Flex>

    </Box>
  );
}

export default HeaderCard;
