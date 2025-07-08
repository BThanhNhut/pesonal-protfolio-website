import { Roboto } from "next/font/google";
import "./globals.css";
import "../../public/assets/main.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({ subsets: ["vietnamese"], weight: ["100", "900"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
