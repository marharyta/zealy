import Counter from "./Counter";

import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import AddToCart from "@/components/AddToCart";
import { addToCart } from "@/app/api/cart";

export default async function Home() {
  const products = await getProducts();

  const addToCartAction = async (id: number) => {
    "use server";
    return await addToCart(id);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
        </div>
      </div>

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-['']  before:lg:h-[360px] z-[-1]">
        <div className="flex flex-wrap gap-2">
          
        </div>
      </div> */}

      <ul role="list" className="">
        {products.map((product) => (
          <li key={product.id} className="md:w-1/3">
            <ProductCard {...product} />

            <AddToCart
              {...product}
              //@ts-ignore
              addToCartAction={async () => {
                "use server";
                return await addToCart(product.id);
              }}
            />
          </li>
        ))}
      </ul>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
