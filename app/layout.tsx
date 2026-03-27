import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "goline.life — Agent Life Is Now Online",
  description: "Build, publish, and monetize AI agents with no code. Choose your LLM, design your workflow, launch to the world.",
  keywords: ["AI agents", "low-code", "agent builder", "LLM", "marketplace", "automation"],
  openGraph: {
    title: "goline.life — Agent Life Is Now Online",
    description: "Build AI agents that live, work, and earn on the internet. No friction. No limits.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-full bg-white text-gray-900">{children}</body>
    </html>
  );
}
