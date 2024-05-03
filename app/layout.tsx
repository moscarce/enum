import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/Navbar/Navbar";
import Hero from "@/src/components/Hero/Hero";
import { StoreProvider } from "@/src/store/StoreProvider";
import { useEffect } from "react"
import { useRouter } from "next/navigation"



export const metadata: Metadata = {
  title: "Enum",
  description: "Moscarce intern exams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [])



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
