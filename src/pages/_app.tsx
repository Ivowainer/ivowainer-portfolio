import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";

import { Analytics } from "@vercel/analytics/react";

import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <NextNProgress color="#10b981" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
            <Analytics />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
