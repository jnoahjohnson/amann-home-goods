var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/noahjohnson/Dev/amann/amann-home-goods/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());
var import_react_ga = __toModule(require("react-ga"));

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-MPLURYQB.css";

// route-module:/Users/noahjohnson/Dev/amann/amann-home-goods/app/root.tsx
var import_react = __toModule(require("react"));
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  (0, import_react.useEffect)(() => {
    import_react_ga.default.initialize("UA-219136583-1");
  }, []);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route-module:/Users/noahjohnson/Dev/amann/amann-home-goods/app/routes/$page.tsx
var page_exports = {};
__export(page_exports, {
  default: () => PageComponent,
  headers: () => headers,
  loader: () => loader,
  meta: () => meta2
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/components/ProductGrid.tsx
init_react();
var import_solid = __toModule(require("@heroicons/react/solid"));
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function ProductGrid({ products }) {
  const formatCurrency = (currency) => {
    var a = parseFloat(currency);
    var options = { style: "currency", currency: "USD" };
    let formatted = new Intl.NumberFormat("en-US", options).format(a);
    return formatted;
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "sr-only"
  }, "Products"), /* @__PURE__ */ React.createElement("div", {
    className: "-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4"
  }, products.map((product) => {
    var _a;
    return /* @__PURE__ */ React.createElement("div", {
      key: product.position,
      className: "group relative p-4 border-r border-b border-gray-200 sm:p-6"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "rounded-lg overflow-hidden bg-white aspect-w-1 aspect-h-1 group-hover:opacity-75"
    }, /* @__PURE__ */ React.createElement("img", {
      src: product.image,
      alt: product.title,
      className: "w-full h-full object-center object-contain"
    })), /* @__PURE__ */ React.createElement("div", {
      className: "pt-10 pb-4 text-center"
    }, /* @__PURE__ */ React.createElement("h3", {
      className: "text-sm font-medium text-gray-900"
    }, /* @__PURE__ */ React.createElement("a", {
      href: `${product.link}&tag=amannhomegood-20`
    }, /* @__PURE__ */ React.createElement("span", {
      "aria-hidden": "true",
      className: "absolute inset-0"
    }), product.title)), /* @__PURE__ */ React.createElement("div", {
      className: "mt-3 flex flex-col items-center"
    }, /* @__PURE__ */ React.createElement("p", {
      className: "sr-only"
    }, product.rating, " out of 5 stars"), /* @__PURE__ */ React.createElement("div", {
      className: "flex items-center"
    }, [0, 1, 2, 3, 4].map((rating) => /* @__PURE__ */ React.createElement(import_solid.StarIcon, {
      key: rating,
      className: classNames(product.rating > rating ? "text-yellow-400" : "text-gray-200", "flex-shrink-0 h-5 w-5"),
      "aria-hidden": "true"
    }))), /* @__PURE__ */ React.createElement("p", {
      className: "mt-1 text-sm text-gray-500"
    }, product.ratings_total, " reviews")), /* @__PURE__ */ React.createElement("p", {
      className: "mt-4 text-base font-medium text-gray-900"
    }, ((_a = product.price) == null ? void 0 : _a.value) ? `${formatCurrency(product.price.value)}` : "Check Price on Amazon")));
  }))));
}

