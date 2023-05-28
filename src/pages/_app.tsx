import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import { api } from "../utils/api";

import { GeistProvider } from "@geist-ui/core";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <GeistProvider>
        <Component {...pageProps} />
      </GeistProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
