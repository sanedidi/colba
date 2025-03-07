import { Provider } from "@/components/ui/provider";
import '@/styles/globals.scss';

export default function RootLayout({ children }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
