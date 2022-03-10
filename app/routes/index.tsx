import { LoaderFunction, useLoaderData } from "remix";
import ProductGrid from "~/components/ProductGrid";
import type { MetaFunction } from "remix";
import { Link } from "react-router-dom";
import FeaturedProduct from "~/components/FeaturedProduct";
import LinkCard from "~/components/LinkCard";
import Links from "~/components/Links";

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
