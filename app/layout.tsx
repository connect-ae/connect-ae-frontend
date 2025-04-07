import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import QueryProvider from "./services/query-provider";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Testimonials from "./components/pages/home/Testimonials";
import Faq from "./components/pages/home/Faq";
import CallToAction from "./components/pages/home/CallToAction";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Ae Connects - Innovating Digital Solutions",
  description:
    "Ae Connects is a leading tech company providing innovative digital solutions, web development, and cutting-edge technology services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="overflow-x-hidden">
        <QueryProvider>
          <Header />
          {children}
          <Testimonials />
          <Faq />
          <CallToAction />
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
