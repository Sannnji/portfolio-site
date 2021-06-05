import { motion } from "framer-motion";

export default function IntroText() {
  const line1 = "Hi! I'm James!";
  const line2 = "A Frontend Developer and Aspiring FullStack Developer";

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
          <motion.span style={{scale: 2}} key={char + "-" + index} variants={letter}>
            {char}
          </motion.span>
        );
      })}
      <br />
      {line2.split("").map((char, index) => {
        return (
          <motion.span key={char + "-" + index} variants={letter}>
            {char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}
