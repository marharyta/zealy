import { Product, Review } from "./types";

const products = [
  {
    id: 1,
    image: "/favicon.png",
    name: "Moon",
    price: 25,
    description:
      "And I think it's gonna be a long, long time Til touchdown brings me round again to find Im not the man they think I am at home",
  },
  {
    id: 2,
    image: "/favicon.png",
    name: "Moon",
    price: 25,
    description:
      "I got you, moonlight, you're my starlight, I need you all night, come on, dance with me, I'm levitating",
  },
  {
    id: 3,
    image: "/favicon.png",
    name: "Moon",
    price: 25,
    description:
      "Fly me to the moon, Let me play among the stars, And let me see what spring is like, On a-Jupiter and Mars",
  },
  {
    id: 4,
    image: "/favicon.png",
    name: "Moon",
    price: 25,
    description:
      "I never knew, I never knew You could hold moonlight in your hands 'Til the night I held you You are my moonlight, moonlight",
  },
  {
    id: 5,
    image: "/favicon.png",
    name: "Moon",
    price: 25,
    description:
      "I wanna go to the moon, don't leave so soon (Don't leave so soon), How could I get through? (How could I get through?), I wanna go to the moon, don't leave so soon (Don't leave so soon)",
  },
  {
    id: 6,
    image: "/favicon.png",
    name: "Moon",
    price: 25,
    description:
      "But we're lookin' at the same moon, Wonder if you miss me too when we're lookin' at the same moon, How can I be dead to you when we're lookin' at the same moon",
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
