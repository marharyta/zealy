import { Product, Review } from "./types";

const products = [
  {
    id: 1,
    image: "/favicon.png",
    name: "Moon",
    price: 25,
    description:
      "And I think it's gonna be a long, long time Til touchdown brings me round again to find Im not the man they think I am at home",
    reviews: [
      {
        rating: 5,
        text: "This is the best t-shirt I've ever owned! The design is amazing and the quality is top-notch.",
      },
      {
        rating: 4,
        text: "I really like this t-shirt, the design is cool and it's comfortable to wear. The only downside is that it shrunk a bit after washing.",
      },
    ],
  },
  {
    id: 2,
    image: "/favicon.png",
    name: "Moon",
    price: 25,
    description:
      "I got you, moonlight, you're my starlight, I need you all night, come on, dance with me, I'm levitating",
    reviews: [
      {
        rating: 5,
        text: "I love this t-shirt! The dragon design is awesome and the material is high-quality.",
      },
      {
        rating: 5,
        text: "This is my new favorite t-shirt! The dragon design is so cool and the fit is perfect.",
      },
    ],
  },
  {
    id: 3,
    image: "/favicon.png",
    name: "Moon",
    price: 25,
    description:
      "Fly me to the moon, Let me play among the stars, And let me see what spring is like, On a-Jupiter and Mars",
    reviews: [
      {
        rating: 4,
        text: "I really like this t-shirt, the elf design is unique and the fabric is soft. The only downside is that it's a bit too long for my liking.",
      },
      {
        rating: 5,
        text: "This t-shirt is amazing! The elf design is so cool and the fit is perfect. I've gotten so many compliments on it.",
      },
    ],
  },
  {
    id: 4,
    image: "/favicon.png",
    name: "Moon",
    price: 25,
    description:
      "I never knew, I never knew You could hold moonlight in your hands 'Til the night I held you You are my moonlight, moonlight",
    reviews: [
      {
        rating: 5,
        text: "This t-shirt is awesome! The wizard design is so cool and the material is high-quality.",
      },
      {
        rating: 4,
        text: "I really like this t-shirt, the wizard design is unique and the fabric is soft. The only downside is that it's a bit too tight around the neck.",
      },
    ],
  },
  {
    id: 5,
    image: "/favicon.png",
    name: "Moon",
    price: 25,
    description:
      "I wanna go to the moon, don't leave so soon (Don't leave so soon), How could I get through? (How could I get through?), I wanna go to the moon, don't leave so soon (Don't leave so soon)",
    reviews: [
      {
        rating: 5,
        text: "This is the best t-shirt I've ever owned! The wizard design is amazing and the quality is top-notch.",
      },
      {
        rating: 5,
        text: "I love this t-shirt! The wizard design is so cool and the fit is perfect. I wear it all the time.",
      },
    ],
  },
  {
    id: 6,
    image: "/favicon.png",
    name: "Moon",
    price: 25,
    description:
      "But we're lookin' at the same moon, Wonder if you miss me too when we're lookin' at the same moon, How can I be dead to you when we're lookin' at the same moon",
    reviews: [
      {
        rating: 4,
        text: "I really like this t-shirt, the barbarian design is unique and the fabric is soft. The only downside is that it's a bit too baggy.",
      },
      {
        rating: 5,
        text: "This t-shirt is amazing! The barbarian design is so cool and the fit is perfect. I've gotten so many compliments on it.",
      },
    ],
  },
];

export const getProducts = async (): Promise<Product[]> => products;

export const addReview = async (
  id: number,
  review: {
    rating: number;
    text: string;
  }
): Promise<Review[] | undefined> => {
  const product = await getProductById(id);
  if (product) {
    product.reviews.push(review);
  }
  return product?.reviews;
};

export const getProductById = async (
  id: number
): Promise<Product | undefined> =>
  getProducts().then((products) => products.find((p) => p.id === id));
