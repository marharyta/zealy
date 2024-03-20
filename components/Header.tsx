"use client";

import { useRef } from "react";
import CartPopup from "./CartPopup";
import { useState } from "react";
import { type Cart } from "@/lib/types";
import { ModeToggle } from "@/components/theme-toggle";
import { cartAtom } from "@/lib/store/atoms";
import { useStore, useAtomValue } from "jotai";

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
  const cart = useAtomValue(cartAtom, {
    store,
  });

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <div>
        <ModeToggle />
      </div>
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full"
        onClick={() => {
          setShowCart(!showCart);
        }}
      >
        {cart?.products?.length}

        {showCart && <CartPopup clearCartAction={clearCartAction} />}
      </div>
    </>
  );
}
