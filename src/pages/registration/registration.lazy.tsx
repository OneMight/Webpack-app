import { lazy } from "react";

export const RegistrationLazy = lazy(() => {
  return import("./registration");
});
