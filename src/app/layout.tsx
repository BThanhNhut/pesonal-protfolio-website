import "./globals.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/icon.css";
// import { Roboto } from "next/font/google";

// const roboto = Roboto({ subsets: ["vietnamese"], weight: ["100", "900"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
