/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { StarIcon } from "@heroicons/react/solid";

const products = [
  {
    id: 1,
    name: "Organize Basic Set (Walnut)",
    price: "$149",
    rating: 5,
    reviewCount: 38,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 2,
    name: "Organize Pen Holder",
    price: "$15",
    rating: 5,
    reviewCount: 18,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 3,
    name: "Organize Sticky Note Holder",
    price: "$15",
    rating: 5,
    reviewCount: 14,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 4,
    name: "Organize Phone Holder",
    price: "$15",
    rating: 4,
    reviewCount: 21,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  // More products...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// { products }: { products: any }

export default function ProductGrid({ products }: { products: any }) {
  const formatCurrency = (currency: string) => {
    var a = parseFloat(currency);

    var options = { style: "currency", currency: "USD" };

    let formatted = new Intl.NumberFormat("en-US", options).format(a);

    return formatted;
  };
  return (
    <div className="">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product: any) => (
            <div
              key={product.position}
              className="group relative p-4 sm:p-6 bg-white rounded shadow"
            >
              {/* <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto"
              /> */}
              <div className="rounded-lg overflow-hidden bg-white aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-center object-contain"
                />
              </div>
              <div className="pt-10 pb-4 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={`${product.link}&tag=amannhomego04-20`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </a>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "flex-shrink-0 h-5 w-5"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.ratings_total} reviews
                  </p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">
                  {product.price?.value
                    ? `${formatCurrency(product.price.value)}`
                    : "Check Price on Amazon"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
