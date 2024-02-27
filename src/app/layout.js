import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Milad Sadeghi Portfolio",
  description: "Milad Sadeghi Portfolio Website",
  link: "https://miladsade.netlify.app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
