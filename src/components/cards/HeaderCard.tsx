import { Box, Image, Flex } from "@chakra-ui/react";

import IntroText from "../framer/IntroText";
import { MotionBox } from "../framer/MotionBox";

import "./HeaderCard.css";
import cityScape from "../../images/cityScape.png";
import rochLogo from "../../images/rochLogo.png";

export default function HeaderCard() {
  return (
    <MotionBox
      className="test"
      pt={8}
      borderRadius="lg"
      boxShadow="dark-lg"
      initial={{ scaleX: 0.5 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: ".5", ease: "easeIn" }}
    >
      <Flex mb={4} mx={4} textAlign="left" align="center" justify="center">
        <Image mr={10} width={{ base: "85px", md: "150px" }} src={rochLogo} />
        <IntroText />
      </Flex>
      <Flex>
        <Image src={cityScape} borderBottomLeftRadius="md" width="50%" />
        <Image src={cityScape} borderBottomRightRadius="md" width="50%" />
      </Flex>
    </MotionBox>
  );
}
