import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/Navbar/Navbar";


export const metadata: Metadata = {
  title: "Enum",
  description: "Moscarce intern exams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Navbar />
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
