import "./globals.css";
import { Inter } from "next/font/google";
import MyHeader from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Book Of Shows",
  description: "A website that allows you to store shows you want to watch",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen w-full p-4 flex-col gap-3 bg-gradient-to-b from-deep-purple/95 to-deeper-green/90 px-7 text-white">
        <MyHeader></MyHeader>
        {children}
      </body>
    </html>
  );
}
