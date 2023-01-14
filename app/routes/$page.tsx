import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import ProductGrid from "~/components/ProductGrid";
import { Link } from "react-router-dom";
import Links from "~/components/Links";
import { useLoaderData, useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return {
    title: "Amann Home Goods",
    description: "Incredible products for your incredible home.",
  };
};

export let loader = async ({ request }: LoaderArgs) => {
  const params = {
    api_key: "09983A5D1D46484A86D22881C205957A",
    type: "seller_products",
    amazon_domain: "amazon.com",
    seller_id: "A1EEYPEVF7DX6F",
  };

  let url = new URL(request.url);
  let page = url.searchParams.get("page") ?? "1";

  let data = await fetch(
    `https://api.rainforestapi.com/request?api_key=${params.api_key}&type=${params.type}&amazon_domain=${params.amazon_domain}&seller_id=${params.seller_id}&page=${page}`
  );

  let jsonData = await data.json();

  console.log(jsonData);

  let body = JSON.stringify({
    products: jsonData.seller_products ?? null,
    numPages: 1,
  });

  console.log("body", body);

  return new Response(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
    },
  });
};

export function headers() {
  return {
    "Cache-Control": "max-age=3600, s-maxage=28800",
  };
}

export default function PageComponent() {
  let { products, numPages } = useLoaderData<typeof loader>();
  let { page } = useParams();

  console.log(numPages, page);

  if (typeof page !== "string") {
    return <div>Error</div>;
  }

  return (
    <div className="mx-auto max-w-6xl py-4">
      <Links />
      <ProductGrid products={products} />
      <ul className="w-full flex items-center justify-between pt-1 pb-4 max-w-7xl mx-auto overflow-hidden mt-2">
        {parseInt(page) > 1 ? (
          <li>
            <Link
              to={`/${parseInt(page) - 1}`}
              className="px-2 py-1 bg-white text-lg text-gray-800 rounded"
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
              className="px-2 py-1 bg-white text-lg text-gray-800 rounded"
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
