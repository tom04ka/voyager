import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voyager — trips planned like a friend made them",
  description:
    "Tell Voyager your vibe and get a warm, day-by-day travel plan — not 40 open tabs.",
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
      {/* The dark page is the "frame"; the rounded cream panel is the "paper"
          that holds the whole app — header, content, and footer. */}
      <body className="min-h-full">
        <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col">
          <div className="flex flex-1 flex-col overflow-hidden bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
