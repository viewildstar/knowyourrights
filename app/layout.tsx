import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Know Your Rights",
  description: "Privacy-first legal guidance for high-risk encounters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}