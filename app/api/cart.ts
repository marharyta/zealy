import { getProductById } from "@/lib/products";
import { Cart } from "@/lib/types";

const cart: Cart = {
  products: [
    {
      id: 1,
      image: "/favicon.png",
      name: "Moon",
      price: 25,
    },
    {
      id: 2,
      image: "/favicon.png",
      name: "Moon",
      price: 25,
    },
  ],
};

export const getCart = async (): Promise<Cart> => {
  return cart;
};

export const addToCart = async (productId: number): Promise<Cart> => {
  const product = await getProductById(productId);
  if (product) {
    cart.products.push({
      name: product.name,
      id: product.id,
      image: product.image,
      price: product.price,
    });
  }
  return cart;
};

export const clearCart = async (): Promise<Cart> => {
  cart.products = [];
  return cart;
};
