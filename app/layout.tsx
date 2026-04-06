import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Space Odyssey — To The Moon & Beyond",
  description: "An immersive space exploration website featuring NASA's historic missions, from Earth to the Moon and beyond. Discover the incredible story of astronauts and humanity's quest to explore the cosmos.",
  keywords: ["space", "NASA", "moon landing", "Apollo 11", "astronauts", "Mars", "space exploration"],
  openGraph: {
    title: "Space Odyssey — To The Moon & Beyond",
    description: "Discover NASA's historic missions and humanity's journey to the cosmos.",
    type: "website",
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
