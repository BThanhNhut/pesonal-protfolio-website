// app/layout.tsx
import "./globals.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/icon.css";
import "../../public/assets/css/mystyle.css";

export const metadata = {
  title: "My Website",
  description: "Demo site",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
