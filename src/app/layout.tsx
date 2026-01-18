import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "InTen - Expert Advice in 10 Minutes",
  description: "Connect with experts for quick 10-minute consultations. Get professional advice on business, tech, creative, and lifestyle topics.",
  keywords: ["consultations", "expert advice", "10 minutes", "quick consultations", "marketplace"],
  authors: [{ name: "InTen Platform" }],
  openGraph: {
    title: "InTen - Expert Advice in 10 Minutes",
    description: "Connect with experts for quick 10-minute consultations",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
