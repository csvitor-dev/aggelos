import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextThemeProvider } from "@/components/theme/next-theme-provider";
import { ButtonTheme } from "@/components/theme/button-theme";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Aggelos",
  description: "Sends his messages to the heavens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f0f0f0] dark:bg-[#0f0f0f]`}
      >
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header>
            <ButtonTheme />
          </header>
          <main>{children}</main>
        </NextThemeProvider>
      </body>
    </html>
  );
}
