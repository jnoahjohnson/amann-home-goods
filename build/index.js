var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_react_ga = __toESM(require("react-ga"));

// app/styles/app.css
var app_default = "/build/_assets/app-4W4BULU5.css";

// app/root.tsx
var import_react3 = require("react"), import_jsx_runtime2 = require("react/jsx-runtime");
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({ title: "Amann Home Goods" });
function App() {
  return (0, import_react3.useEffect)(() => {
    import_react_ga.default.initialize("UA-219136583-1");
  }, []), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { className: "pt-8 bg-slate-50", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "text-center w-full flex items-center justify-center mb-2", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: "/images/logo.png", className: "h-24" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/test-page.tsx
var test_page_exports = {};
__export(test_page_exports, {
  default: () => TestPage
});
var import_react4 = require("react"), import_react5 = require("@headlessui/react"), import_outline = require("@heroicons/react/outline"), import_jsx_runtime3 = require("react/jsx-runtime");
var navigation = {
  categories: [
    {
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt: "Models sitting back to back, wearing Basic Tee in black and bone."
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt: "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
          imageAlt: "Model wearing minimalist watch with black wristband and white watch face."
        },
        {
          name: "Carry",
          href: "#",
          imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg",
          imageAlt: "Model opening tan leather long wallet with credit card pockets and cash pouch."
        }
      ]
    },
    {
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
          imageAlt: "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers."
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
          imageAlt: "Model wearing light heather gray t-shirt."
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
          imageAlt: "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body."
        },
        {
          name: "Carry",
          href: "#",
          imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
          imageAlt: "Model putting folded cash into slim card holder olive leather wallet with hand stitching."
        }
      ]
    }
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" }
  ]
}, categories = [
  {
    name: "New Arrivals",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg"
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg"
  },
  {
    name: "Workspace",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg"
  },
  {
    name: "Accessories",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg"
  },
  {
    name: "Sale",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg"
  }
], collections = [
  {
    name: "Handcrafted Collection",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
    imageAlt: "Brown leather key ring with brass metal loops and rivets on wood table.",
    description: "Keep your phone, keys, and wallet together, so you can lose everything at once."
  },
  {
    name: "Organized Desk Collection",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt: "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description: "The rest of the house will still be a mess, but your desk will look great."
  },
  {
    name: "Focus Collection",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
    imageAlt: "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description: "Be more productive than enterprise project managers with a single piece of paper."
  }
], footerNavigation = {
  shop: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" }
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" }
  ],
  account: [
    { name: "Manage Account", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
    { name: "Redeem a Gift Card", href: "#" }
  ],
  connect: [
    { name: "Contact Us", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Pinterest", href: "#" }
  ]
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function TestPage() {
  let [mobileMenuOpen, setMobileMenuOpen] = (0, import_react4.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.Transition.Root, { show: mobileMenuOpen, as: import_react4.Fragment, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      import_react5.Dialog,
      {
        as: "div",
        className: "fixed inset-0 flex z-40 lg:hidden",
        onClose: setMobileMenuOpen,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_react5.Transition.Child,
            {
              as: import_react4.Fragment,
              enter: "transition-opacity ease-linear duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "transition-opacity ease-linear duration-300",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.Dialog.Overlay, { className: "fixed inset-0 bg-black bg-opacity-25" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            import_react5.Transition.Child,
            {
              as: import_react4.Fragment,
              enter: "transition ease-in-out duration-300 transform",
              enterFrom: "-translate-x-full",
              enterTo: "translate-x-0",
              leave: "transition ease-in-out duration-300 transform",
              leaveFrom: "translate-x-0",
              leaveTo: "-translate-x-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "px-4 pt-5 pb-2 flex", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                    "button",
                    {
                      type: "button",
                      className: "-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400",
                      onClick: () => setMobileMenuOpen(!1),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: "Close menu" }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline.XIcon, { className: "h-6 w-6", "aria-hidden": "true" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react5.Tab.Group, { as: "div", className: "mt-2", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.Tab.List, { className: "-mb-px flex px-4 space-x-8", children: navigation.categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      import_react5.Tab,
                      {
                        className: ({ selected }) => classNames(
                          selected ? "text-indigo-600 border-indigo-600" : "text-gray-900 border-transparent",
                          "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                        ),
                        children: category.name
                      },
                      category.name
                    )) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.Tab.Panels, { as: import_react4.Fragment, children: navigation.categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      import_react5.Tab.Panel,
                      {
                        className: "px-4 py-6 space-y-12",
                        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grid grid-cols-2 gap-x-4 gap-y-10", children: category.featured.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "group relative", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                            "img",
                            {
                              src: item.imageSrc,
                              alt: item.imageAlt,
                              className: "object-center object-cover"
                            }
                          ) }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                            "a",
                            {
                              href: item.href,
                              className: "mt-6 block text-sm font-medium text-gray-900",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                                  "span",
                                  {
                                    className: "absolute z-10 inset-0",
                                    "aria-hidden": "true"
                                  }
                                ),
                                item.name
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                            "p",
                            {
                              "aria-hidden": "true",
                              className: "mt-1 text-sm text-gray-500",
                              children: "Shop now"
                            }
                          )
                        ] }, item.name)) })
                      },
                      category.name
                    )) })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "border-t border-gray-200 py-6 px-4 space-y-6", children: navigation.pages.map((page) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "a",
                  {
                    href: page.href,
                    className: "-m-2 p-2 block font-medium text-gray-900",
                    children: page.name
                  }
                ) }, page.name)) })
              ]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative bg-gray-900", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { "aria-hidden": "true", className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "img",
        {
          src: "https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg",
          alt: "",
          className: "w-full h-full object-center object-cover"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "div",
        {
          "aria-hidden": "true",
          className: "absolute inset-0 bg-gray-900 opacity-50"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("header", { className: "relative z-10", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("nav", { "aria-label": "Top", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "backdrop-blur-md backdrop-filter bg-slate-100", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "h-16 flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "hidden lg:flex-1 lg:flex lg:items-center", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { href: "#", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: "Amann Home Goods" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "img",
            {
              className: "h-8 w-auto",
              src: "/images/logo.png",
              alt: ""
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "hidden h-full lg:flex", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.Popover.Group, { className: "px-4 bottom-0 inset-x-0", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "h-full flex justify-center space-x-8", children: [
          navigation.categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.Popover, { className: "flex", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "relative flex", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react5.Popover.Button, { className: "relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-gray-800", children: [
              category.name,
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "span",
                {
                  className: classNames(
                    open ? "bg-white" : "",
                    "absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200"
                  ),
                  "aria-hidden": "true"
                }
              )
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_react5.Transition,
              {
                as: import_react4.Fragment,
                enter: "transition ease-out duration-200",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "transition ease-in duration-150",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react5.Popover.Panel, { className: "absolute top-full inset-x-0 text-sm text-gray-800", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    "div",
                    {
                      className: "absolute inset-0 top-1/2 bg-white shadow",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "relative bg-white", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grid grid-cols-4 gap-y-10 gap-x-8 py-16", children: category.featured.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                    "div",
                    {
                      className: "group relative",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                          "img",
                          {
                            src: item.imageSrc,
                            alt: item.imageAlt,
                            className: "object-center object-cover"
                          }
                        ) }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                          "a",
                          {
                            href: item.href,
                            className: "mt-4 block font-medium text-gray-900",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                                "span",
                                {
                                  className: "absolute z-10 inset-0",
                                  "aria-hidden": "true"
                                }
                              ),
                              item.name
                            ]
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                          "p",
                          {
                            "aria-hidden": "true",
                            className: "mt-1",
                            children: "Shop now"
                          }
                        )
                      ]
                    },
                    item.name
                  )) }) }) })
                ] })
              }
            )
          ] }) }, category.name)),
          navigation.pages.map((page) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "a",
            {
              href: page.href,
              className: "flex items-center text-sm font-medium text-white",
              children: page.name
            },
            page.name
          ))
        ] }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex-1 flex items-center lg:hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "button",
            {
              type: "button",
              className: "-ml-2 p-2 text-white",
              onClick: () => setMobileMenuOpen(!0),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: "Open menu" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline.MenuIcon, { className: "h-6 w-6", "aria-hidden": "true" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { href: "#", className: "ml-2 p-2 text-white", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: "Search" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline.SearchIcon, { className: "w-6 h-6", "aria-hidden": "true" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { href: "#", className: "lg:hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: "Workflow" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "img",
            {
              src: "https://tailwindui.com/img/logos/workflow-mark.svg?color=white",
              alt: "",
              className: "h-8 w-auto"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex-1 flex items-center justify-end", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "a",
            {
              href: "#",
              className: "hidden text-sm font-medium text-white lg:block",
              children: "Search"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center lg:ml-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { href: "#", className: "p-2 text-white lg:hidden", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: "Help" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_outline.QuestionMarkCircleIcon,
                {
                  className: "w-6 h-6",
                  "aria-hidden": "true"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "a",
              {
                href: "#",
                className: "hidden text-sm font-medium text-white lg:block",
                children: "Help"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "ml-4 flow-root lg:ml-8", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
              "a",
              {
                href: "#",
                className: "group -m-2 p-2 flex items-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    import_outline.ShoppingBagIcon,
                    {
                      className: "flex-shrink-0 h-6 w-6 text-white",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "ml-2 text-sm font-medium text-white", children: "0" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: "items in cart, view bag" })
                ]
              }
            ) })
          ] })
        ] })
      ] }) }) }) }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { className: "text-4xl font-extrabold tracking-tight text-white lg:text-6xl", children: "New arrivals are here" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-4 text-xl text-white", children: "The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock." }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "a",
          {
            href: "#",
            className: "mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100",
            children: "Shop New Arrivals"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "section",
        {
          "aria-labelledby": "category-heading",
          className: "pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "h2",
                {
                  id: "category-heading",
                  className: "text-2xl font-extrabold tracking-tight text-gray-900",
                  children: "Shop by Category"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                "a",
                {
                  href: "#",
                  className: "hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block",
                  children: [
                    "Browse all categories",
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { "aria-hidden": "true", children: " \u2192" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mt-4 flow-root", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "-my-2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8", children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
              "a",
              {
                href: category.href,
                className: "relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { "aria-hidden": "true", className: "absolute inset-0", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    "img",
                    {
                      src: category.imageSrc,
                      alt: "",
                      className: "w-full h-full object-center object-cover"
                    }
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    "span",
                    {
                      "aria-hidden": "true",
                      className: "absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "relative mt-auto text-center text-xl font-bold text-white", children: category.name })
                ]
              },
              category.name
            )) }) }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mt-6 px-4 sm:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
              "a",
              {
                href: "#",
                className: "block text-sm font-semibold text-indigo-600 hover:text-indigo-500",
                children: [
                  "Browse all categories",
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { "aria-hidden": "true", children: " \u2192" })
                ]
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "section",
        {
          "aria-labelledby": "social-impact-heading",
          className: "max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8",
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative rounded-lg overflow-hidden", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute inset-0", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "img",
              {
                src: "https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg",
                alt: "",
                className: "w-full h-full object-center object-cover"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative max-w-3xl mx-auto flex flex-col items-center text-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                "h2",
                {
                  id: "social-impact-heading",
                  className: "text-3xl font-extrabold tracking-tight text-white sm:text-4xl",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "block sm:inline", children: "Level up" }),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "block sm:inline", children: "your desk" })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-3 text-xl text-white", children: "Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup." }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "a",
                {
                  href: "#",
                  className: "mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto",
                  children: "Shop Workspace"
                }
              )
            ] }) })
          ] })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "section",
        {
          "aria-labelledby": "collection-heading",
          className: "max-w-xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "h2",
              {
                id: "collection-heading",
                className: "text-2xl font-extrabold tracking-tight text-gray-900",
                children: "Shop by Collection"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-4 text-base text-gray-500", children: "Each season, we collaborate with world-class designers to create a collection inspired by the natural world." }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8", children: collections.map((collection) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
              "a",
              {
                href: collection.href,
                className: "group block",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    "div",
                    {
                      "aria-hidden": "true",
                      className: "aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6",
                      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                        "img",
                        {
                          src: collection.imageSrc,
                          alt: collection.imageAlt,
                          className: "w-full h-full object-center object-cover"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "mt-4 text-base font-semibold text-gray-900", children: collection.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-2 text-sm text-gray-500", children: collection.description })
                ]
              },
              collection.name
            )) })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "section",
        {
          "aria-labelledby": "comfort-heading",
          className: "max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8",
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative rounded-lg overflow-hidden", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute inset-0", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "img",
              {
                src: "https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg",
                alt: "",
                className: "w-full h-full object-center object-cover"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative max-w-3xl mx-auto flex flex-col items-center text-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "h2",
                {
                  id: "comfort-heading",
                  className: "text-3xl font-extrabold tracking-tight text-white sm:text-4xl",
                  children: "Simple productivity"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-3 text-xl text-white", children: "Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles." }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "a",
                {
                  href: "#",
                  className: "mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto",
                  children: "Shop Focus"
                }
              )
            ] }) })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("footer", { "aria-labelledby": "footer-heading", className: "bg-gray-900", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { id: "footer-heading", className: "sr-only", children: "Footer" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "py-20 xl:grid xl:grid-cols-3 xl:gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grid grid-cols-2 gap-8 xl:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-sm font-medium text-white", children: "Shop" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { role: "list", className: "mt-6 space-y-6", children: footerNavigation.shop.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "a",
                  {
                    href: item.href,
                    className: "text-gray-300 hover:text-white",
                    children: item.name
                  }
                ) }, item.name)) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-sm font-medium text-white", children: "Company" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { role: "list", className: "mt-6 space-y-6", children: footerNavigation.company.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "a",
                  {
                    href: item.href,
                    className: "text-gray-300 hover:text-white",
                    children: item.name
                  }
                ) }, item.name)) })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-sm font-medium text-white", children: "Account" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { role: "list", className: "mt-6 space-y-6", children: footerNavigation.account.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "a",
                  {
                    href: item.href,
                    className: "text-gray-300 hover:text-white",
                    children: item.name
                  }
                ) }, item.name)) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-sm font-medium text-white", children: "Connect" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { role: "list", className: "mt-6 space-y-6", children: footerNavigation.connect.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "a",
                  {
                    href: item.href,
                    className: "text-gray-300 hover:text-white",
                    children: item.name
                  }
                ) }, item.name)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "mt-12 md:mt-16 xl:mt-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-sm font-medium text-white", children: "Sign up for our newsletter" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-6 text-sm text-gray-300", children: "The latest deals and savings, sent to your inbox weekly." }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("form", { className: "mt-2 flex sm:max-w-md", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "email-address", className: "sr-only", children: "Email address" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "input",
                {
                  id: "email-address",
                  type: "text",
                  autoComplete: "email",
                  required: !0,
                  className: "appearance-none min-w-0 w-full bg-white border border-white rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "ml-4 flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "button",
                {
                  type: "submit",
                  className: "w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500",
                  children: "Sign up"
                }
              ) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "border-t border-gray-800 py-10", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-gray-400", children: "Copyright \xA9 2021 Clothing Company Inc." }) })
      ] })
    ] })
  ] });
}