// route-module:/Users/noahjohnson/Dev/amann/amann-home-goods/app/routes/$page.tsx
var import_react_router_dom = __toModule(require("react-router-dom"));
var meta2 = () => {
  return {
    title: "Amann Home Goods",
    description: "Incredible products for your incredible home."
  };
};
var loader = async ({ params }) => {
  let data = await fetch(`https://amazon-amann.fly.dev/products?page=${params.page}`);
  let jsonData = await data.json();
  console.log(jsonData);
  let body = JSON.stringify({
    products: jsonData.seller_products ?? null,
    numPages: jsonData.pagination.total_pages
  });
  return new Response(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "s-maxage=86400, max-age=86400, public"
    }
  });
};
function headers() {
  return {
    "Cache-Control": "max-age=3600, s-maxage=28800"
  };
}
function PageComponent() {
  let { products, numPages } = (0, import_remix3.useLoaderData)();
  let { page } = (0, import_remix3.useParams)();
  console.log(numPages, page);
  if (typeof page !== "string") {
    return /* @__PURE__ */ React.createElement("div", null, "Error");
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-6xl py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center w-full flex items-center justify-center mb-2"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/logo.png",
    className: "h-28"
  })), /* @__PURE__ */ React.createElement("ul", {
    className: "mx-auto py-2 flex items-center justify-center space-x-4 text-xl font-semibold flex-wrap max-w-full"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "text-gray-800 hover:text-gray-600"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.amazon.com/shops/amannhomegoods&tag=amannhomegood-20"
  }, "Store Home")), /* @__PURE__ */ React.createElement("li", {
    className: "text-gray-800 hover:text-gray-600"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.amazon.com/Best-Sellers/zgbs?&linkCode=ll2&tag=amannhomegood-20&linkId=5a44ab3908fbce312dcaaa61ca1f9f66&language=en_US&ref_=as_li_ss_tl"
  }, "Amazon Best Sellers")), /* @__PURE__ */ React.createElement("li", {
    className: "text-gray-800 hover:text-gray-600"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.amazon.com/clearance/s?k=clearance+items&linkCode=ll2&tag=amannhomegood-20&linkId=109e6256f4a100c07101a35b1601f9b2&language=en_US&ref_=as_li_ss_tl"
  }, "Amazon Clearance Items"))), /* @__PURE__ */ React.createElement(ProductGrid, {
    products
  }), /* @__PURE__ */ React.createElement("ul", {
    className: "w-full flex items-center justify-between pt-1 pb-4 max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8"
  }, parseInt(page) > 1 ? /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: `/${parseInt(page) - 1}`
  }, "Previous Page")) : /* @__PURE__ */ React.createElement("li", null), parseInt(page) + 1 <= parseInt(numPages) ? /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: `/${parseInt(page) + 1}`
  }, "Next Page")) : null));
}

