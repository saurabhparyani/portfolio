import { createRouter } from "@tanstack/react-router";

import { routeTree } from "@/routeTree.gen";

// Return type is left inferred on purpose: TanStack Start reads it to register
// the router's route types app-wide.
// oxlint-disable-next-line typescript/explicit-module-boundary-types
export const getRouter = () =>
  createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true,
  });
