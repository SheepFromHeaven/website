import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Personal website with blog posts and coaching services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-zinc-50 dark:bg-black font-sans">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
