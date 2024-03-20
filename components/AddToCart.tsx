"use client";

import { useStore, useAtom } from "jotai";
import { cartAtom } from "@/lib/store/atoms";
import { type Cart } from "@/lib/types";
import { Button } from "@/components/ui/button";

export default function AddToCart({
  id,
  addToCartAction,
}: {
  id: number;
  addToCartAction: () => Promise<Cart>;
}) {
  const [cart, setCart] = useAtom(cartAtom, {
    store: useStore(),
  });

  return (
    <Button
      onClick={async () => {
        setCart(await addToCartAction());
      }}
    >
      Add To Cart {id}
    </Button>
  );
}
