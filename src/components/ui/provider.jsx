"use client";

import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";

export function Provider({ props, children }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
      >
        <Theme appearance="light">{children}</Theme>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
