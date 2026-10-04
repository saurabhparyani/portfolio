import type { FC } from "react";

const YEAR = new Date().getFullYear();

export const Footer: FC = () => (
  <footer className="px-4 pb-10 text-center font-mono text-xs text-muted">
    {/* The server and client can disagree on the year around New Year's. */}
    <small className="block" suppressHydrationWarning>
      &copy; {YEAR} Saurabh Paryani · No one was locked in during the making of
      this site.
    </small>
  </footer>
);
