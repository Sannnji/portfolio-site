import { useState } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import "./SkillsCard.css";

export default function SkillsCard() {
  return (
    <AnimateSharedLayout>
        <motion.div layout className="skillsDiv" initial={{ borderRadius: 25 }}>
          {items.map((item) => (
            <Item key={item} />
          ))}
        </motion.div>
    </AnimateSharedLayout>
  );
}

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="avatar" layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  );
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row" />
      <div className="row" />
      <div className="row" />
    </motion.div>
  );
}

const items = [0, 1, 2, 4];
