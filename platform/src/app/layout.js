import React from "react";
import { InterFont } from "./fonts";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "StreamPay Onramp: Accept crypto payment for non-crypto users on Solana",
    metadataBase: new URL("https://streampayments.app"),
    description: "Accept crypto payments from non-crypto users. Use our StreamPay SDK on your website, available for Vuejs and Reactjs, on your WordPress site, and on your online store.",
    keyword: [
        "Solana",
        "Crypto to Fiat",
        "Fiat to Crypto",
        "Crypto Checkout",
        "Crypto Payment",
        "Solana Payment",
        "StreamPay Checkout",
        "Stream Payment Gateway",
        "Pay with USDC",
        "Pay with USDC",
        "Pay with EURC",
        "Pay with SOL",
        "Pay with STRM",
    ],
    openGraph: {
        title: "StreamPay: Accept crypto payment for non-crypto users on Solana",
        description: "Accept crypto payments from non-crypto users. Use our StreamPay SDK on your website, available for Vuejs and Reactjs, on your WordPress site, and on your online store.",
        url: "https://streampayments.app",
        siteName: "StreamPay",
        images: [
            {
                url: "https://www.streampayments.app/images/MacbookPro16.png",
                width: 800,
                height: 600,
            },
            {
                url: "https://www.streampayments.app/images/MacbookPro16.png",
                width: 1800,
                height: 1600,
                alt: "StreamPayments Merchant Dashboard",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    icons: {
        icon: [
            { url: "/images/favicon/favicon-16x16.png", size: "16x16" },
            { url: "/images/favicon/favicon-32x32.png", size: "32x32" },
        ],
        shortcut: "/images/favicon/favicon-32x32.png",
        apple: "/images/favicon/apple-touch-icon.png",
        android: [
            {
                url: "/images/favicon/android-chrome-192x192.png",
                size: "192x192",
            },
            {
                url: "/images/favicon/android-chrome-512x512.png",
                size: "512x512",
            },
        ],
    },
};

const RootLayout = ({ children }) => {
    return (
        <>
            <html lang="en">
                <body className={`${InterFont.variable} ${InterFont.className}`} suppressHydrationWarning={true}>
                    {children}
                </body>
            </html>
        </>
    );
};

export default RootLayout;
