import { LoaderFunction, useLoaderData } from "remix";
import ProductGrid from "~/components/ProductGrid";
import type { MetaFunction } from "remix";
import { Link } from "react-router-dom";
import FeaturedProduct from "~/components/FeaturedProduct";
import LinkCard from "~/components/LinkCard";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
        <LinkCard
          title="Store Home"
          link="https://www.amazon.com/shops/amannhomegoods&tag=amannhomegood-20"
          img="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
        />
        <LinkCard
          title="Amazon Best Sellers"
          link="https://www.amazon.com/Best-Sellers/zgbs?&linkCode=ll2&tag=amannhomegood-20&linkId=5a44ab3908fbce312dcaaa61ca1f9f66&language=en_US&ref_=as_li_ss_tl"
          img="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1796&q=80"
        />
        <LinkCard
          title="Amazon Clearance"
          link="https://www.amazon.com/clearance/s?k=clearance+items&linkCode=ll2&tag=amannhomegood-20&linkId=109e6256f4a100c07101a35b1601f9b2&language=en_US&ref_=as_li_ss_tl"
          img="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
        />
      </div>
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
