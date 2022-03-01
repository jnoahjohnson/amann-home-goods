import { LoaderFunction, useLoaderData, useParams } from "remix";
import ProductGrid from "~/components/ProductGrid";
import type { MetaFunction } from "remix";
import { Link } from "react-router-dom";

export const meta: MetaFunction = () => {
  return {
    title: "Amann Home Goods",
    description: "Incredible products for your incredible home.",
  };
};

export let loader: LoaderFunction = async ({ params }) => {
  // const params = {
  //   api_key: "B27347C99C1242A5B81DD3FBB4636A94",
  //   type: "seller_products",
  //   amazon_domain: "amazon.com",
  //   seller_id: "A1EEYPEVF7DX6F",
  // };
  let data = await fetch(
    `https://amazon-amann.fly.dev/products?page=${params.page}`
  );

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

export default function PageComponent() {
  let { products, numPages } = useLoaderData();
  let { page } = useParams();

  console.log(numPages, page);

  if (typeof page !== "string") {
    return <div>Error</div>;
  }

  return (
    <div className="mx-auto max-w-6xl py-4">
      <ProductGrid products={products} />
      <ul className="w-full flex items-center justify-between pt-1 pb-4 max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8 mt-2">
        {parseInt(page) > 1 ? (
          <li>
            <Link
              to={`/${parseInt(page) - 1}`}
              className="px-2 py-1 bg-gray-300 text-gray-800 rounded"
            >
              {"<"} Previous Page
            </Link>
          </li>
        ) : (
          <li></li>
        )}
        {parseInt(page) + 1 <= parseInt(numPages) ? (
          <li>
            <Link
              to={`/${parseInt(page) + 1}`}
              className="px-2 py-1 bg-gray-300 text-gray-800 rounded"
            >
              Next Page &gt;
            </Link>
          </li>
        ) : null}
      </ul>
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
