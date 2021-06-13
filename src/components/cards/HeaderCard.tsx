import { Box, Image, Flex } from "@chakra-ui/react";

import { useAnimation } from "framer-motion";
import { MotionText } from "../framer/MotionText";
import { MotionBox } from "../framer/MotionBox";
import { MotionImg } from "../framer/MotionImg";

import "./HeaderCard.css";
import cityScape from "../../images/cityScape.png";
import rochLogo from "../../images/rochLogo.png";

export default function HeaderCard() {
  const boxControls = useAnimation();
  const expand = {
    scaleX: 1,
  };

  const cityControls = useAnimation();
  const rise = {
    y: 0,
  };

  const rochControls = useAnimation();
  const spinIn = {
    rotate: 360,
    scale: 1,
  };

  const textController = useAnimation();
  const showText = {
    opacity: 1,
  };

  return (
    <MotionBox
      className="test"
      pt={8}
      borderRadius="lg"
      boxShadow="dark-lg"
      overflow="hidden"
      initial={{ scaleX: 0.25 }}
      animate={boxControls}
      onLoad={async function () {
        await boxControls.start(expand);
        cityControls.start(rise);
        textController.start(showText);
        rochControls.start(spinIn);
      }}
      transition={{ duration: ".5", ease: "easeIn" }}
    >
      <Flex mb={4} mx={4} textAlign="left" align="center" justify="center">
        <MotionImg
          src={rochLogo}
          initial={{ scale: 0 }}
          width={{ base: "85px", md: "150px" }}
          mr={8}
          animate={rochControls}
        />
        <MotionText
          initial={{ opacity: 0 }}
          animate={textController}
          fontWeight="bold"
          fontSize={{ base: "md", md: "lg" }}
        >
          Hello World, I'm James
          <br />
          Frontend Developer, Designer and Aspiring FullStack Developer
        </MotionText>
      </Flex>

      <Flex>
        <MotionImg
          src={cityScape}
          borderBottomLeftRadius="sm"
          width="50%"
          initial={{ y: 325 }}
          transition={{ ease: "easeIn" }}
          animate={cityControls}
        />
        <MotionImg
          src={cityScape}
          borderBottomRightRadius="sm"
          width="50%"
          initial={{ y: 325 }}
          transition={{ ease: "easeIn" }}
          animate={cityControls}
        />
      </Flex>
    </MotionBox>
  );
}
