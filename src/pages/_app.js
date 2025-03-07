import "@/styles/globals.css";
import { Provider } from "@/components/ui/provider";
import "../../i18n";
import Header from "@/components/Header";
import "../assets/fonts/fontsstylesheet.css";

import { useIsClient } from "usehooks-ts";
import { Toaster } from "@/components/ui/toaster";
export default function App({ Component, pageProps }) {
  const isClient = useIsClient();
  if (!isClient) return;
  return (
    <Provider>
      <Header />
      <Toaster />
      <Component theme={"light"} {...pageProps} />
    </Provider>
  );
}
