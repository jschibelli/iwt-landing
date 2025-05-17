import "./globals.css";
import Navbar from "../components/shared/navbar";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "IntraWeb Technologies",
  description: "Landing page for IntraWeb Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
