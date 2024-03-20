"use client";

import { useRef } from "react";
import { type Cart } from "@/lib/types";
import { ModeToggle } from "@/components/theme-toggle";
import { cartAtom } from "@/lib/store/atoms";
import { useStore } from "jotai";

export default function Header({
  cart: initialCart,
  clearCartAction,
}: {
  cart: Cart;
  clearCartAction: () => Promise<Cart>;
}) {
  const store = useStore();
  const loaded = useRef(false);
  if (!loaded.current) {
    store.set(cartAtom, initialCart);
    loaded.current = true;
  }

  return (
    <>
      <ModeToggle />
    </>
  );
}
