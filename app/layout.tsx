import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeamX | Thoughtful tech for everyday life",
  description:
    "TeamX builds practical digital products for everyday life. Meet Xpense, FuelX and CareX, coming soon.",
  icons: {
    icon: "/teamx-logo.png",
  },
  openGraph: {
    title: "TeamX | Thoughtful tech for everyday life",
    description:
      "Focused digital products for personal finance, mobility and healthcare operations.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