// route-module:/Users/noahjohnson/Dev/amann/amann-home-goods/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  headers: () => headers2,
  loader: () => loader2,
  meta: () => meta3
});
init_react();
var import_remix4 = __toModule(require_remix());
var import_react_router_dom2 = __toModule(require("react-router-dom"));
var meta3 = () => {
  return {
    title: "Amann Home Goods",
    description: "Incredible products for your incredible home."
  };
};
var loader2 = async () => {
  let data = await fetch(`https://amazon-amann.fly.dev/products?page=1`);
  let jsonData = await data.json();
  console.log(jsonData);
  let body = JSON.stringify({
    products: jsonData.seller_products ?? null,
    numPages: jsonData.pagination.total_pages
  });
  return new Response(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "s-maxage=86400, max-age=86400, public"
    }
  });
};
function headers2() {
  return {
    "Cache-Control": "max-age=3600, s-maxage=28800"
  };
}
function Index() {
  let { products, numPages } = (0, import_remix4.useLoaderData)();
  console.log(numPages);
  return /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-6xl py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center w-full flex items-center justify-center mb-2"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/logo.png",
    className: "h-28"
  })), /* @__PURE__ */ React.createElement("ul", {
    className: "mx-auto py-2 flex items-center justify-center space-x-4 text-xl font-semibold flex-wrap max-w-full"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "text-gray-800 hover:text-gray-600"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.amazon.com/shops/amannhomegoods"
  }, "Store Home")), /* @__PURE__ */ React.createElement("li", {
    className: "text-gray-800 hover:text-gray-600"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.amazon.com/Best-Sellers/zgbs?&linkCode=ll2&tag=amannhomegood-20&linkId=5a44ab3908fbce312dcaaa61ca1f9f66&language=en_US&ref_=as_li_ss_tl"
  }, "Amazon Best Sellers")), /* @__PURE__ */ React.createElement("li", {
    className: "text-gray-800 hover:text-gray-600"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.amazon.com/clearance/s?k=clearance+items&linkCode=ll2&tag=amannhomegood-20&linkId=109e6256f4a100c07101a35b1601f9b2&language=en_US&ref_=as_li_ss_tl"
  }, "Amazon Clearance Items"))), /* @__PURE__ */ React.createElement(ProductGrid, {
    products
  }), /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8 flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", null), numPages > 1 ? /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    to: "/2"
  }, "Next Page") : null));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$page": {
    id: "routes/$page",
    parentId: "root",
    path: ":page",
    index: void 0,
    caseSensitive: void 0,
    module: page_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9ub2Foam9obnNvbi9EZXYvYW1hbm4vYW1hbm4taG9tZS1nb29kcy9hcHAvcm9vdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9ub2Foam9obnNvbi9EZXYvYW1hbm4vYW1hbm4taG9tZS1nb29kcy9hcHAvcm91dGVzLyRwYWdlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Qcm9kdWN0R3JpZC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9ub2Foam9obnNvbi9EZXYvYW1hbm4vYW1hbm4taG9tZS1nb29kcy9hcHAvcm91dGVzL2luZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL25vYWhqb2huc29uL0Rldi9hbWFubi9hbWFubi1ob21lLWdvb2RzL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9ub2Foam9obnNvbi9EZXYvYW1hbm4vYW1hbm4taG9tZS1nb29kcy9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL25vYWhqb2huc29uL0Rldi9hbWFubi9hbWFubi1ob21lLWdvb2RzL2FwcC9yb3V0ZXMvJHBhZ2UudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9ub2Foam9obnNvbi9EZXYvYW1hbm4vYW1hbm4taG9tZS1nb29kcy9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvJHBhZ2VcIjoge1xuICAgIGlkOiBcInJvdXRlcy8kcGFnZVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIjpwYWdlXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90YWlsd2luZC5jc3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFJlYWN0R0EuaW5pdGlhbGl6ZShcIlVBLTIxOTEzNjU4My0xXCIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgey8qIDxzY3JpcHRcbiAgICAgICAgYXN5bmNcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1VQS0yMTkxMzY1ODMtMVwiXG4gICAgICA+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0PlxuICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTsgZnVuY3Rpb24gZ3RhZygpXG4gICAgICAgIHtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpfVxuICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpOyBndGFnKCdjb25maWcnLCAnVUEtMjE5MTM2NTgzLTEnKTtcbiAgICAgIDwvc2NyaXB0PiAqL31cblxuICAgICAgPGJvZHk+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSwgdXNlUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgUHJvZHVjdEdyaWQgZnJvbSBcIn4vY29tcG9uZW50cy9Qcm9kdWN0R3JpZFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkFtYW5uIEhvbWUgR29vZHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbmNyZWRpYmxlIHByb2R1Y3RzIGZvciB5b3VyIGluY3JlZGlibGUgaG9tZS5cIixcbiAgfTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIC8vIGNvbnN0IHBhcmFtcyA9IHtcbiAgLy8gICBhcGlfa2V5OiBcIkIyNzM0N0M5OUMxMjQyQTVCODFERDNGQkI0NjM2QTk0XCIsXG4gIC8vICAgdHlwZTogXCJzZWxsZXJfcHJvZHVjdHNcIixcbiAgLy8gICBhbWF6b25fZG9tYWluOiBcImFtYXpvbi5jb21cIixcbiAgLy8gICBzZWxsZXJfaWQ6IFwiQTFFRVlQRVZGN0RYNkZcIixcbiAgLy8gfTtcbiAgbGV0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hbWF6b24tYW1hbm4uZmx5LmRldi9wcm9kdWN0cz9wYWdlPSR7cGFyYW1zLnBhZ2V9YFxuICApO1xuXG4gIGxldCBqc29uRGF0YSA9IGF3YWl0IGRhdGEuanNvbigpO1xuXG4gIGNvbnNvbGUubG9nKGpzb25EYXRhKTtcblxuICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICBwcm9kdWN0czoganNvbkRhdGEuc2VsbGVyX3Byb2R1Y3RzID8/IG51bGwsXG4gICAgbnVtUGFnZXM6IGpzb25EYXRhLnBhZ2luYXRpb24udG90YWxfcGFnZXMsXG4gIH0pO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoYm9keSwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJDYWNoZS1Db250cm9sXCI6IFwicy1tYXhhZ2U9ODY0MDAsIG1heC1hZ2U9ODY0MDAsIHB1YmxpY1wiLFxuICAgIH0sXG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWRlcnMoKSB7XG4gIHJldHVybiB7XG4gICAgXCJDYWNoZS1Db250cm9sXCI6IFwibWF4LWFnZT0zNjAwLCBzLW1heGFnZT0yODgwMFwiLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlQ29tcG9uZW50KCkge1xuICBsZXQgeyBwcm9kdWN0cywgbnVtUGFnZXMgfSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgbGV0IHsgcGFnZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgY29uc29sZS5sb2cobnVtUGFnZXMsIHBhZ2UpO1xuXG4gIGlmICh0eXBlb2YgcGFnZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctNnhsIHB5LTRcIj5cbiAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC00eGwgZm9udC1zZW1pYm9sZCBtYi0yXCI+XG4gICAgICAgIEFtYW5uIEhvbWUgR29vZHNcbiAgICAgIDwvaDE+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItMlwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJoLTI4XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm14LWF1dG8gcHktMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTQgdGV4dC14bCBmb250LXNlbWlib2xkIGZsZXgtd3JhcCBtYXgtdy1mdWxsXCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9zaG9wcy9hbWFubmhvbWVnb29kcyZ0YWc9YW1hbm5ob21lZ29vZC0yMFwiPlxuICAgICAgICAgICAgU3RvcmUgSG9tZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5hbWF6b24uY29tL0Jlc3QtU2VsbGVycy96Z2JzPyZsaW5rQ29kZT1sbDImdGFnPWFtYW5uaG9tZWdvb2QtMjAmbGlua0lkPTVhNDRhYjM5MDhmYmNlMzEyZGNhYWE2MWNhMWY5ZjY2Jmxhbmd1YWdlPWVuX1VTJnJlZl89YXNfbGlfc3NfdGxcIj5cbiAgICAgICAgICAgIEFtYXpvbiBCZXN0IFNlbGxlcnNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9jbGVhcmFuY2Uvcz9rPWNsZWFyYW5jZStpdGVtcyZsaW5rQ29kZT1sbDImdGFnPWFtYW5uaG9tZWdvb2QtMjAmbGlua0lkPTEwOWU2MjU2ZjRhMTAwYzA3MTAxYTM1YjE2MDFmOWIyJmxhbmd1YWdlPWVuX1VTJnJlZl89YXNfbGlfc3NfdGxcIj5cbiAgICAgICAgICAgIEFtYXpvbiBDbGVhcmFuY2UgSXRlbXNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPFByb2R1Y3RHcmlkIHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB0LTEgcGItNCBtYXgtdy03eGwgbXgtYXV0byBvdmVyZmxvdy1oaWRkZW4gc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIHtwYXJzZUludChwYWdlKSA+IDEgPyAoXG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89e2AvJHtwYXJzZUludChwYWdlKSAtIDF9YH0+UHJldmlvdXMgUGFnZTwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxsaT48L2xpPlxuICAgICAgICApfVxuICAgICAgICB7cGFyc2VJbnQocGFnZSkgKyAxIDw9IHBhcnNlSW50KG51bVBhZ2VzKSA/IChcbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz17YC8ke3BhcnNlSW50KHBhZ2UpICsgMX1gfT5OZXh0IFBhZ2U8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgIi8qXG4gIFRoaXMgZXhhbXBsZSByZXF1aXJlcyBUYWlsd2luZCBDU1MgdjIuMCsgXG4gIFxuICBUaGlzIGV4YW1wbGUgcmVxdWlyZXMgc29tZSBjaGFuZ2VzIHRvIHlvdXIgY29uZmlnOlxuICBcbiAgYGBgXG4gIC8vIHRhaWx3aW5kLmNvbmZpZy5qc1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyAuLi5cbiAgICBwbHVnaW5zOiBbXG4gICAgICAvLyAuLi5cbiAgICAgIHJlcXVpcmUoJ0B0YWlsd2luZGNzcy9hc3BlY3QtcmF0aW8nKSxcbiAgICBdLFxuICB9XG4gIGBgYFxuKi9cbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcblxuY29uc3QgcHJvZHVjdHMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiBcIk9yZ2FuaXplIEJhc2ljIFNldCAoV2FsbnV0KVwiLFxuICAgIHByaWNlOiBcIiQxNDlcIixcbiAgICByYXRpbmc6IDUsXG4gICAgcmV2aWV3Q291bnQ6IDM4LFxuICAgIGltYWdlU3JjOlxuICAgICAgXCJodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL2NhdGVnb3J5LXBhZ2UtMDUtaW1hZ2UtY2FyZC0wMS5qcGdcIixcbiAgICBpbWFnZUFsdDogXCJUT0RPXCIsXG4gICAgaHJlZjogXCIjXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcIk9yZ2FuaXplIFBlbiBIb2xkZXJcIixcbiAgICBwcmljZTogXCIkMTVcIixcbiAgICByYXRpbmc6IDUsXG4gICAgcmV2aWV3Q291bnQ6IDE4LFxuICAgIGltYWdlU3JjOlxuICAgICAgXCJodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL2NhdGVnb3J5LXBhZ2UtMDUtaW1hZ2UtY2FyZC0wMi5qcGdcIixcbiAgICBpbWFnZUFsdDogXCJUT0RPXCIsXG4gICAgaHJlZjogXCIjXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIk9yZ2FuaXplIFN0aWNreSBOb3RlIEhvbGRlclwiLFxuICAgIHByaWNlOiBcIiQxNVwiLFxuICAgIHJhdGluZzogNSxcbiAgICByZXZpZXdDb3VudDogMTQsXG4gICAgaW1hZ2VTcmM6XG4gICAgICBcImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2Vjb21tZXJjZS1pbWFnZXMvY2F0ZWdvcnktcGFnZS0wNS1pbWFnZS1jYXJkLTAzLmpwZ1wiLFxuICAgIGltYWdlQWx0OiBcIlRPRE9cIixcbiAgICBocmVmOiBcIiNcIixcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIG5hbWU6IFwiT3JnYW5pemUgUGhvbmUgSG9sZGVyXCIsXG4gICAgcHJpY2U6IFwiJDE1XCIsXG4gICAgcmF0aW5nOiA0LFxuICAgIHJldmlld0NvdW50OiAyMSxcbiAgICBpbWFnZVNyYzpcbiAgICAgIFwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZWNvbW1lcmNlLWltYWdlcy9jYXRlZ29yeS1wYWdlLTA1LWltYWdlLWNhcmQtMDQuanBnXCIsXG4gICAgaW1hZ2VBbHQ6IFwiVE9ET1wiLFxuICAgIGhyZWY6IFwiI1wiLFxuICB9LFxuICAvLyBNb3JlIHByb2R1Y3RzLi4uXG5dO1xuXG5mdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXMpIHtcbiAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xufVxuXG4vLyB7IHByb2R1Y3RzIH06IHsgcHJvZHVjdHM6IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RHcmlkKHsgcHJvZHVjdHMgfTogeyBwcm9kdWN0czogYW55IH0pIHtcbiAgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAoY3VycmVuY3k6IHN0cmluZykgPT4ge1xuICAgIHZhciBhID0gcGFyc2VGbG9hdChjdXJyZW5jeSk7XG5cbiAgICB2YXIgb3B0aW9ucyA9IHsgc3R5bGU6IFwiY3VycmVuY3lcIiwgY3VycmVuY3k6IFwiVVNEXCIgfTtcblxuICAgIGxldCBmb3JtYXR0ZWQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiLCBvcHRpb25zKS5mb3JtYXQoYSk7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gb3ZlcmZsb3ctaGlkZGVuIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3Itb25seVwiPlByb2R1Y3RzPC9oMj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1teC1weCBib3JkZXItbCBib3JkZXItZ3JheS0yMDAgZ3JpZCBncmlkLWNvbHMtMiBzbTpteC0wIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00XCI+XG4gICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdDogYW55KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17cHJvZHVjdC5wb3NpdGlvbn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgcC00IGJvcmRlci1yIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBzbTpwLTZcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0b1wiXG4gICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIGFzcGVjdC13LTEgYXNwZWN0LWgtMSBncm91cC1ob3ZlcjpvcGFjaXR5LTc1XCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfVxuICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY2VudGVyIG9iamVjdC1jb250YWluXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMCBwYi00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7cHJvZHVjdC5saW5rfSZ0YWc9YW1hbm5ob21lZ29vZC0yMGB9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNyLW9ubHlcIj57cHJvZHVjdC5yYXRpbmd9IG91dCBvZiA1IHN0YXJzPC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7WzAsIDEsIDIsIDMsIDRdLm1hcCgocmF0aW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFN0YXJJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5yYXRpbmcgPiByYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC15ZWxsb3ctNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTIwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsZXgtc2hyaW5rLTAgaC01IHctNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QucmF0aW5nc190b3RhbH0gcmV2aWV3c1xuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnByaWNlPy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA/IGAke2Zvcm1hdEN1cnJlbmN5KHByb2R1Y3QucHJpY2UudmFsdWUpfWBcbiAgICAgICAgICAgICAgICAgICAgOiBcIkNoZWNrIFByaWNlIG9uIEFtYXpvblwifVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IFByb2R1Y3RHcmlkIGZyb20gXCJ+L2NvbXBvbmVudHMvUHJvZHVjdEdyaWRcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJBbWFubiBIb21lIEdvb2RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSW5jcmVkaWJsZSBwcm9kdWN0cyBmb3IgeW91ciBpbmNyZWRpYmxlIGhvbWUuXCIsXG4gIH07XG59O1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIC8vIGNvbnN0IHBhcmFtcyA9IHtcbiAgLy8gICBhcGlfa2V5OiBcIkIyNzM0N0M5OUMxMjQyQTVCODFERDNGQkI0NjM2QTk0XCIsXG4gIC8vICAgdHlwZTogXCJzZWxsZXJfcHJvZHVjdHNcIixcbiAgLy8gICBhbWF6b25fZG9tYWluOiBcImFtYXpvbi5jb21cIixcbiAgLy8gICBzZWxsZXJfaWQ6IFwiQTFFRVlQRVZGN0RYNkZcIixcbiAgLy8gfTtcbiAgbGV0IGRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hbWF6b24tYW1hbm4uZmx5LmRldi9wcm9kdWN0cz9wYWdlPTFgKTtcblxuICBsZXQganNvbkRhdGEgPSBhd2FpdCBkYXRhLmpzb24oKTtcblxuICBjb25zb2xlLmxvZyhqc29uRGF0YSk7XG5cbiAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgcHJvZHVjdHM6IGpzb25EYXRhLnNlbGxlcl9wcm9kdWN0cyA/PyBudWxsLFxuICAgIG51bVBhZ2VzOiBqc29uRGF0YS5wYWdpbmF0aW9uLnRvdGFsX3BhZ2VzLFxuICB9KTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKGJvZHksIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIFwiQ2FjaGUtQ29udHJvbFwiOiBcInMtbWF4YWdlPTg2NDAwLCBtYXgtYWdlPTg2NDAwLCBwdWJsaWNcIixcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXJzKCkge1xuICByZXR1cm4ge1xuICAgIFwiQ2FjaGUtQ29udHJvbFwiOiBcIm1heC1hZ2U9MzYwMCwgcy1tYXhhZ2U9Mjg4MDBcIixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGxldCB7IHByb2R1Y3RzLCBudW1QYWdlcyB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIGNvbnNvbGUubG9nKG51bVBhZ2VzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy02eGwgcHktNFwiPlxuICAgICAgey8qIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bCBmb250LXNlbWlib2xkIG1iLTJcIj5cbiAgICAgICAgQW1hbm4gSG9tZSBHb29kc1xuICAgICAgPC9oMT4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi0yXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImgtMjhcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibXgtYXV0byBweS0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgZmxleC13cmFwIG1heC13LWZ1bGxcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5hbWF6b24uY29tL3Nob3BzL2FtYW5uaG9tZWdvb2RzXCI+U3RvcmUgSG9tZTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5hbWF6b24uY29tL0Jlc3QtU2VsbGVycy96Z2JzPyZsaW5rQ29kZT1sbDImdGFnPWFtYW5uaG9tZWdvb2QtMjAmbGlua0lkPTVhNDRhYjM5MDhmYmNlMzEyZGNhYWE2MWNhMWY5ZjY2Jmxhbmd1YWdlPWVuX1VTJnJlZl89YXNfbGlfc3NfdGxcIj5cbiAgICAgICAgICAgIEFtYXpvbiBCZXN0IFNlbGxlcnNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9jbGVhcmFuY2Uvcz9rPWNsZWFyYW5jZStpdGVtcyZsaW5rQ29kZT1sbDImdGFnPWFtYW5uaG9tZWdvb2QtMjAmbGlua0lkPTEwOWU2MjU2ZjRhMTAwYzA3MTAxYTM1YjE2MDFmOWIyJmxhbmd1YWdlPWVuX1VTJnJlZl89YXNfbGlfc3NfdGxcIj5cbiAgICAgICAgICAgIEFtYXpvbiBDbGVhcmFuY2UgSXRlbXNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPFByb2R1Y3RHcmlkIHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gb3ZlcmZsb3ctaGlkZGVuIHNtOnB4LTYgbGc6cHgtOCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAge251bVBhZ2VzID4gMSA/IDxMaW5rIHRvPVwiLzJcIj5OZXh0IFBhZ2U8L0xpbms+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFB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
