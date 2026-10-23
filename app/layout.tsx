import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex-sans",
});
export const metadata: Metadata = {
  title: "TeamX — Useful software for everyday life",
  description:
    "TeamX builds focused apps for personal finances, vehicle costs, and hospital operations. Meet Xpense, FuelX, and CareX.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "TeamX — Useful software for everyday life",
    description:
      "TeamX builds focused apps for personal finances, vehicle costs, and hospital operations. Meet Xpense, FuelX, and CareX.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <body>{children}</body>
    </html>
  );
}
