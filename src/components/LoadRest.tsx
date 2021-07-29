import { MotionBox } from "./framer/MotionBox";

export const LoadRest: React.FC = ({ children }) => {
  return (
    <MotionBox
      initial={{ x: 2500 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeIn", duration: "1.5" }}
    >
      {children}
    </MotionBox>
  );
};
