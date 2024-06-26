import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Head from "./head";
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className={`bg-gray-900 text-white ${montserrat.className}`}>
        <Navbar />
        <main className="flex-col min-h-screen flex-grow flex  w-full tracking-widest">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
