import {
  Links,
  ProductGrid
} from "/build/_shared/chunk-BGZWP5JR.js";
import {
  Link,
  init_dist,
  useLoaderData
} from "/build/_shared/chunk-M3PL6MPY.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6L5LID2N.js";

// empty-module:~/services/redis.server
var require_redis = __commonJS({
  "empty-module:~/services/redis.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/index.tsx
init_dist();

// app/components/FeaturedProduct.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function FeaturedProduct({
  title,
  link,
  image
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-[300px] bg-white p-8 rounded shadow overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full flex flex-col justify-center items-start z-40 relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold text-lg text-sky-800", children: "New Arrival!" }, void 0, false, {
        fileName: "app/components/FeaturedProduct.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl mb-3  max-w-lg", children: title }, void 0, false, {
        fileName: "app/components/FeaturedProduct.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "a",
        {
          href: link,
          target: "_blank",
          className: "text-white bg-sky-800 px-3 py-1 rounded shadow font-bold text-xl",
          children: "Buy Now"
        },
        void 0,
        false,
        {
          fileName: "app/components/FeaturedProduct.tsx",
          lineNumber: 15,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/FeaturedProduct.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: image,
        className: "absolute right-12 -bottom-2 rotate-2 w-64 z-10"
      },
      void 0,
      false,
      {
        fileName: "app/components/FeaturedProduct.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute z-10 inset-0 w-full h-full bg-white opacity-30" }, void 0, false, {
      fileName: "app/components/FeaturedProduct.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/FeaturedProduct.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_redis = __toESM(require_redis());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Amann Home Goods",
    description: "Incredible products for your incredible home."
  };
};
function Index() {
  let { products, numPages } = useLoaderData();
  console.log(numPages);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-6xl py-4 px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 gap-2 md:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        FeaturedProduct,
        {
          title: "Reusable Silicone Drinking Straws",
          link: "https://www.amazon.com/Reusable-Silicone-Drinking-Cleaning-Eco-Friendly/dp/B09PRPYLGG/ref=sr_1_6?m=A1EEYPEVF7DX6F&qid=1646346663&s=merchant-items&sr=1-6&tag=amannhomego04-20",
          image: "/images/straws.jpg"
        },
        void 0,
        false,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 77,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        FeaturedProduct,
        {
          title: "Air Fryer Paper Liners",
          link: "https://www.amazon.com/dp/B09PYF7YFG?&linkCode=sl1&tag=amannhomego04-20&linkId=2ae2a165f73e3c2ad08166b6a92615da&language=en_US&ref_=as_li_ss_tl",
          image: "https://m.media-amazon.com/images/I/31b9CuuxsVL._AC_.jpg"
        },
        void 0,
        false,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 82,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "font-bold text-4xl pt-6 pb-4", children: "All Products" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductGrid, { products }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-7xl mx-auto overflow-hidden flex items-center justify-between mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", {}, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      numPages > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Link,
        {
          to: "/2",
          className: "px-2 py-1 bg-white text-gray-800 rounded text-lg",
          children: "Next Page >"
        },
        void 0,
        false,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 94,
          columnNumber: 11
        },
        this
      ) : null
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full text-center px-2 mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-xl", children: "There was an issue getting the products. Please try again later or check out our links above." }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 109,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
}
export {
  ErrorBoundary,
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/index-6TRYRMXL.js.map
