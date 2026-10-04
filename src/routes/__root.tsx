import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { NotFound } from "@/components/not-found";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  OG_IMAGE,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  PERSON_JSON_LD,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  TWITTER_HANDLE,
} from "@/constants/site";
import appCss from "@/styles/globals.css?url";
import { THEME_INIT_SCRIPT } from "@/utils/theme";

// Not typed as FC: shellComponent must render synchronously, and FC also
// allows async components.
const RootDocument = ({ children }: { children: ReactNode }): ReactNode => (
  <html lang="en" suppressHydrationWarning>
    <head>
      <HeadContent />
    </head>
    <body className="bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50/90">
      {children}
      <ScrollToTop />
      <ThemeSwitch />
      <Scripts />
    </body>
  </html>
);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: SITE_NAME },

      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: String(OG_IMAGE_WIDTH) },
      { property: "og:image:height", content: String(OG_IMAGE_HEIGHT) },
      { property: "og:image:alt", content: SITE_TITLE },
      { property: "og:site_name", content: SITE_NAME },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:creator", content: TWITTER_HANDLE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Mulish:wght@400..700&display=swap",
      },
    ],
    scripts: [
      { children: THEME_INIT_SCRIPT },
      { type: "application/ld+json", children: JSON.stringify(PERSON_JSON_LD) },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});
