import { atom } from "jotai";
import { Cart, Review } from "@/lib/types";

export const cartAtom = atom<Cart>({
  products: [],
});
export const reviewsAtom = atom<Record<string, Review[] | null>>({
  1: [
    {
      rating: 5,
      emoji: "",
      text: "This is the best t-shirt I've ever owned! The design is amazing and the quality is top-notch.",
    },
    {
      rating: 4,
      emoji: "",
      text: "I really like this t-shirt, the design is cool and it's comfortable to wear. The only downside is that it shrunk a bit after washing.",
    },
  ],
  //   2: [
  //     {
  //       rating: 5,
  //       emoji: "",
  //       text: "This is the best t-shirt I've ever owned! The design is amazing and the quality is top-notch.",
  //     },
  //     {
  //       rating: 4,
  //       emoji: "",
  //       text: "I really like this t-shirt, the design is cool and it's comfortable to wear. The only downside is that it shrunk a bit after washing.",
  //     },
  //   ],
  //   3: [
  //     {
  //       rating: 5,
  //       emoji: "",
  //       text: "This is the best t-shirt I've ever owned! The design is amazing and the quality is top-notch.",
  //     },
  //     {
  //       rating: 4,
  //       emoji: "",
  //       text: "I really like this t-shirt, the design is cool and it's comfortable to wear. The only downside is that it shrunk a bit after washing.",
  //     },
  //   ],
});
