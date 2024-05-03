import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/Navbar/Navbar";
import Hero from "@/src/components/Hero/Hero";
import { StoreProvider } from "@/src/store/StoreProvider";




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
    <StoreProvider>
      <html lang="en">
        <body>
            <nav>
              <Navbar />
            </nav>
            <main>
              <section>
                  <Hero />
              </section>
              <section>
                  {children}
              </section>
            </main>
        </body>
      </html>
    </StoreProvider>
  );
}
