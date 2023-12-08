import type { Metadata } from "next";
import "./global.css";
import Navbar from './components/navigation/navbar';
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
