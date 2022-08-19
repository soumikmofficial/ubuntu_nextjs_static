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
  { title: "order", id: 4, href: "/menu" },
];
export const footerLinks = [
  { title: "menu", id: 1, href: "/menu" },
  { title: "about", id: 2, href: "/about" },
  { title: "contact", id: 3, href: "/" },
  { title: "order", id: 4, href: "/menu" },
];

export const menuSubLinks = [
  { title: "the story", id: 1 },
  { title: "the team", id: 2 },
  { title: "north indian", id: 3 },
  { title: "bengali", id: 4 },
  { title: "mughlai", id: 5 },
  { title: "oriental", id: 6 },
  { title: "continental", id: 7 },
  { title: "salads", id: 8 },
  { title: "smoothies", id: 9 },
  { title: "bowls", id: 10 },
  { title: "deserts", id: 11 },
  { title: "beverages", id: 12 },
];

export const contactOutlets = [
  {
    icon: <IoLogoWhatsapp className="icon" />,
    message: "message us at",
    info: "+919999988888",
    id: 1,
  },
  {
    icon: <BsFillTelephoneOutboundFill className="icon" />,
    message: "call us on",
    info: "+919999988888",
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
    icon: <AiTwotoneMail className="icon" />,
    type: "button",
    title: "email",
    id: 3,
  },
];

export const homeImages = [
  {
    src: "/images/luchi.png",
    id: 1,
  },
  {
    src: "/images/cake.png",
    id: 2,
  },
  {
    src: "/images/fry.png",
    id: 3,
  },
  {
    src: "/images/fry2.png",
    id: 4,
  },
  {
    src: "/images/pizza.png",
    id: 5,
  },
  {
    src: "/images/salad.png",
    id: 6,
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
