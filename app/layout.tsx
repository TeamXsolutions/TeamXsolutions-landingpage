import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: [
    { path: "./fonts/Geist-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Geist-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Geist-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Geist-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Geist-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  display: "swap",
});
export const metadata: Metadata = {
  title: "TeamX — Thoughtful tech for everyday life.",
  description:
    "TeamX builds thoughtful software for everyday life. Meet Xpense, FuelX and CareX — launching soon.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "TeamX — Thoughtful tech for everyday life.",
    description:
      "TeamX builds thoughtful software for everyday life. Meet Xpense, FuelX and CareX — launching soon.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className}>
      <body>{children}</body>
    </html>
  );
}
