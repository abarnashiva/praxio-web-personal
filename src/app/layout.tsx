import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import Title from "./title";
import RouterBar from "./router";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Empowering Tomorrow with Intelligent Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/title-logo.svg" type="image/svg+xml" />
        <meta property="og:image" content="/praxio.svg" />
        <meta property="og:title" content="Praxio IT Consulting Pvt Ltd" />
        <Title />
      </Head>
      <body className={inter.className}>
        <div className="font-sans min-h-screen text-gray-900 bg-white flex flex-col">
          <Header />
          <div className="container mx-auto">
            <RouterBar />
          </div>
          <div className="p-6">{children}</div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
