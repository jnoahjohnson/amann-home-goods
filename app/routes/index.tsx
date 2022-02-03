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

  let body = JSON.stringify({
    products: jsonData.seller_products ?? null,
  });

  return new Response(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "s-maxage=28800",
    },
  });
};

export function headers() {
  return {
    "Cache-Control": "max-age=3600, s-maxage=28800",
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
        <img src="/images/logo.png" className="h-28" />
      </div>
      <ul className="mx-auto py-2 flex items-center justify-center space-x-4 text-xl font-semibold hover:text-gray-600">
        <li>
          <a href="https://www.amazon.com/shops/amannhomegoods">Store Home</a>
        </li>
        <li>
          <a href="https://www.amazon.com/Best-Sellers/zgbs?&linkCode=ll2&tag=amannhomegood-20&linkId=5a44ab3908fbce312dcaaa61ca1f9f66&language=en_US&ref_=as_li_ss_tl">
            Amazon Best Sellers
          </a>
        </li>
        <li>
          <a href="https://www.amazon.com/clearance/s?k=clearance+items&linkCode=ll2&tag=amannhomegood-20&linkId=109e6256f4a100c07101a35b1601f9b2&language=en_US&ref_=as_li_ss_tl">
            Amazon Clearance Items
          </a>
        </li>
      </ul>
      <ProductGrid products={products} />
    </div>
  );
}
