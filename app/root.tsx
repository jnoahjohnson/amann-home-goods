import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import ReactGA from "react-ga";
import styles from "./styles/app.css";
import { useEffect } from "react";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => {
  return { title: "Amann Home Goods" };
};

export default function App() {
  useEffect(() => {
    ReactGA.initialize("UA-219136583-1");
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="pt-8 bg-slate-50">
        <div className="text-center w-full flex items-center justify-center mb-2">
          <img src="/images/logo.png" className="h-24" />
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
