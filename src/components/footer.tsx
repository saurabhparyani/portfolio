import type { FC } from "react";

const YEAR = new Date().getFullYear();

export const Footer: FC = () => (
  <footer className="mb-10 px-4 text-center text-gray-500">
    {/* The server and client can disagree on the year around New Year's. */}
    <small className="mb-2 block text-xs" suppressHydrationWarning>
      &copy; {YEAR} Saurabh Paryani. All rights reserved.
    </small>
  </footer>
);