// app/routes/$page.tsx
var page_exports = {};
__export(page_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => PageComponent,
  headers: () => headers,
  loader: () => loader,
  meta: () => meta2
});

// app/components/ProductGrid.tsx
var import_solid = require("@heroicons/react/solid"), import_jsx_runtime4 = require("react/jsx-runtime");
function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}
function ProductGrid({ products }) {
  let formatCurrency = (currency) => {
    var a = parseFloat(currency), options = { style: "currency", currency: "USD" };
    return new Intl.NumberFormat("en-US", options).format(a);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "max-w-7xl mx-auto overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "sr-only", children: "Products" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4 gap-4", children: products.map((product) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "div",
        {
          className: "group relative p-4 sm:p-6 bg-white rounded shadow",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "rounded-lg overflow-hidden bg-white aspect-w-1 aspect-h-1 group-hover:opacity-75", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "img",
              {
                src: product.image,
                alt: product.title,
                className: "w-full h-full object-center object-contain"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "pt-10 pb-4 text-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "text-sm font-medium text-gray-900", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("a", { href: `${product.link}&tag=amannhomego04-20`, children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { "aria-hidden": "true", className: "absolute inset-0" }),
                product.title
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mt-3 flex flex-col items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "sr-only", children: [
                  product.rating,
                  " out of 5 stars"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex items-center", children: [0, 1, 2, 3, 4].map((rating) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  import_solid.StarIcon,
                  {
                    className: classNames2(
                      product.rating > rating ? "text-yellow-400" : "text-gray-200",
                      "flex-shrink-0 h-5 w-5"
                    ),
                    "aria-hidden": "true"
                  },
                  rating
                )) }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "mt-1 text-sm text-gray-500", children: [
                  product.ratings_total,
                  " reviews"
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "mt-4 text-base font-medium text-gray-900", children: (_a = product.price) != null && _a.value ? `${formatCurrency(product.price.value)}` : "Check Price on Amazon" })
            ] })
          ]
        },
        product.position
      );
    }) })
  ] }) });
}

