import plant1 from "../assests/icons/001-plant.svg";
import plant2 from "../assests/icons/002-plant.svg";
import plant3 from "../assests/icons/003-plant.svg";
import plant4 from "../assests/icons/004-plant.svg";
import exapleCard1 from "../assests/backgrounds/exampleCard1.png";
import exapleCard2 from "../assests/backgrounds/exampleCard2.png";
import exapleCard3 from "../assests/backgrounds/exampleCard3.png";
import exapleCard4 from "../assests/backgrounds/exampleCard4.png";

export const titles = [
  { name: "Service", path: "/service" },
  { name: "Blog", path: "/blog" },
  { name: "Shop", path: '/shop' },
  { name: "Location", path: '/location' },
];
export const plantsIcons = [plant1, plant2, plant3, plant4];

export const BUTTONS = {
  LINK: "LINK",
  SERVICES: "SERVICES",
};

export const EXAMPLE_CARDS = [
  {
    title: "Foliage",
    count: "21 PLANTS",
    url: exapleCard1,
    icon: plant1,
    path: '/foliage'
  },
  {
    title: "Pucculent",
    count: "4 plants",
    url: exapleCard2,
    icon: plant2,
    path: '/foliage'
  },
  {
    title: "Flower",
    count: "8 plants",
    url: exapleCard3,
    icon: plant3,
  },
  {
    title: "Fruit",
    count: "10 plants",
    url: exapleCard4,
    icon: plant4,
  },
];
