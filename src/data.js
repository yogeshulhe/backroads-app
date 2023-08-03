import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Magni rem eum laborum et officiis vero iusto veritatis. Ex, vero amet.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet natus cum soluta adipisci sapiente, voluptatibus culpa quamipsam maxime.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet natus cum soluta adipisci sapiente, voluptatibus culpa quamipsam maxime.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2023",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga magnam placeat ipsam quasi id fugiat animi vel nemo sequi!",
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "October 11th, 2023",
    title: "best of java",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga magnam placeat ipsam quasi id fugiat animi vel nemo sequi!",
    location: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2023",
    title: "explore hong kong",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga magnam placeat ipsam quasi id fugiat animi vel nemo sequi!",
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "December 5th, 2023",
    title: "kenya highlights",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga magnam placeat ipsam quasi id fugiat animi vel nemo sequi!",
    location: "kenya",
    duration: 20,
    cost: 3300,
  },
];
