import { Link } from "@tanstack/react-router";
import type { FC } from "react";

export const NotFound: FC = () => (
  <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
    <h1 className="text-6xl font-bold">404</h1>
    <p className="text-xl text-gray-600 dark:text-gray-400">
      This page doesn't exist.
    </p>
    <Link
      to="/"
      className="bg-white px-7 py-3 rounded-full borderBlack hover:scale-110 transition dark:bg-white/10"
    >
      Back home
    </Link>
  </main>
);
