import { useState } from "react";
import { MotionBox } from "../framer/MotionBox";
import { MotionImg } from "../framer/MotionImg";
import { MotionFlex } from "../framer/MotionFlex";
import { MotionText } from "../framer/MotionText";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Images } from "../../images/index";

import "./SkillsCard.css";

export default function SkillsCard() {
  const skills = [
    {
      name: "TypeScript",
      image: Images.typescript,
    },
    {
      name: "React",
      image: Images.react,
    },
    {
      name: "MongoDB",
      image: Images.mongodb,
    },
    {
      name: "Apollo",
      image: Images.apollo,
    },
    {
      name: "GraphQL",
      image: Images.graphql,
    },
  ];

  return (
    <AnimateSharedLayout>
      <MotionBox
        layout
        mr={{ base: 0, xl: 8 }}
        mb={{ base: 8, md: 8, lg: 8, xl: 0 }}
        display="flex"
        flexDirection="column"
        bg="white"
        padding="20px"
        width={{ base: "100%", md: "350px", lg: "350px" }}
        borderRadius="lg"
        boxShadow="lg"
      >
        {skills.map((element) => (
          <Item name={element.name} image={element.image} />
        ))}
      </MotionBox>
    </AnimateSharedLayout>
  );
}

interface ItemProps {
  name: string;
  image: any;
}

const Item: React.FC<ItemProps> = ({ name, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <MotionBox
      className="skillItem"
      bg={"lightgrey"}
      layout
      onClick={toggleOpen}
      borderRadius="md"
      padding="10px"
      marginBottom="20px"
      overflow="hidden"
      cursor="pointer"
    >
      <MotionFlex layout align="center">
        <MotionImg layout src={image} width="50px" />
        <MotionText layout ml={4}>
          {name}
        </MotionText>
      </MotionFlex>

      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </MotionBox>
  );
};

interface ContentProps {}

function Content() {
  return (
    <MotionBox
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      padding="10px"
    >
      <MotionText>Years of experience:</MotionText>
    </MotionBox>
  );
}

const items = [0, 1, 2, 4];
