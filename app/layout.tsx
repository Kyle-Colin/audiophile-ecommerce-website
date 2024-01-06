import type { Metadata } from "next";
import "./global.css";
import Navigation from './components/navigation';
import Footer from './components/footer';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Audiophile"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
