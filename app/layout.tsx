import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GW Law Groups — New York Personal Injury Lawyers",
  description: "GW Law Groups is a New York personal injury law firm with a rare medical-legal edge. Car accidents, medical malpractice, construction injuries, slip and fall. Free consultation. Call 212-899-8888.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
