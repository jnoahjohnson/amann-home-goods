import { LoaderFunction, useLoaderData } from "remix";
import ProductGrid from "~/components/ProductGrid";
import type { MetaFunction } from "remix";
import { Link } from "react-router-dom";
import FeaturedProduct from "~/components/FeaturedProduct";

export const meta: MetaFunction = () => {
  return {
    title: "Amann Home Goods",
    description: "Incredible products for your incredible home.",
  };
};

export let loader: LoaderFunction = async () => {
  // const params = {
  //   api_key: "B27347C99C1242A5B81DD3FBB4636A94",
  //   type: "seller_products",
  //   amazon_domain: "amazon.com",
  //   seller_id: "A1EEYPEVF7DX6F",
  // };
  let data = await fetch(`https://amazon-amann.fly.dev/products?page=1`);

  let jsonData = await data.json();

  console.log(jsonData);

  let body = JSON.stringify({
    products: jsonData.seller_products ?? null,
    numPages: jsonData.pagination.total_pages,
  });

  return new Response(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "s-maxage=86400, max-age=86400, public",
    },
  });
};

export function headers() {
  return {
    "Cache-Control": "max-age=3600, s-maxage=28800",
  };
}

export default function Index() {
  let { products, numPages } = useLoaderData();

  console.log(numPages);

  return (
    <div className="mx-auto max-w-6xl py-4 px-6">
      <div>
        <FeaturedProduct />
      </div>
      <h1 className="font-bold text-4xl pt-6 pb-4">All Products</h1>
      <ProductGrid products={products} />
      <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8 flex items-center justify-between mt-2">
        <div></div>
        {numPages > 1 ? (
          <Link to="/2" className="px-2 py-1 bg-gray-300 text-gray-800 rounded">
            Next Page &gt;
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div className="w-full text-center px-2 mt-10">
      <h1 className="text-xl">
        There was an issue getting the products. Please try again later or check
        out our links above.
      </h1>
    </div>
  );
}
