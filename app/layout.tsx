import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { OG } from "./_utils/og-helper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("localhost:3000"),
  title: {
    default: "DEFAULT_TITLE",
    template: `%s | open graph test site`,
  },
  description: "DEFAULT_DESCRIPTION",
  authors: {
    name: "lnuvy",
    url: "lnuvy.code@gmail.com",
  },
  applicationName: "open graph test site",
  keywords: ["open graph", "test", "site", "next.js", "metadata"],
  generator: "Next.js",
  robots: {
    follow: true,
    index: true,
    googleBot: { follow: true, index: true },
  },
  ...OG({}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
