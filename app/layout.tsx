import type { Metadata } from 'next';
import { Inter, Montserrat, Roboto } from 'next/font/google';
import "./globals.css";
import Navbar from "../components/shared/navbar";
import { Footer } from "../components/Footer";
import { DeferredScripts } from "@/components/DeferredScripts";
import { CSSLoader } from "@/components/CSSLoader";

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-montserrat'
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: "IntraWeb Technologies",
  description: "AI-Powered Web Development Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <head>
        <link
          rel="preload"
          href="/intraweb-logo-white.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/pentagon-pattern.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <CSSLoader />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <DeferredScripts />
      </body>
    </html>
  );
}
