import type { Metadata } from "next";
import { Alice } from "next/font/google";
import "./globals.css";

// Load Alice font
const alice = Alice({
  weight: "400", // Alice only has one weight: 400
  subsets: ["latin"],
  variable: "--font-alice",
});

export const metadata: Metadata = {
  title: "Golf Resort",
  description: "Golf Resort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alice.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
