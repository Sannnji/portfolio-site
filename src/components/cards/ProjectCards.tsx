import { MotionImg } from "../framer/MotionImg";
import { MotionBox } from "../framer/MotionBox";
import { MotionSimpleGrid } from "../framer/MotionSimpleGrid";
import { MotionText } from "../framer/MotionText";

import { Images } from "../../images/index";
import { Link } from "@chakra-ui/react";

export default function ProjectCard() {
  const projects = [
    {
      name: "Guiginos",
      webView: Images.guiginos.webView,
      link: "https://sannnji.github.io/retaurant-site-react/",
      description:
        'A fake restaruant inspired by the show "It\'s Always Sunny in Philagelphia"',
    },
    {
      name: "Tindawg",
      webView: Images.tindawg.webView,
      link: "https://sannnji.github.io/tindawg-site-react/",
      description:
        "A dog dating site I made following Angela Yu's Full Stack Web Development Course",
    },
    {
      name: "Mac's Pizza Shack",
      webView: Images.macs.webView,
      link: "https://sannnji.github.io/macs-pizza/",
      description:
        "A dog dating site I made following Angela Yu's Full Stack Web Development Course",
    },
  ];

  return (
    <MotionSimpleGrid layout minChildWidth="325px" spacing="20px">
      {projects.map((element) => (
        <Item
          name={element.name}
          image={element.webView}
          link={element.link}
          description={element.description}
        />
      ))}
    </MotionSimpleGrid>
  );
}

interface ItemProps {
  name: string;
  image: any;
  link: string;
  description: string;
}

const Item: React.FC<ItemProps> = ({ image, link }) => {
  return (
    <>
      <Link href={link}>
        <MotionImg src={image} borderRadius="lg" boxShadow="dark-lg" />
      </Link>
    </>
  );
};
