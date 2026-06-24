import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miji Mikuu ya Afrika | African Capitals",
  description: "Gundua miji mikuu yote ya barani Afrika kwa urahisi ukiwa na muonekano wa kisasa. Jifunze nchi na miji mikuu yake leo.",
  keywords: ["afrika", "miji mikuu", "nchi", "kiswahili", "elimika"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sw" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
