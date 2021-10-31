import Head from "next/head";
import "../styles/globals.scss";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
    const toggleTheme = (theme: string) => {
        switch (theme) {
            case "auto":
                document.body.dataset.colorMode = "auto";
                break;
            case "light":
                document.body.dataset.colorMode = "light";
                break;
            case "dark":
                document.body.dataset.colorMode = "dark";
                break;
            case "dark_dimmed":
                document.body.dataset.colorMode = "dark_dimmed";
                break;
            default:
                document.body.dataset.colorMode = "auto";
        }
    };

    useEffect(() => {
        const themeInLocalStorage = localStorage.getItem("theme") || "auto";
        toggleTheme(themeInLocalStorage);
    }, []);

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                    />
                    <meta name="description" content="Description" />
                    <meta name="keywords" content="Keywords" />
                    <title>The Vasv Deets</title>

                    <link rel="manifest" href="/manifest.json" />
                    <link
                        href="/favicon-16x16.png"
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                    />
                    <link
                        href="/favicon-32x32.png"
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                    />
                    <link rel="apple-touch-icon" href="/apple-icon.png" />
                    <meta name="theme-color" content="#317EFB" />
                </Head>
                <Component {...pageProps} />
            </QueryClientProvider>
        </>
    );
};

export default MyApp;
