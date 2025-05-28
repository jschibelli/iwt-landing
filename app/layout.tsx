import type { Metadata } from 'next';
import { Inter, Montserrat, Roboto } from 'next/font/google';
import "./globals.css";
import Navbar from "../components/shared/navbar";
import { Footer } from "../components/Footer";

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
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;500;700&display=swap"
          as="style"
        />
        <link
          rel="preload"
          href="/intraweb-logo-white.png"
          as="image"
          type="image/png"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
