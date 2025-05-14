import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANALISSA LONGORIA",
  description: "analissa longoria ~ vancouver photographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background  antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
