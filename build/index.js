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
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
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
var app_default = "/build/_assets/app-2GCVHSE3.css";

// app/root.tsx
var import_react3 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({ title: "Amann Home Goods" });
function App() {
  return (0, import_react3.useEffect)(() => {
    import_react_ga.default.initialize("UA-219136583-1");
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "pt-8 bg-slate-50", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center w-full flex items-center justify-center mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/images/logo.png", className: "h-24" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/test-page.tsx
var test_page_exports = {};
__export(test_page_exports, {
  default: () => TestPage
});
var import_react4 = require("react"), import_react5 = require("@headlessui/react"), import_outline = require("@heroicons/react/outline"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Transition.Root, { show: mobileMenuOpen, as: import_react4.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_react5.Dialog,
      {
        as: "div",
        className: "fixed inset-0 flex z-40 lg:hidden",
        onClose: setMobileMenuOpen,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            import_react5.Transition.Child,
            {
              as: import_react4.Fragment,
              enter: "transition-opacity ease-linear duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "transition-opacity ease-linear duration-300",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Dialog.Overlay, { className: "fixed inset-0 bg-black bg-opacity-25" }, void 0, !1, {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 228,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 219,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "px-4 pt-5 pb-2 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    "button",
                    {
                      type: "button",
                      className: "-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400",
                      onClick: () => setMobileMenuOpen(!1),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, !1, {
                          fileName: "app/routes/test-page.tsx",
                          lineNumber: 247,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_outline.XIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                          fileName: "app/routes/test-page.tsx",
                          lineNumber: 248,
                          columnNumber: 19
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/routes/test-page.tsx",
                      lineNumber: 242,
                      columnNumber: 17
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 241,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Tab.Group, { as: "div", className: "mt-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Tab.List, { className: "-mb-px flex px-4 space-x-8", children: navigation.categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                      import_react5.Tab,
                      {
                        className: ({ selected }) => classNames(
                          selected ? "text-indigo-600 border-indigo-600" : "text-gray-900 border-transparent",
                          "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                        ),
                        children: category.name
                      },
                      category.name,
                      !1,
                      {
                        fileName: "app/routes/test-page.tsx",
                        lineNumber: 257,
                        columnNumber: 23
                      },
                      this
                    )) }, void 0, !1, {
                      fileName: "app/routes/test-page.tsx",
                      lineNumber: 255,
                      columnNumber: 19
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/test-page.tsx",
                      lineNumber: 254,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Tab.Panels, { as: import_react4.Fragment, children: navigation.categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                      import_react5.Tab.Panel,
                      {
                        className: "px-4 py-6 space-y-12",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-2 gap-x-4 gap-y-10", children: category.featured.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "group relative", children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                            "img",
                            {
                              src: item.imageSrc,
                              alt: item.imageAlt,
                              className: "object-center object-cover"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/test-page.tsx",
                              lineNumber: 283,
                              columnNumber: 31
                            },
                            this
                          ) }, void 0, !1, {
                            fileName: "app/routes/test-page.tsx",
                            lineNumber: 282,
                            columnNumber: 29
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                            "a",
                            {
                              href: item.href,
                              className: "mt-6 block text-sm font-medium text-gray-900",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                                  "span",
                                  {
                                    className: "absolute z-10 inset-0",
                                    "aria-hidden": "true"
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: "app/routes/test-page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 31
                                  },
                                  this
                                ),
                                item.name
                              ]
                            },
                            void 0,
                            !0,
                            {
                              fileName: "app/routes/test-page.tsx",
                              lineNumber: 289,
                              columnNumber: 29
                            },
                            this
                          ),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                            "p",
                            {
                              "aria-hidden": "true",
                              className: "mt-1 text-sm text-gray-500",
                              children: "Shop now"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/test-page.tsx",
                              lineNumber: 299,
                              columnNumber: 29
                            },
                            this
                          )
                        ] }, item.name, !0, {
                          fileName: "app/routes/test-page.tsx",
                          lineNumber: 281,
                          columnNumber: 27
                        }, this)) }, void 0, !1, {
                          fileName: "app/routes/test-page.tsx",
                          lineNumber: 279,
                          columnNumber: 23
                        }, this)
                      },
                      category.name,
                      !1,
                      {
                        fileName: "app/routes/test-page.tsx",
                        lineNumber: 275,
                        columnNumber: 21
                      },
                      this
                    )) }, void 0, !1, {
                      fileName: "app/routes/test-page.tsx",
                      lineNumber: 273,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 253,
                    columnNumber: 15
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 240,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border-t border-gray-200 py-6 px-4 space-y-6", children: navigation.pages.map((page) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  "a",
                  {
                    href: page.href,
                    className: "-m-2 p-2 block font-medium text-gray-900",
                    children: page.name
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 317,
                    columnNumber: 19
                  },
                  this
                ) }, page.name, !1, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 316,
                  columnNumber: 17
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 314,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 231,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/test-page.tsx",
        lineNumber: 214,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/test-page.tsx",
      lineNumber: 213,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative bg-gray-900", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { "aria-hidden": "true", className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "img",
        {
          src: "https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg",
          alt: "",
          className: "w-full h-full object-center object-cover"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 334,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/test-page.tsx",
        lineNumber: 333,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "div",
        {
          "aria-hidden": "true",
          className: "absolute inset-0 bg-gray-900 opacity-50"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 340,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "relative z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { "aria-label": "Top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "backdrop-blur-md backdrop-filter bg-slate-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-16 flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden lg:flex-1 lg:flex lg:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Amann Home Goods" }, void 0, !1, {
            fileName: "app/routes/test-page.tsx",
            lineNumber: 356,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "img",
            {
              className: "h-8 w-auto",
              src: "/images/logo.png",
              alt: ""
            },
            void 0,
            !1,
            {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 357,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 355,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 354,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden h-full lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Popover.Group, { className: "px-4 bottom-0 inset-x-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-full flex justify-center space-x-8", children: [
          navigation.categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Popover, { className: "flex", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Popover.Button, { className: "relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-gray-800", children: [
              category.name,
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "span",
                {
                  className: classNames(
                    open ? "bg-white" : "",
                    "absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200"
                  ),
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 376,
                  columnNumber: 39
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 374,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 373,
              columnNumber: 35
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              import_react5.Transition,
              {
                as: import_react4.Fragment,
                enter: "transition ease-out duration-200",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "transition ease-in duration-150",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Popover.Panel, { className: "absolute top-full inset-x-0 text-sm text-gray-800", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    "div",
                    {
                      className: "absolute inset-0 top-1/2 bg-white shadow",
                      "aria-hidden": "true"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/test-page.tsx",
                      lineNumber: 397,
                      columnNumber: 39
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-4 gap-y-10 gap-x-8 py-16", children: category.featured.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    "div",
                    {
                      className: "group relative",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                          "img",
                          {
                            src: item.imageSrc,
                            alt: item.imageAlt,
                            className: "object-center object-cover"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/test-page.tsx",
                            lineNumber: 411,
                            columnNumber: 51
                          },
                          this
                        ) }, void 0, !1, {
                          fileName: "app/routes/test-page.tsx",
                          lineNumber: 410,
                          columnNumber: 49
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                          "a",
                          {
                            href: item.href,
                            className: "mt-4 block font-medium text-gray-900",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                                "span",
                                {
                                  className: "absolute z-10 inset-0",
                                  "aria-hidden": "true"
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "app/routes/test-page.tsx",
                                  lineNumber: 421,
                                  columnNumber: 51
                                },
                                this
                              ),
                              item.name
                            ]
                          },
                          void 0,
                          !0,
                          {
                            fileName: "app/routes/test-page.tsx",
                            lineNumber: 417,
                            columnNumber: 49
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                          "p",
                          {
                            "aria-hidden": "true",
                            className: "mt-1",
                            children: "Shop now"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/test-page.tsx",
                            lineNumber: 427,
                            columnNumber: 49
                          },
                          this
                        )
                      ]
                    },
                    item.name,
                    !0,
                    {
                      fileName: "app/routes/test-page.tsx",
                      lineNumber: 406,
                      columnNumber: 47
                    },
                    this
                  )) }, void 0, !1, {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 404,
                    columnNumber: 43
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 403,
                    columnNumber: 41
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 402,
                    columnNumber: 39
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 395,
                  columnNumber: 37
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 386,
                columnNumber: 35
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/test-page.tsx",
            lineNumber: 372,
            columnNumber: 33
          }, this) }, category.name, !1, {
            fileName: "app/routes/test-page.tsx",
            lineNumber: 370,
            columnNumber: 29
          }, this)),
          navigation.pages.map((page) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "a",
            {
              href: page.href,
              className: "flex items-center text-sm font-medium text-white",
              children: page.name
            },
            page.name,
            !1,
            {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 446,
              columnNumber: 29
            },
            this
          ))
        ] }, void 0, !0, {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 368,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 367,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 365,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1 flex items-center lg:hidden", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "button",
            {
              type: "button",
              className: "-ml-2 p-2 text-white",
              onClick: () => setMobileMenuOpen(!0),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Open menu" }, void 0, !1, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 465,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_outline.MenuIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 466,
                  columnNumber: 25
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 460,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#", className: "ml-2 p-2 text-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Search" }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 471,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_outline.SearchIcon, { className: "w-6 h-6", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 472,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/test-page.tsx",
            lineNumber: 470,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 459,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#", className: "lg:hidden", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Workflow" }, void 0, !1, {
            fileName: "app/routes/test-page.tsx",
            lineNumber: 478,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "img",
            {
              src: "https://tailwindui.com/img/logos/workflow-mark.svg?color=white",
              alt: "",
              className: "h-8 w-auto"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 479,
              columnNumber: 23
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 477,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1 flex items-center justify-end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "a",
            {
              href: "#",
              className: "hidden text-sm font-medium text-white lg:block",
              children: "Search"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 487,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center lg:ml-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#", className: "p-2 text-white lg:hidden", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Help" }, void 0, !1, {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 497,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                import_outline.QuestionMarkCircleIcon,
                {
                  className: "w-6 h-6",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 498,
                  columnNumber: 27
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 496,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "a",
              {
                href: "#",
                className: "hidden text-sm font-medium text-white lg:block",
                children: "Help"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 503,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ml-4 flow-root lg:ml-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "a",
              {
                href: "#",
                className: "group -m-2 p-2 flex items-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    import_outline.ShoppingBagIcon,
                    {
                      className: "flex-shrink-0 h-6 w-6 text-white",
                      "aria-hidden": "true"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/test-page.tsx",
                      lineNumber: 516,
                      columnNumber: 29
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "ml-2 text-sm font-medium text-white", children: "0" }, void 0, !1, {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 520,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "items in cart, view bag" }, void 0, !1, {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 523,
                    columnNumber: 29
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 512,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 511,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/test-page.tsx",
            lineNumber: 494,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 486,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/test-page.tsx",
        lineNumber: 352,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/test-page.tsx",
        lineNumber: 351,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/test-page.tsx",
        lineNumber: 350,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/test-page.tsx",
        lineNumber: 349,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/test-page.tsx",
        lineNumber: 347,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/test-page.tsx",
        lineNumber: 346,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-4xl font-extrabold tracking-tight text-white lg:text-6xl", children: "New arrivals are here" }, void 0, !1, {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 538,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-4 text-xl text-white", children: "The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock." }, void 0, !1, {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 541,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "a",
          {
            href: "#",
            className: "mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100",
            children: "Shop New Arrivals"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/test-page.tsx",
            lineNumber: 546,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/test-page.tsx",
        lineNumber: 537,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/test-page.tsx",
      lineNumber: 331,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "section",
        {
          "aria-labelledby": "category-heading",
          className: "pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "h2",
                {
                  id: "category-heading",
                  className: "text-2xl font-extrabold tracking-tight text-gray-900",
                  children: "Shop by Category"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 562,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "a",
                {
                  href: "#",
                  className: "hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block",
                  children: [
                    "Browse all categories",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { "aria-hidden": "true", children: " \u2192" }, void 0, !1, {
                      fileName: "app/routes/test-page.tsx",
                      lineNumber: 572,
                      columnNumber: 36
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 568,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 561,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "-my-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8", children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "a",
              {
                href: category.href,
                className: "relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { "aria-hidden": "true", className: "absolute inset-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    "img",
                    {
                      src: category.imageSrc,
                      alt: "",
                      className: "w-full h-full object-center object-cover"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/test-page.tsx",
                      lineNumber: 587,
                      columnNumber: 25
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 586,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    "span",
                    {
                      "aria-hidden": "true",
                      className: "absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/test-page.tsx",
                      lineNumber: 593,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "relative mt-auto text-center text-xl font-bold text-white", children: category.name }, void 0, !1, {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 597,
                    columnNumber: 23
                  }, this)
                ]
              },
              category.name,
              !0,
              {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 581,
                columnNumber: 21
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 579,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 578,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 577,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 576,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6 px-4 sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "a",
              {
                href: "#",
                className: "block text-sm font-semibold text-indigo-600 hover:text-indigo-500",
                children: [
                  "Browse all categories",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { "aria-hidden": "true", children: " \u2192" }, void 0, !1, {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 612,
                    columnNumber: 36
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 608,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 607,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 557,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "section",
        {
          "aria-labelledby": "social-impact-heading",
          className: "max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative rounded-lg overflow-hidden", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "img",
              {
                src: "https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg",
                alt: "",
                className: "w-full h-full object-center object-cover"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 624,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 623,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative max-w-3xl mx-auto flex flex-col items-center text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "h2",
                {
                  id: "social-impact-heading",
                  className: "text-3xl font-extrabold tracking-tight text-white sm:text-4xl",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "block sm:inline", children: "Level up" }, void 0, !1, {
                      fileName: "app/routes/test-page.tsx",
                      lineNumber: 636,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "block sm:inline", children: "your desk" }, void 0, !1, {
                      fileName: "app/routes/test-page.tsx",
                      lineNumber: 637,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 632,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-3 text-xl text-white", children: "Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup." }, void 0, !1, {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 639,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "a",
                {
                  href: "#",
                  className: "mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto",
                  children: "Shop Workspace"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 645,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 631,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 630,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/test-page.tsx",
            lineNumber: 622,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 618,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "section",
        {
          "aria-labelledby": "collection-heading",
          className: "max-w-xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "h2",
              {
                id: "collection-heading",
                className: "text-2xl font-extrabold tracking-tight text-gray-900",
                children: "Shop by Collection"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 661,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-4 text-base text-gray-500", children: "Each season, we collaborate with world-class designers to create a collection inspired by the natural world." }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 667,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8", children: collections.map((collection) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "a",
              {
                href: collection.href,
                className: "group block",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    "div",
                    {
                      "aria-hidden": "true",
                      className: "aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                        "img",
                        {
                          src: collection.imageSrc,
                          alt: collection.imageAlt,
                          className: "w-full h-full object-center object-cover"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/test-page.tsx",
                          lineNumber: 683,
                          columnNumber: 19
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/test-page.tsx",
                      lineNumber: 679,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "mt-4 text-base font-semibold text-gray-900", children: collection.name }, void 0, !1, {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 689,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-2 text-sm text-gray-500", children: collection.description }, void 0, !1, {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 692,
                    columnNumber: 17
                  }, this)
                ]
              },
              collection.name,
              !0,
              {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 674,
                columnNumber: 15
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 672,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 657,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "section",
        {
          "aria-labelledby": "comfort-heading",
          className: "max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative rounded-lg overflow-hidden", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "img",
              {
                src: "https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg",
                alt: "",
                className: "w-full h-full object-center object-cover"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 707,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 706,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative max-w-3xl mx-auto flex flex-col items-center text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "h2",
                {
                  id: "comfort-heading",
                  className: "text-3xl font-extrabold tracking-tight text-white sm:text-4xl",
                  children: "Simple productivity"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 715,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-3 text-xl text-white", children: "Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles." }, void 0, !1, {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 721,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "a",
                {
                  href: "#",
                  className: "mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto",
                  children: "Shop Focus"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 727,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 714,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 713,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/test-page.tsx",
            lineNumber: 705,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 701,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/test-page.tsx",
      lineNumber: 555,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { "aria-labelledby": "footer-heading", className: "bg-gray-900", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { id: "footer-heading", className: "sr-only", children: "Footer" }, void 0, !1, {
        fileName: "app/routes/test-page.tsx",
        lineNumber: 740,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "py-20 xl:grid xl:grid-cols-3 xl:gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-2 gap-8 xl:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-medium text-white", children: "Shop" }, void 0, !1, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 748,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-6", children: footerNavigation.shop.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  "a",
                  {
                    href: item.href,
                    className: "text-gray-300 hover:text-white",
                    children: item.name
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 752,
                    columnNumber: 25
                  },
                  this
                ) }, item.name, !1, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 751,
                  columnNumber: 23
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 749,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 747,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-medium text-white", children: "Company" }, void 0, !1, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 763,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-6", children: footerNavigation.company.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  "a",
                  {
                    href: item.href,
                    className: "text-gray-300 hover:text-white",
                    children: item.name
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 767,
                    columnNumber: 25
                  },
                  this
                ) }, item.name, !1, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 766,
                  columnNumber: 23
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 764,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 762,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 746,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-medium text-white", children: "Account" }, void 0, !1, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 780,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-6", children: footerNavigation.account.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  "a",
                  {
                    href: item.href,
                    className: "text-gray-300 hover:text-white",
                    children: item.name
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 784,
                    columnNumber: 25
                  },
                  this
                ) }, item.name, !1, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 783,
                  columnNumber: 23
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 781,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 779,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-medium text-white", children: "Connect" }, void 0, !1, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 795,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-6", children: footerNavigation.connect.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  "a",
                  {
                    href: item.href,
                    className: "text-gray-300 hover:text-white",
                    children: item.name
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/test-page.tsx",
                    lineNumber: 799,
                    columnNumber: 25
                  },
                  this
                ) }, item.name, !1, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 798,
                  columnNumber: 23
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 796,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 794,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 778,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/test-page.tsx",
            lineNumber: 745,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-12 md:mt-16 xl:mt-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-medium text-white", children: "Sign up for our newsletter" }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 812,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-6 text-sm text-gray-300", children: "The latest deals and savings, sent to your inbox weekly." }, void 0, !1, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 815,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { className: "mt-2 flex sm:max-w-md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "email-address", className: "sr-only", children: "Email address" }, void 0, !1, {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 819,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "input",
                {
                  id: "email-address",
                  type: "text",
                  autoComplete: "email",
                  required: !0,
                  className: "appearance-none min-w-0 w-full bg-white border border-white rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 822,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ml-4 flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "button",
                {
                  type: "submit",
                  className: "w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500",
                  children: "Sign up"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/test-page.tsx",
                  lineNumber: 830,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/test-page.tsx",
                lineNumber: 829,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/test-page.tsx",
              lineNumber: 818,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/test-page.tsx",
            lineNumber: 811,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 744,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border-t border-gray-800 py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm text-gray-400", children: "Copyright \xA9 2021 Clothing Company Inc." }, void 0, !1, {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 842,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/test-page.tsx",
          lineNumber: 841,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/test-page.tsx",
        lineNumber: 743,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/test-page.tsx",
      lineNumber: 739,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/test-page.tsx",
    lineNumber: 211,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => Index,
  headers: () => headers,
  loader: () => loader,
  meta: () => meta2
});

// app/components/ProductGrid.tsx
var import_solid = require("@heroicons/react/solid"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}
function ProductGrid({ products }) {
  let formatCurrency = (currency) => {
    var a = parseFloat(currency), options = { style: "currency", currency: "USD" };
    return new Intl.NumberFormat("en-US", options).format(a);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-7xl mx-auto overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "sr-only", children: "Products" }, void 0, !1, {
      fileName: "app/components/ProductGrid.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4 gap-4", children: products.map((product) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "div",
        {
          className: "group relative p-4 sm:p-6 bg-white rounded shadow",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "rounded-lg overflow-hidden bg-white aspect-w-1 aspect-h-1 group-hover:opacity-75", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "img",
              {
                src: product.image,
                alt: product.title,
                className: "w-full h-full object-center object-contain"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProductGrid.tsx",
                lineNumber: 100,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/ProductGrid.tsx",
              lineNumber: 99,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pt-10 pb-4 text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-sm font-medium text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: `${product.link}&tag=amannhomego04-20`, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { "aria-hidden": "true", className: "absolute inset-0" }, void 0, !1, {
                  fileName: "app/components/ProductGrid.tsx",
                  lineNumber: 109,
                  columnNumber: 21
                }, this),
                product.title
              ] }, void 0, !0, {
                fileName: "app/components/ProductGrid.tsx",
                lineNumber: 108,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/components/ProductGrid.tsx",
                lineNumber: 107,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-3 flex flex-col items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "sr-only", children: [
                  product.rating,
                  " out of 5 stars"
                ] }, void 0, !0, {
                  fileName: "app/components/ProductGrid.tsx",
                  lineNumber: 114,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center", children: [0, 1, 2, 3, 4].map((rating) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_solid.StarIcon,
                  {
                    className: classNames2(
                      product.rating > rating ? "text-yellow-400" : "text-gray-200",
                      "flex-shrink-0 h-5 w-5"
                    ),
                    "aria-hidden": "true"
                  },
                  rating,
                  !1,
                  {
                    fileName: "app/components/ProductGrid.tsx",
                    lineNumber: 117,
                    columnNumber: 23
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/components/ProductGrid.tsx",
                  lineNumber: 115,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: [
                  product.ratings_total,
                  " reviews"
                ] }, void 0, !0, {
                  fileName: "app/components/ProductGrid.tsx",
                  lineNumber: 129,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/ProductGrid.tsx",
                lineNumber: 113,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-4 text-base font-medium text-gray-900", children: (_a = product.price) != null && _a.value ? `${formatCurrency(product.price.value)}` : "Check Price on Amazon" }, void 0, !1, {
                fileName: "app/components/ProductGrid.tsx",
                lineNumber: 133,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ProductGrid.tsx",
              lineNumber: 106,
              columnNumber: 15
            }, this)
          ]
        },
        product.position,
        !0,
        {
          fileName: "app/components/ProductGrid.tsx",
          lineNumber: 90,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, !1, {
      fileName: "app/components/ProductGrid.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ProductGrid.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ProductGrid.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_react_router_dom = require("react-router-dom");

// app/components/FeaturedProduct.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function FeaturedProduct({
  title,
  link,
  image
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative w-full h-[300px] bg-white p-8 rounded shadow overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-full flex flex-col justify-center items-start z-40 relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-bold text-lg text-sky-800", children: "New Arrival!" }, void 0, !1, {
        fileName: "app/components/FeaturedProduct.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-5xl mb-3  max-w-lg", children: title }, void 0, !1, {
        fileName: "app/components/FeaturedProduct.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "a",
        {
          href: link,
          target: "_blank",
          className: "text-white bg-sky-800 px-3 py-1 rounded shadow font-bold text-xl",
          children: "Buy Now"
        },
        void 0,
        !1,
        {
          fileName: "app/components/FeaturedProduct.tsx",
          lineNumber: 15,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/FeaturedProduct.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        src: image,
        className: "absolute right-12 -bottom-2 rotate-2 w-64 z-10"
      },
      void 0,
      !1,
      {
        fileName: "app/components/FeaturedProduct.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute z-10 inset-0 w-full h-full bg-white opacity-30" }, void 0, !1, {
      fileName: "app/components/FeaturedProduct.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/FeaturedProduct.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/LinkCard.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function LinkCard({
  title,
  link,
  img
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "a",
    {
      href: link,
      target: "_blank",
      className: "relative rounded p-4 flex items-center justify-center h-[100px] md:h-[165px] overflow-hiddden",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "relative z-30 text-white font-bold text-3xl", children: title }, void 0, !1, {
          fileName: "app/components/LinkCard.tsx",
          lineNumber: 18,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "z-20 w-full h-full absolute bg-gray-800 opacity-50 rounded" }, void 0, !1, {
          fileName: "app/components/LinkCard.tsx",
          lineNumber: 19,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "img",
          {
            src: img,
            className: "z-10 absolute inset-0 w-full h-full object-cover rounded"
          },
          void 0,
          !1,
          {
            fileName: "app/components/LinkCard.tsx",
            lineNumber: 20,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/LinkCard.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
}

// app/components/Links.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Links2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      LinkCard,
      {
        title: "Store Home",
        link: "https://www.amazon.com/s?i=merchant-items&me=A1EEYPEVF7DX6F&linkCode=ll2&tag=amannhomegood-20&linkId=0ff135e41b42b3212aad27b69324a5cb&language=en_US&ref_=as_li_ss_tl",
        img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Links.tsx",
        lineNumber: 6,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      LinkCard,
      {
        title: "Amazon Best Sellers",
        link: "https://www.amazon.com/Best-Sellers/zgbs?&linkCode=ll2&tag=amannhomegood-20&linkId=5a44ab3908fbce312dcaaa61ca1f9f66&language=en_US&ref_=as_li_ss_tl",
        img: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1796&q=80"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Links.tsx",
        lineNumber: 11,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      LinkCard,
      {
        title: "Amazon Clearance",
        link: "https://www.amazon.com/clearance/s?k=clearance+items&linkCode=ll2&tag=amannhomegood-20&linkId=109e6256f4a100c07101a35b1601f9b2&language=en_US&ref_=as_li_ss_tl",
        img: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Links.tsx",
        lineNumber: 16,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Links.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_react6 = require("@remix-run/react");

// app/services/redis.server.ts
var redis = __toESM(require("redis")), client = redis.createClient({
  url: process.env.REDIS_URL
});
client.on("error", (err) => console.log("Redis client error", err));
var KEY_VERSION = "1";
var getDataFromRedis = async () => {
  await client.connect();
  let data = await client.get(`f-${KEY_VERSION}-amazon`);
  if (await client.quit(), !data)
    return null;
  let jsonData = JSON.parse(data);
  return console.log("parsed", jsonData), jsonData;
};

// app/routes/index.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), meta2 = () => ({
  title: "Amann Home Goods",
  description: "Incredible products for your incredible home."
}), loader = async ({ request }) => {
  let cacheData = await getDataFromRedis();
  if (cacheData) {
    let responseBody = {
      products: cacheData,
      numPages: 1
    };
    return new Response(JSON.stringify(responseBody), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`
      }
    });
  }
  let params = {
    api_key: "09983A5D1D46484A86D22881C205957A",
    type: "seller_products",
    amazon_domain: "amazon.com",
    seller_id: "A1EEYPEVF7DX6F"
  }, page = new URL(request.url).searchParams.get("page") ?? "1", jsonData = await (await fetch(
    `https://api.rainforestapi.com/request?api_key=${params.api_key}&type=${params.type}&amazon_domain=${params.amazon_domain}&seller_id=${params.seller_id}&page=${page}`
  )).json(), body = JSON.stringify({
    products: jsonData.seller_products ?? null,
    numPages: 1
  });
  return new Response(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`
    }
  });
}, headers = ({ loaderHeaders }) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") || ""
});
function Index() {
  let { products, numPages } = (0, import_react6.useLoaderData)();
  return products == null ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "a",
    {
      href: "https://www.amazon.com/s?k=Amann+Home+Goods",
      className: "px-2 py-1 bg-white text-gray-800 rounded text-lg",
      children: "Checkout the Amazon Store"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/index.tsx",
      lineNumber: 79,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 78,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mx-auto max-w-6xl py-4 px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "grid grid-cols-1 gap-2 md:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        FeaturedProduct,
        {
          title: "Reusable Silicone Drinking Straws",
          link: "https://www.amazon.com/Reusable-Silicone-Drinking-Cleaning-Eco-Friendly/dp/B09PRPYLGG/ref=sr_1_6?m=A1EEYPEVF7DX6F&qid=1646346663&s=merchant-items&sr=1-6&tag=amannhomego04-20",
          image: "/images/straws.jpg"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 92,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        FeaturedProduct,
        {
          title: "Air Fryer Paper Liners",
          link: "https://www.amazon.com/dp/B09PYF7YFG?&linkCode=sl1&tag=amannhomego04-20&linkId=2ae2a165f73e3c2ad08166b6a92615da&language=en_US&ref_=as_li_ss_tl",
          image: "https://m.media-amazon.com/images/I/31b9CuuxsVL._AC_.jpg"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 97,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Links2, {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "font-bold text-4xl pt-6 pb-4", children: "All Products" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ProductGrid, { products }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "max-w-7xl mx-auto overflow-hidden flex items-center justify-between mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      numPages > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_react_router_dom.Link,
        {
          to: "/2",
          className: "px-2 py-1 bg-white text-gray-800 rounded text-lg",
          children: "Next Page >"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 109,
          columnNumber: 11
        },
        this
      ) : null
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w-full text-center px-2 mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-xl", children: "There was an issue getting the products. Please try again later or check out our links above." }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 124,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 123,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "daf6b684", entry: { module: "/build/entry.client-D5CKNEDS.js", imports: ["/build/_shared/chunk-KNGFGOKH.js", "/build/_shared/chunk-75OFOIPC.js", "/build/_shared/chunk-6L5LID2N.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-UCCM2AMA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-4UZU2WLN.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/test-page": { id: "routes/test-page", parentId: "root", path: "test-page", index: void 0, caseSensitive: void 0, module: "/build/routes/test-page-PI3WA3A4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-DAF6B684.js" };

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
//# sourceMappingURL=index.js.map
