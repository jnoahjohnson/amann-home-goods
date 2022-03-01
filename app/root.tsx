import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import ReactGA from "react-ga";
import styles from "./tailwind.css";
import { useEffect } from "react";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  useEffect(() => {
    ReactGA.initialize("UA-219136583-1");
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      {/* <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-219136583-1"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'UA-219136583-1');
      </script> */}

      <body className="pt-4">
        <div className="text-center w-full flex items-center justify-center mb-2">
          <img src="/images/logo.png" className="h-28" />
        </div>
        <ul className="mx-auto py-2 flex items-center justify-center space-x-4 text-xl font-semibold flex-wrap max-w-full">
          <li className="text-gray-800 hover:text-gray-600">
            <a href="https://www.amazon.com/shops/amannhomegoods&tag=amannhomegood-20">
              Store Home
            </a>
          </li>
          <li className="text-gray-800 hover:text-gray-600">
            <a href="https://www.amazon.com/Best-Sellers/zgbs?&linkCode=ll2&tag=amannhomegood-20&linkId=5a44ab3908fbce312dcaaa61ca1f9f66&language=en_US&ref_=as_li_ss_tl">
              Amazon Best Sellers
            </a>
          </li>
          <li className="text-gray-800 hover:text-gray-600">
            <a href="https://www.amazon.com/clearance/s?k=clearance+items&linkCode=ll2&tag=amannhomegood-20&linkId=109e6256f4a100c07101a35b1601f9b2&language=en_US&ref_=as_li_ss_tl">
              Amazon Clearance Items
            </a>
          </li>
        </ul>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
