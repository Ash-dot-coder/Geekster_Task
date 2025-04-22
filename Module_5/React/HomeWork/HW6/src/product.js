import laptopImg from "./assets/laptop.jpg";
import mobileImg from "./assets/mobile.webp";
import headphonesImg from "./assets/headphones.jfif";
import watchImg from "./assets/watch.avif";

export const products = [
  { id: 1, name: "Laptop", price: 80_000, image: laptopImg, quantity: 1 },
  {
    id: 2,
    name: "Smartphone",
    price: 50_000,
    image: mobileImg,
    quantity: 1,
  },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    image: headphonesImg,
    quantity: 1,
  },
  { id: 4, name: "Watch", price: 2000, image: watchImg, quantity: 1 },
];
