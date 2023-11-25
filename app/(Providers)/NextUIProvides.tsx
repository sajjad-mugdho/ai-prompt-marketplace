"use client";
import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";

interface ProviderProprs {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProprs) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
