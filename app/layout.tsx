import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fashtown | Curated Hype & Timeless Streetwear",
  description: "Your wardrobe's future favorite page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
