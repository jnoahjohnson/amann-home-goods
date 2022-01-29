import { LoaderFunction, useLoaderData } from "remix";
import ProductGrid from "~/components/ProductGrid";

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

export default function Index() {
  let { products } = useLoaderData();

  console.log(products[0].price);

  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
}
