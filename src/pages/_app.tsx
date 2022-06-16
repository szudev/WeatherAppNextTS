import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "@/backend/router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = "/api/trpc";

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
