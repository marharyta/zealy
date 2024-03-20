import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import "./globals.css";
import { getCart, clearCart } from "./api/cart";

import StoreProvider from "@/lib/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zealy Test",
  description: "Generated by create next app",
  icons: {
    icon: [
      {
        fetchPriority: "low",
        rel: "icon",
        type: "imag/png",
        url: "/favicon.png?v=19",
      },
      // This will make animated favicon on
      {
        rel: "icon",
        type: "image/gif",
        url: "/favicon.gif?v=21",
        fetchPriority: "high",
      },
    ],
  },
};

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cart = await getCart();
  const clearCartAction = async () => {
    "use server";
    return await clearCart();
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
            <Header cart={cart} clearCartAction={clearCartAction} />
            {children}
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
