import { MotionBox } from "./framer/MotionBox";

export const LoadRest: React.FC = ({ children }) => {
  return (
    <MotionBox
      initial={{ x: "200vh" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: "1" }}
    >
      {children}
    </MotionBox>
  );
};
