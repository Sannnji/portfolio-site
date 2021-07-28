import { MotionImg } from "../framer/MotionImg";
import { MotionBox } from "../framer/MotionBox";
import { MotionSimpleGrid } from "../framer/MotionSimpleGrid";
import { MotionText } from "../framer/MotionText";


import { Images } from "../../images/index";

export default function ProjectCard() {
  const projects = [
    {
      name: "Guiginos",
      webView: Images.guiginos.webView,
      description:
        'A fake restaruant inspired by the show "It\'s Always Sunny in Philagelphia"',
    },

    {
      name: "Tindawg",
      webView: Images.tindawg.webView,
      description:
        "A dog dating site I made following Angela Yu's Full Stack Web Development Course",
    },
    {
      name: "Mac's Pizza Shack",
      webView: Images.macs.webView,
      description:
        "A dog dating site I made following Angela Yu's Full Stack Web Development Course",
    },
  ];

  return (
    <MotionSimpleGrid
      layout
      minChildWidth="325px"
      spacing="20px"
    >
      {projects.map((element) => (
        <Item
          name={element.name}
          image={element.webView}
          description={element.description}
        />
      ))}
    </MotionSimpleGrid>
  );
}

interface ItemProps {
  name: string;
  image: any;
  description: string;
}

const Item: React.FC<ItemProps> = ({ name, image, description }) => {
  return (
    <>
      <MotionImg src={image} borderRadius="lg" boxShadow="dark-lg" />
    </>
  );
};