// app/routes/$page.tsx
var import_react_router_dom = require("react-router-dom");

// app/components/LinkCard.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function LinkCard({
  title,
  link,
  img
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "a",
    {
      href: link,
      target: "_blank",
      className: "relative rounded p-4 flex items-center justify-center h-[100px] md:h-[165px] overflow-hiddden",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "relative z-30 text-white font-bold text-3xl", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "z-20 w-full h-full absolute bg-gray-800 opacity-50 rounded" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "img",
          {
            src: img,
            className: "z-10 absolute inset-0 w-full h-full object-cover rounded"
          }
        )
      ]
    }
  );
}

// app/components/Links.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Links2() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      LinkCard,
      {
        title: "Store Home",
        link: "https://www.amazon.com/s?i=merchant-items&me=A1EEYPEVF7DX6F&linkCode=ll2&tag=amannhomegood-20&linkId=0ff135e41b42b3212aad27b69324a5cb&language=en_US&ref_=as_li_ss_tl",
        img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      LinkCard,
      {
        title: "Amazon Best Sellers",
        link: "https://www.amazon.com/Best-Sellers/zgbs?&linkCode=ll2&tag=amannhomegood-20&linkId=5a44ab3908fbce312dcaaa61ca1f9f66&language=en_US&ref_=as_li_ss_tl",
        img: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1796&q=80"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      LinkCard,
      {
        title: "Amazon Clearance",
        link: "https://www.amazon.com/clearance/s?k=clearance+items&linkCode=ll2&tag=amannhomegood-20&linkId=109e6256f4a100c07101a35b1601f9b2&language=en_US&ref_=as_li_ss_tl",
        img: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
      }
    )
  ] });
}

