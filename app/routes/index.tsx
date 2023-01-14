import type {
  MetaFunction,
  LoaderArgs,
  HeadersFunction,
} from "@remix-run/node";
import ProductGrid from "~/components/ProductGrid";
import { Link } from "react-router-dom";
import FeaturedProduct from "~/components/FeaturedProduct";
import Links from "~/components/Links";
import { useLoaderData } from "@remix-run/react";

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

export let headers: HeadersFunction = ({ loaderHeaders }) => {
  return {
    "Cache-Control": loaderHeaders.get("Cache-Control") || "",
  };
};

export default function Index() {
  let { products, numPages } = useLoaderData<typeof loader>();

  console.log(numPages);

  return (
    <div className="mx-auto max-w-6xl py-4 px-6">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <FeaturedProduct
          title="Reusable Silicone Drinking Straws"
          link="https://www.amazon.com/Reusable-Silicone-Drinking-Cleaning-Eco-Friendly/dp/B09PRPYLGG/ref=sr_1_6?m=A1EEYPEVF7DX6F&qid=1646346663&s=merchant-items&sr=1-6&tag=amannhomego04-20"
          image="/images/straws.jpg"
        />
        <FeaturedProduct
          title="Air Fryer Paper Liners"
          link="https://www.amazon.com/dp/B09PYF7YFG?&linkCode=sl1&tag=amannhomego04-20&linkId=2ae2a165f73e3c2ad08166b6a92615da&language=en_US&ref_=as_li_ss_tl"
          image="https://m.media-amazon.com/images/I/31b9CuuxsVL._AC_.jpg"
        />
      </div>
      <Links />
      <h1 className="font-bold text-4xl pt-6 pb-4">All Products</h1>
      <ProductGrid products={products} />
      <div className="max-w-7xl mx-auto overflow-hidden flex items-center justify-between mt-2">
        <div></div>
        {numPages > 1 ? (
          <Link
            to="/2"
            className="px-2 py-1 bg-white text-gray-800 rounded text-lg"
          >
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
