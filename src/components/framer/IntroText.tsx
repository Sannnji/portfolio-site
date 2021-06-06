import { motion } from "framer-motion";

export default function IntroText() {
  const line1 = "Hello World, I'm James";
  const line2 = "Frontend Developer, Designer and Aspiring FullStack Developer";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        deplay: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.h1
      className="load-text"
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {line1.split("").map((char, index) => {
        return (
          <motion.span
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            key={char + "-" + index}
            variants={letter}
          >
            {char}
          </motion.span>
        );
      })}
      <br />
      {line2.split("").map((char, index) => {
        return (
          <motion.span
            style={{ fontSize: "1rem", fontWeight: "bold" }}
            key={char + "-" + index}
            variants={letter}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}
