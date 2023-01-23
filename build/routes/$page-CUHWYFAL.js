import {
  Links,
  ProductGrid
} from "/build/_shared/chunk-BGZWP5JR.js";
import {
  Link,
  init_dist,
  useLoaderData,
  useParams
} from "/build/_shared/chunk-M3PL6MPY.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6L5LID2N.js";

// app/routes/$page.tsx
init_dist();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Amann Home Goods",
    description: "Incredible products for your incredible home."
  };
};
function PageComponent() {
  let { products, numPages } = useLoaderData();
  let { page } = useParams();
  console.log(numPages, page);
  if (typeof page !== "string") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Error" }, void 0, false, {
      fileName: "app/routes/$page.tsx",
      lineNumber: 61,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-6xl py-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
      fileName: "app/routes/$page.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductGrid, { products }, void 0, false, {
      fileName: "app/routes/$page.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "w-full flex items-center justify-between pt-1 pb-4 max-w-7xl mx-auto overflow-hidden mt-2", children: [
      parseInt(page) > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: `/${parseInt(page) - 1}`,
          className: "px-2 py-1 bg-white text-lg text-gray-800 rounded",
          children: [
            "<",
            " Previous Page"
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/$page.tsx",
          lineNumber: 71,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/$page.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {}, void 0, false, {
        fileName: "app/routes/$page.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      parseInt(page) + 1 <= parseInt(numPages) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: `/${parseInt(page) + 1}`,
          className: "px-2 py-1 bg-white text-lg text-gray-800 rounded",
          children: "Next Page >"
        },
        void 0,
        false,
        {
          fileName: "app/routes/$page.tsx",
          lineNumber: 83,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/$page.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/$page.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$page.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center px-2 mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl", children: "There was an issue getting the products. Please try again later or check out our links above." }, void 0, false, {
    fileName: "app/routes/$page.tsx",
    lineNumber: 99,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/$page.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}
export {
  ErrorBoundary,
  PageComponent as default,
  meta
};
//# sourceMappingURL=/build/routes/$page-CUHWYFAL.js.map
