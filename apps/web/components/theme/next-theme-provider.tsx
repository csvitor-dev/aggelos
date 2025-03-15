"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export function NextThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof ThemeProvider>) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
