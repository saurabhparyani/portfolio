import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { FC } from "react";

import { Padlock } from "@/components/padlock";

const RATTLE = { rotate: [0, -10, 8, -5, 3, 0] };

export const NotFound: FC = () => (
  <main className="flex min-h-screen flex-col items-center justify-center gap-5 px-4 text-center">
    <motion.span
      className="text-brass"
      whileHover={RATTLE}
      transition={{ duration: 0.5 }}
    >
      <Padlock open={false} className="h-24 w-16" />
    </motion.span>
    <p className="font-mono text-xs tracking-[0.3em] text-brass uppercase">
      Error 404
    </p>
    <h1 className="font-display text-4xl font-medium sm:text-5xl">
      Wrong door.
    </h1>
    <p className="max-w-sm text-muted">
      This one's locked, and nothing's behind it anyway.
    </p>
    <Link
      to="/"
      className="mt-2 rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      Back to the lobby
    </Link>
  </main>
);