// app/routes/$page.tsx
var import_react6 = require("@remix-run/react"), import_jsx_runtime7 = require("react/jsx-runtime"), meta2 = () => ({
  title: "Amann Home Goods",
  description: "Incredible products for your incredible home."
}), loader = async ({ request }) => {
  let params = {
    api_key: "09983A5D1D46484A86D22881C205957A",
    type: "seller_products",
    amazon_domain: "amazon.com",
    seller_id: "A1EEYPEVF7DX6F"
  }, page = new URL(request.url).searchParams.get("page") ?? "1", jsonData = await (await fetch(
    `https://api.rainforestapi.com/request?api_key=${params.api_key}&type=${params.type}&amazon_domain=${params.amazon_domain}&seller_id=${params.seller_id}&page=${page}`
  )).json();
  console.log(jsonData);
  let body = JSON.stringify({
    products: jsonData.seller_products ?? null,
    numPages: 1
  });
  return console.log("body", body), new Response(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`
    }
  });
};
function headers() {
  return {
    "Cache-Control": "max-age=3600, s-maxage=28800"
  };
}
function PageComponent() {
  let { products, numPages } = (0, import_react6.useLoaderData)(), { page } = (0, import_react6.useParams)();
  return console.log(numPages, page), typeof page != "string" ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: "Error" }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "mx-auto max-w-6xl py-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Links2, {}),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ProductGrid, { products }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("ul", { className: "w-full flex items-center justify-between pt-1 pb-4 max-w-7xl mx-auto overflow-hidden mt-2", children: [
      parseInt(page) > 1 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        import_react_router_dom.Link,
        {
          to: `/${parseInt(page) - 1}`,
          className: "px-2 py-1 bg-white text-lg text-gray-800 rounded",
          children: [
            "<",
            " Previous Page"
          ]
        }
      ) }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", {}),
      parseInt(page) + 1 <= parseInt(numPages) ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_react_router_dom.Link,
        {
          to: `/${parseInt(page) + 1}`,
          className: "px-2 py-1 bg-white text-lg text-gray-800 rounded",
          children: "Next Page >"
        }
      ) }) : null
    ] })
  ] });
}
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "w-full text-center px-2 mt-10", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { className: "text-xl", children: "There was an issue getting the products. Please try again later or check out our links above." }) });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Index,
  headers: () => headers2,
  loader: () => loader2,
  meta: () => meta3
});
var import_react_router_dom2 = require("react-router-dom");

// app/components/FeaturedProduct.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function FeaturedProduct({
  title,
  link,
  image
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "relative w-full h-[300px] bg-white p-8 rounded shadow overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "h-full flex flex-col justify-center items-start z-40 relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "font-bold text-lg text-sky-800", children: "New Arrival!" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", { className: "text-5xl mb-3  max-w-lg", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "a",
        {
          href: link,
          target: "_blank",
          className: "text-white bg-sky-800 px-3 py-1 rounded shadow font-bold text-xl",
          children: "Buy Now"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "img",
      {
        src: image,
        className: "absolute right-12 -bottom-2 rotate-2 w-64 z-10"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "absolute z-10 inset-0 w-full h-full bg-white opacity-30" })
  ] });
}

// app/routes/index.tsx
var import_react7 = require("@remix-run/react"), import_jsx_runtime9 = require("react/jsx-runtime"), meta3 = () => ({
  title: "Amann Home Goods",
  description: "Incredible products for your incredible home."
}), loader2 = async ({ request }) => {
  let params = {
    api_key: "09983A5D1D46484A86D22881C205957A",
    type: "seller_products",
    amazon_domain: "amazon.com",
    seller_id: "A1EEYPEVF7DX6F"
  }, page = new URL(request.url).searchParams.get("page") ?? "1", jsonData = await (await fetch(
    `https://api.rainforestapi.com/request?api_key=${params.api_key}&type=${params.type}&amazon_domain=${params.amazon_domain}&seller_id=${params.seller_id}&page=${page}`
  )).json();
  console.log(jsonData);
  let body = JSON.stringify({
    products: jsonData.seller_products ?? null,
    numPages: 1
  });
  return console.log("body", body), new Response(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`
    }
  });
}, headers2 = ({ loaderHeaders }) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") || ""
});
function Index() {
  let { products, numPages } = (0, import_react7.useLoaderData)();
  return console.log(numPages), /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "mx-auto max-w-6xl py-4 px-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "grid grid-cols-1 gap-2 md:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        FeaturedProduct,
        {
          title: "Reusable Silicone Drinking Straws",
          link: "https://www.amazon.com/Reusable-Silicone-Drinking-Cleaning-Eco-Friendly/dp/B09PRPYLGG/ref=sr_1_6?m=A1EEYPEVF7DX6F&qid=1646346663&s=merchant-items&sr=1-6&tag=amannhomego04-20",
          image: "/images/straws.jpg"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        FeaturedProduct,
        {
          title: "Air Fryer Paper Liners",
          link: "https://www.amazon.com/dp/B09PYF7YFG?&linkCode=sl1&tag=amannhomego04-20&linkId=2ae2a165f73e3c2ad08166b6a92615da&language=en_US&ref_=as_li_ss_tl",
          image: "https://m.media-amazon.com/images/I/31b9CuuxsVL._AC_.jpg"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Links2, {}),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { className: "font-bold text-4xl pt-6 pb-4", children: "All Products" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ProductGrid, { products }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "max-w-7xl mx-auto overflow-hidden flex items-center justify-between mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {}),
      numPages > 1 ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        import_react_router_dom2.Link,
        {
          to: "/2",
          className: "px-2 py-1 bg-white text-gray-800 rounded text-lg",
          children: "Next Page >"
        }
      ) : null
    ] })
  ] });
}
function ErrorBoundary2() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "w-full text-center px-2 mt-10", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { className: "text-xl", children: "There was an issue getting the products. Please try again later or check out our links above." }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "5afcc44c", entry: { module: "/build/entry.client-SOYSUZME.js", imports: ["/build/_shared/chunk-4BMLT7ZF.js", "/build/_shared/chunk-57ASHUJG.js", "/build/_shared/chunk-4KDJQ4FX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-URKZZBCY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$page": { id: "routes/$page", parentId: "root", path: ":page", index: void 0, caseSensitive: void 0, module: "/build/routes/$page-7ETP7AVL.js", imports: ["/build/_shared/chunk-676XT6HJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-SY3R6HL2.js", imports: ["/build/_shared/chunk-676XT6HJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/test-page": { id: "routes/test-page", parentId: "root", path: "test-page", index: void 0, caseSensitive: void 0, module: "/build/routes/test-page-OY3ER7FD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-5AFCC44C.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/test-page": {
    id: "routes/test-page",
    parentId: "root",
    path: "test-page",
    index: void 0,
    caseSensitive: void 0,
    module: test_page_exports
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
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
