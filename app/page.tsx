import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Reviews from "@/components/Reviews";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <div className="">
          <ul role="list" className="grid grid-cols-3 gap-6">
            {products.map((product) => {
              return (
                <li key={product.id}>
                  <ProductCard {...product} />
                  <Reviews reviews={product.reviews} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
