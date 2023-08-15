import "./globals.css";
import { Montserrat } from "@next/font/google";
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`bg-gray-900 text-white ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
