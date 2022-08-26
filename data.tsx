import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook, BsFillTelephoneOutboundFill } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import { FaFacebook, FaSeedling } from "react-icons/fa";
import { SiIfood } from "react-icons/si";
import { GiTwoCoins } from "react-icons/gi";
import { AiFillInstagram, AiTwotoneMail } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

export const navBtns = [
  { title: "home", id: 1, href: "/" },
  { title: "about", id: 2, href: "/about" },
  { title: "menu", id: 3, href: "/menu" },
];

export const menuMainLinks = [
  { title: "menu", id: 1, href: "/menu" },
  { title: "about us", id: 2, href: "/about" },
  { title: "contact", id: 3, href: "/" },
  // { title: "order", id: 4, href: "/menu" },
];
export const footerLinks = [
  { title: "menu", id: 1, href: "/menu" },
  { title: "about", id: 2, href: "/about" },
  { title: "contact", id: 3, href: "/" },
  { title: "order", id: 4, href: "/menu" },
];

export const menuSubLinks = [
  { title: "the story", href: "/about", id: 1 },
  { title: "the team", href: "/about", id: 2 },
  { title: "north indian", href: "/menu", id: 3 },
  { title: "bengali", href: "/menu", id: 4 },
  { title: "mughlai", href: "/menu", id: 5 },
  { title: "oriental", href: "/menu", id: 6 },
  { title: "continental", href: "/menu", id: 7 },
  { title: "salads", href: "/menu", id: 8 },
  { title: "smoothies", href: "/menu", id: 9 },
  { title: "bowls", href: "/menu", id: 10 },
  { title: "deserts", href: "/menu", id: 11 },
  { title: "beverages", href: "/menu", id: 12 },
];

export const contactOutlets = [
  {
    icon: <IoLogoWhatsapp className="icon" />,
    message: "message us at",
    info: "++919330823020",
    id: 1,
  },
  {
    icon: <BsFillTelephoneOutboundFill className="icon" />,
    message: "call us on",
    info: "++919330823020",
    id: 2,
  },
];

export const summaryIcons = [
  {
    icon: <FaSeedling className="icon" />,
    message: "plant-based only",
    id: 1,
  },
  {
    icon: <ImEarth className="icon" />,
    message: "eco-friendly packaging",
    id: 2,
  },
  {
    icon: <GiTwoCoins className="icon" />,
    message: "pocket friendly",
    id: 3,
  },
  {
    icon: <SiIfood className="icon" />,
    message: "tasty happy meals",
    id: 4,
  },
];
export const socials = [
  {
    icon: <AiFillInstagram className="icon" />,
    type: "link",
    title: "facebook",
    href: "https://www.facebook.com/ubuntueat/",
    id: 1,
  },
  {
    icon: <FaFacebook className="icon" />,
    type: "link",
    title: "facebook",
    href: "https://www.facebook.com/ubuntueat/",
    id: 2,
  },
  {
    icon: (
      <AiTwotoneMail
        className="icon"
        onClick={() => window.open("mailto:  ubuntucommunity3@gmail.com")}
      />
    ),
    type: "button",
    title: "email",
    id: 3,
  },
];

export const homeImages = [
  {
    src: "/images/meat.png",
    name: "food",
    id: 1,
  },
  {
    src: "/images/food1.png",
    name: "food",
    id: 2,
  },
  {
    src: "/images/burger.png",
    name: "food",
    id: 3,
  },
  {
    src: "/images/pizza.png",
    name: "food",
    id: 4,
  },
  {
    src: "/images/fry.png",
    name: "food",
    id: 5,
  },
  {
    src: "/images/salad.png",
    name: "food",
    id: 6,
  },
];

