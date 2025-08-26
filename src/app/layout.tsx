import type { Metadata } from "next";
import {Manrope} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Provider from "@/components/HOC/Provider";
import Footer from "@/components/Home/Footer/Footer";

const font = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-geist-sans",
});


export const metadata: Metadata = {
  title: "Meal-Mate",
  description: "Your AI-powered meal planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
      >
        <Provider>
        <ResponsiveNav/>
        {children}
        <Footer/>
        </Provider>
      </body>
    </html>
  );
}
