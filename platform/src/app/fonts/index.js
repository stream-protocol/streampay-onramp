import localFont from "next/font/local";

export const InterFont = localFont({
  src: [
    {
      path: "./Inter/Inter-Black.otf",
      weight: "900",
    },
    {
      path: "./Inter/Inter-Bold.otf",
      weight: "700",
    },
    {
      path: "./Inter/Inter-Medium.otf",
      weight: "500",
    },
    {
      path: "./Inter/Inter-Regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-inter",
});