export const gallery = [
  {
    src: "/images/biryani.png",
    name: "food",
    id: 1,
  },
  {
    src: "/images/pizza.png",
    name: "food",
    id: 2,
  },
  {
    src: "/images/ice-cream.png",
    name: "food",
    id: 3,
  },
  {
    src: "/images/food2.png",
    name: "food",
    id: 4,
  },
  {
    src: "/images/fry2.png",
    name: "food",
    id: 5,
  },
  {
    src: "/images/luchi.png",
    name: "food",
    id: 6,
  },
  {
    src: "/images/food1.png",
    name: "food",
    id: 7,
  },
  {
    src: "/images/fry.png",
    name: "food",
    id: 8,
  },
  {
    src: "/images/bowl.png",
    name: "food",
    id: 9,
  },
  {
    src: "/images/pastry.png",
    name: "food",
    id: 10,
  },
  {
    src: "/images/kebab.png",
    name: "food",
    id: 11,
  },
  {
    src: "/images/smoothie.png",
    name: "food",
    id: 12,
  },
  {
    src: "/images/momo.png",
    name: "food",
    id: 13,
  },
  {
    src: "/images/fry2.png",
    name: "food",
    id: 14,
  },
  {
    src: "/images/food3.png",
    name: "food",
    id: 15,
  },
  {
    src: "/images/cake.png",
    name: "food",
    id: 16,
  },
];

export const team = [
  {
    src: "/images/abhinav.png",
    name: "abinav bajpai",
    title: "Chief Empowering Officer",
    about:
      "Has been an environmentalist since the last eight years and got skills of networking, inspiring in bringing people together. Minimalist by nature and explosive by thought.",
    id: 1,
  },
  {
    src: "/images/vikash.png",
    name: "vikash bihani",
    title: "Chief Evaluation Officer",
    about:
      "Has been an environmentalist who comes from a business family background and hence a perfect addition to Ubuntu. Keeps the whole show running at full power.",
    id: 2,
  },
  {
    src: "/images/shreya.png",
    name: "shreya saha",
    title: "Chief Eating Officer",
    about:
      "Has been the food innovator and passionate about vaganising every dish in the world. She is a world traveller and wishes to make vegan travel easy for everyone by making plant-based food accessible and affordable..",
    id: 3,
  },
  {
    src: "/images/richie.png",
    name: "richie sharma",
    title: "Chief Envisioning Officer",
    about:
      "Has been an investor and an one man solution for operational needs. A highly resourceful individual and passionate about making world vegan in 10 years. Global ambition for the brands.",
    id: 4,
  },
];

export const menuCategories = [
  {
    title: "North Indian, Bengali, Mughlai",
    about:
      "Our menu includes Kolkata style biryani, kebabs, Indian curries like butter chicken, paneer tikka masala and Bengali dishes like kosha mangsho, chingri malaikari and many more dishes.",
    id: 1,
    images: [
      {
        src: "/images/biryani.png",
        name: "food",
        id: 1,
      },
      {
        src: "/images/kebab.png",
        name: "food",
        id: 11,
      },
      {
        src: "/images/luchi.png",
        name: "food",
        id: 6,
      },
      {
        src: "/images/fry.png",
        name: "food",
        id: 5,
      },
    ],
  },
  {
    title: "Oriental, Continental, Lebanese & Salads",
    about:
      "We have noodles, Thai prawn curries, pasta, chicken tikka pizza, mutton slaw burger, falafel shawarmas, and many more dishes.",
    id: 2,
    images: [
      {
        src: "/images/pizza.png",
        name: "food",
        id: 4,
      },
      {
        src: "/images/fry2.png",
        name: "food",
        id: 5,
      },
      {
        src: "/images/food2.png",
        name: "food",
        id: 44,
      },
      {
        src: "/images/food3.png",
        name: "food",
        id: 55,
      },
    ],
  },
  {
    title: "Smoothie Bowls, Desserts & Beverages",
    about:
      "Talking about food, how can we miss dessert​. We have range of cakes, brownies, icecream.",
    id: 3,
    images: [
      {
        src: "/images/bowl.png",
        name: "food",
        id: 9,
      },
      {
        src: "/images/pastry.png",
        name: "food",
        id: 10,
      },
      {
        src: "/images/smoothie.png",
        name: "food",
        id: 12,
      },
      {
        src: "/images/cake.png",
        name: "food",
        id: 16,
      },
    ],
  },
];
