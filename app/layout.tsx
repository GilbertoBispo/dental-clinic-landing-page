import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--inter"
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--plus-jakarta-sans"
});

export const metadata: Metadata = {
  title: "ApexDental",
  description: "A high-converting, modern landing page designed for high-end dental practices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
