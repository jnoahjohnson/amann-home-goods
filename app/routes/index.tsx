import { LoaderFunction, useLoaderData } from "remix";
import ProductGrid from "~/components/ProductGrid";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    title: "Amann Home Goods",
    description: "Incredible products for your incredible home.",
  };
};

export let loader: LoaderFunction = async () => {
  const params = {
    api_key: "B27347C99C1242A5B81DD3FBB4636A94",
    type: "seller_products",
    amazon_domain: "amazon.com",
    seller_id: "A1EEYPEVF7DX6F",
  };
  let data = await fetch(
    "https://api.rainforestapi.com/request?api_key=B27347C99C1242A5B81DD3FBB4636A94&type=seller_products&amazon_domain=amazon.com&seller_id=A1EEYPEVF7DX6F"
  );

  let jsonData = await data.json();

  console.log(jsonData);

  return {
    products: jsonData.seller_products ?? null,
  };
};

export function headers() {
  return {
    "Cache-Control": "max-age=86400, s-maxage=86400",
  };
}

export default function Index() {
  let { products } = useLoaderData();

  console.log(products[0].price);

  return (
    <div className="mx-auto max-w-6xl py-4">
      {/* <h1 className="text-center text-4xl font-semibold mb-2">
        Amann Home Goods
      </h1> */}
      <div className="text-center w-full flex items-center justify-center mb-2">
        <img src="/images/slice1.png" className="h-16" />
      </div>
      <ProductGrid products={products} />
    </div>
  );
}
